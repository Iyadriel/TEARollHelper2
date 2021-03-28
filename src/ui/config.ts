import settingsOptions from 'ui/config/settings';
import { openWindow, WINDOWS } from './windows';

export default function getOptions(): AceOptions.Root {
    const turn: AceOptions.Execute = {
        order: 0,
        type: 'execute',
        name: 'Show turn window',
        func: () => {
            openWindow(WINDOWS.turn.name);
        },
    };

    const character: AceOptions.Group = {
        order: 1,
        type: 'group',
        name: 'Character',
        desc: 'Character setup',
        cmdHidden: true,
        childGroups: 'tab',
        args: {},
    };

    const config: AceOptions.Execute = {
        order: 3,
        type: 'execute',
        name: 'Show config UI',
        guiHidden: true,
        func: () => {
            openWindow(WINDOWS.config.name);
        },
    };

    return {
        name: WINDOWS.config.name,
        type: 'group',
        args: {
            turn,
            character,
            settings: settingsOptions(),
            config,
        },
    };
}
