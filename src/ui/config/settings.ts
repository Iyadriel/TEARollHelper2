export default function getOptions(): AceOptions.Group {
    const gameplay: AceOptions.Group = {
        order: 0,
        type: 'group',
        name: 'Gameplay',
        inline: true,
        args: {},
    };

    return {
        order: 2,
        type: 'group',
        name: 'Settings',
        cmdHidden: true,
        args: { gameplay },
    };
}
