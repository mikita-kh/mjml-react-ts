declare module 'mjml-core/lib/types' {
    type Types = Record<
        'boolean' | 'enum' | 'color' | 'unit' | 'string' | 'integer',
        {
            matcher: RegExp;
            typeConstructor: FunctionConstructor;
        }
    >;

    const types: Types;

    export default types;
}

declare module 'camelcase' {
    export default function (s: string): string;
}

