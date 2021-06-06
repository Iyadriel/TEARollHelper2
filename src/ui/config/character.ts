import { Widgets } from 'ui/widgets';
import statsOptions from './character/stats';

export default function getOptions(): AceOptions.Group {
    return Widgets.Group({
        order: 1,
        name: 'Character sheet',
        desc: 'Set up your character sheet',
        guiInline: true,
        args: {
            stats: statsOptions(),
        },
    });
}
