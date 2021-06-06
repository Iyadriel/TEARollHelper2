export namespace Widgets {
    export function Execute(
        execute: Omit<AceOptions.Execute, 'type'>,
    ): AceOptions.Execute {
        return {
            type: 'execute',
            ...execute,
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

    export function Group(
        group: Omit<AceOptions.Group, 'type'>,
    ): AceOptions.Group {
        return {
            type: 'group',
            ...group,
        };
    }
}
