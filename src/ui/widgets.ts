export namespace Widgets {
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
