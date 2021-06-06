import characterOptions from 'ui/config/character';
import settingsOptions from 'ui/config/settings';
import { Widgets } from 'ui/widgets';
import { openWindow, WINDOWS } from './windows';

export default function getOptions(): AceOptions.Root {
    return {
        name: WINDOWS.config.name,
        type: 'group',
        args: {
            turn: Widgets.Execute({
                order: 0,
                name: 'Show turn window',
                func: () => {
                    openWindow(WINDOWS.turn.name);
                },
            }),
            character: Widgets.Group({
                order: 1,
                name: 'Character',
                desc: 'Character setup',
                cmdHidden: true,
                childGroups: 'tab',
                args: {
                    character: characterOptions(),
                },
            }),
            settings: settingsOptions(),
            config: Widgets.Execute({
                order: 3,
                name: 'Show config UI',
                guiHidden: true,
                func: () => {
                    openWindow(WINDOWS.config.name);
                },
            }),
        },
    };
}
