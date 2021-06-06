export namespace Widgets {
    export function Execute(
        execute: Omit<AceOptions.Execute, 'type'>,
    ): AceOptions.Execute {
        return {
            type: 'execute',
            ...execute,
        };
    }

    export function Input<T>(
        input: Omit<AceOptions.Input<T>, 'type'>,
    ): AceOptions.Input<T> {
        return {
            type: 'input',
            ...input,
        };
    }

    export function Toggle(
        toggle: Omit<AceOptions.Toggle, 'type'>,
    ): AceOptions.Toggle {
        return {
            type: 'toggle',
            ...toggle,
        };
    }

    export function Range(
        range: Omit<AceOptions.Range, 'type'>,
    ): AceOptions.Range {
        return {
            type: 'range',
            ...range,
        };
    }

    export function Select<T>(
        select: Omit<AceOptions.Select<T>, 'type'>,
    ): AceOptions.Select<T> {
        return {
            type: 'select',
            ...select,
        };
    }

    export function MultiSelect<T>(
        multiSelect: Omit<AceOptions.MultiSelect<T>, 'type'>,
    ): AceOptions.MultiSelect<T> {
        return {
            type: 'multiselect',
            ...multiSelect,
        };
    }

    export function Header(
        header: Omit<AceOptions.Header, 'type'>,
    ): AceOptions.Header {
        return {
            type: 'header',
            ...header,
        };
    }

    export function Description(
        description: Omit<AceOptions.Description, 'type'>,
    ): AceOptions.Description {
        return {
            type: 'description',
            ...description,
        };
    }

    export function Group<T>(
        group: Omit<AceOptions.Group<T>, 'type'>,
    ): AceOptions.Group<T> {
        return {
            type: 'group',
            ...group,
        };
    }
}
