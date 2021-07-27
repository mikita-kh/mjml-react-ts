/* eslint-disable import/no-extraneous-dependencies */
import camelCase from 'camelCase';
import { opendirSync, readFileSync, writeFileSync } from 'fs';
import handlebars from 'handlebars';
import mjmlCoreTypes from 'mjml-core/lib/types';
import pascalCase from 'pascalcase';
import { join, resolve } from 'path';

const rootDir = resolve(process.cwd());

declare class MjmlComponentClass {
    static readonly componentName: string;

    static readonly allowedAttributes?: Record<string, string>;

    handler: () => void;

    render: () => string;
}
type MjmlComponent = typeof MjmlComponentClass;

type AttributeProcessor = 'boolToAttr' | 'boolean' | 'integer' | 'string' | 'unit';
interface RenderData {
    componentName: string;
    component: string;
    hasChildren: boolean;
    childrenAsDangerouslySetInnerHTML: boolean;
    hasClassName: boolean;
    hasAttributes: boolean;
    hasProcessors: boolean;
    allowedAttributes: Array<{
        propName: string;
        tsType: string;
        processor: AttributeProcessor;
        attr: string;
        isStringType: boolean;
        boolToAttr: boolean;
    }>;
}

const mjmlTypes = Object.keys(mjmlCoreTypes) as Array<keyof typeof mjmlCoreTypes>;

function parseTypeConfig(typeConfig: string) {
    let tsType = 'string';
    let processor: AttributeProcessor = 'string';
    const mjmlType = mjmlTypes.find((type) => mjmlCoreTypes[type].matcher.exec(typeConfig));

    if (mjmlType === 'integer') {
        tsType = 'number';
        processor = 'integer';
    } else if (mjmlType === 'boolean') {
        tsType = 'boolean';
        processor = 'boolean';
    } else if (mjmlType === 'enum') {
        tsType = typeConfig
            .slice(5, -1)
            .split(',')
            .map((s) => JSON.stringify(s.trim()))
            .join(' | ');
    } else if (mjmlType === 'unit') {
        const types = ['string'];
        const units = /\(([^)]+)\)/.exec(typeConfig)?.[1].split(',');
        const argsMatch = /{([^}]+)}/.exec(typeConfig);
        const args = ((argsMatch && argsMatch[1] && argsMatch[1].split(',')) || [1]).map(Number); // defaults to 1

        if (units?.includes('auto')) {
            types.push(JSON.stringify('auto'));
        }

        if (units?.includes('px')) {
            types.push('number');
        }

        if (args[1] > 1) {
            const length = +args[1];
            let i = -1;

            // eslint-disable-next-line no-plusplus
            while (++i < length) {
                types.push(
                    `[${Array(i + 1)
                        .fill('number')
                        .join(', ')}]`,
                );
            }
        } else if (args[0] > 1) {
            types.push(
                `[${Array(args[0] + 1)
                    .fill('number')
                    .join(', ')}]`,
            );
        }

        tsType = types.join(' | ');
        processor = 'unit';
    }

    return { tsType, processor, mjmlType };
}

const mjmlPackages = (function getMjmlPackage() {
    const packages: string[] = [];

    const dir = opendirSync(join(rootDir, `node_modules`));
    let dirent = dir.readSync();

    while (dirent) {
        if (dirent.name.startsWith('mjml') && !/^mjml(?:-(?:migrate|(?:preset-)?core|cli|parser-xml|validator))?$/.test(dirent.name)) {
            packages.push(dirent.name);
        }

        dirent = dir.readSync();
    }

    return packages;
})();

const components = mjmlPackages
    .map((mjmlPackage): [string, MjmlComponent[]] => {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const all = require(mjmlPackage) as MjmlComponent | Record<string, MjmlComponent>;

        if (all.componentName) {
            return [mjmlPackage, [all as MjmlComponent]];
        }

        return [
            mjmlPackage,
            Object.values(all as Record<string, MjmlComponent>).reduce<MjmlComponent[]>(
                (l, cmp) => (cmp.componentName ? l.concat(cmp) : l),
                [],
            ),
        ];
    })
    .filter(([, { length }]) => length > 0);

function detectCssClassSupport(Component: MjmlComponent) {
    const { prototype } = Component;
    return Object.getOwnPropertyNames(prototype).some(
        (propertyName) =>
            typeof prototype[propertyName as keyof typeof MjmlComponentClass['prototype']] === 'function' &&
            String(prototype[propertyName as keyof typeof MjmlComponentClass['prototype']]).includes('css-class'),
    );
}

function detectChildrenSupport(Component: MjmlComponent) {
    const { prototype } = Component;

    if (typeof prototype.render === 'function' || Component.componentName === 'mj-head') {
        return true;
    }

    return (
        typeof prototype.handler === 'function' &&
        Boolean(String(prototype.handler).includes('getContent()') || /\bchildren\b/.exec(String(prototype.handler)))
    );
}

const render = handlebars.compile<RenderData>(readFileSync(join(rootDir, 'templates', `component.tsx.hbs`), 'utf-8'), {
    noEscape: true,
});

const componentsWithCssClass = components.reduce<Record<string, boolean>>(
    (map, [, all]) =>
        Object.values(all).reduce(
            (acc, cmp) => ({
                ...acc,
                [cmp.componentName]: detectCssClassSupport(cmp),
            }),
            map,
        ),
    {},
);

const componentsWithChildren = components.reduce<Record<string, boolean>>(
    (map, [, all]) =>
        Object.values(all).reduce(
            (acc, cmp) => ({
                ...acc,
                [cmp.componentName]: detectChildrenSupport(cmp),
            }),
            map,
        ),
    {},
);

const globalAttributes = new Set<string>();

components
    .flatMap(([, all]) => all)
    .forEach((Component) => {
        const { componentName, allowedAttributes = {} } = Component;

        const data = {
            componentName,
            component: pascalCase(componentName),
        } as RenderData;

        data.allowedAttributes = Object.entries(allowedAttributes).map(([attr, value]) => {
            globalAttributes.add(attr);

            if (attr === 'inline' || attr === 'full-width') {
                return {
                    propName: camelCase(attr),
                    tsType: 'boolean',
                    boolToAttr: true,
                    processor: 'boolToAttr',
                    attr,
                    isStringType: false,
                };
            }

            const { processor, tsType } = parseTypeConfig(value);

            return {
                propName: camelCase(attr),
                tsType,
                boolToAttr: false,
                processor,
                attr,
                isStringType: processor === 'string',
            };
        });

        data.hasChildren = !!componentsWithChildren[componentName];
        data.childrenAsDangerouslySetInnerHTML = componentName === 'mj-style';
        data.hasClassName = !!componentsWithCssClass[componentName];
        data.hasAttributes = data.allowedAttributes.length > 0;
        data.hasProcessors = data.allowedAttributes.some((attr) => !attr.isStringType && !attr.boolToAttr);

        writeFileSync(`${__dirname}/../src/components/${componentName}.tsx`, render(data));
    });

((componentName) => {
    writeFileSync(
        `${__dirname}/../src/components/${componentName}.tsx`,
        render({
            componentName,
            component: pascalCase(componentName),
            allowedAttributes: [...globalAttributes.values()].map((attr) => ({
                propName: camelCase(attr),
                tsType: 'string',
                processor: 'string',
                attr,
                allowedType: JSON.stringify('string'),
                isStringType: true,
                boolToAttr: false,
            })),
            hasClassName: false,
            hasProcessors: false,
            hasAttributes: true,
            hasChildren: false,
            childrenAsDangerouslySetInnerHTML: false,
        }),
    );
})('mj-all');

((componentName) => {
    writeFileSync(
        `${__dirname}/../src/components/${componentName}.tsx`,
        render({
            componentName,
            component: pascalCase(componentName),
            allowedAttributes: [
                {
                    attr: 'owa',
                    boolToAttr: false,
                    isStringType: true,
                    processor: 'string',
                    tsType: '"desktop" | "mobile"',
                    propName: 'owa',
                },
                {
                    attr: 'lang',
                    boolToAttr: false,
                    isStringType: true,
                    processor: 'string',
                    tsType: 'string',
                    propName: 'lang',
                },
            ],
            hasClassName: false,
            hasProcessors: false,
            hasAttributes: true,
            hasChildren: true,
            childrenAsDangerouslySetInnerHTML: false,
        }),
    );
})('mjml');

writeFileSync(
    `${__dirname}/../src/index.ts`,
    [{ componentName: 'mjml' }, { componentName: 'mj-all' }, ...components.flatMap(([, all]) => all)]
        .flatMap(({ componentName }) => [
            `export type { ${pascalCase(componentName)}Props } from './components/${componentName}';`,
            `export { default as ${pascalCase(componentName)} } from './components/${componentName}';`,
        ])
        .join('\n'),
);
