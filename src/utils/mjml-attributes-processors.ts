const processors = {
    boolean: (value: boolean): string => Boolean(value).toString(),
    integer: (value: number): string => Number(value).toString(),
    string: (value: string): string => value,
    unit: (value: string | number | number[]): string => {
        if (Array.isArray(value)) {
            return value.map((v) => `${v}px`).join(' ');
        }

        if (typeof value === 'number') {
            return `${value}px`;
        }

        return value.toString();
    },
};

export default processors;
