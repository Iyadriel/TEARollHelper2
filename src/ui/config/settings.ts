import settings from 'settings';
import { Widgets } from 'ui/widgets';
// import { Group, Toggle } from 'ui/widgets';

export default function getOptions(): AceOptions.Group {
    return {
        order: 2,
        type: 'group',
        name: 'Settings',
        cmdHidden: true,
        args: {
            gameplay: Widgets.Group({
                order: 0,
                name: 'Gameplay',
                inline: true,
                args: {
                    suggestFatePoints: Widgets.Toggle({
                        order: 0,
                        name: 'Suggest Fate Points',
                        desc: 'Offer to use a Fate Point on a bad roll',
                        get: settings.suggestFatePoints.get,
                        set: (info, value) =>
                            settings.suggestFatePoints.set(value),
                    }),
                },
            }),
            addon: Widgets.Group({
                order: 1,
                name: 'Addon',
                inline: true,
                args: {
                    autoUpdateTRP: Widgets.Toggle({
                        order: 0,
                        name: 'Auto update Total RP profile',
                        desc:
                            "When your character's state changes (e.g. when you lose HP), update your Total RP automatically.",
                        width: 'full',
                        get: settings.autoUpdateTRP.get,
                        set: (info, value) => {
                            settings.autoUpdateTRP.set(value);
                            if (value) {
                                TEARollHelper2.db.global.warningsSeen.updateTRP = true;
                            }
                        },
                        confirm() {
                            const { global } = TEARollHelper2.db;
                            if (
                                !settings.autoUpdateTRP.get() &&
                                !global.warningsSeen.updateTRP
                            ) {
                                return "This will allow this addon to overwrite any content you have set in your 'Currently' field.";
                            }
                            return false;
                        },
                    }),
                },
            }),
            advanced: Widgets.Group({
                order: 2,
                name: 'Advanced',
                inline: true,
                args: {
                    debugMode: Widgets.Toggle({
                        order: 0,
                        name: 'Debug mode',
                        desc: "Don't touch this! I said don't.",
                        width: 'full',
                        get: settings.debug.get,
                        set: (info, value) => {
                            settings.debug.set(value);
                        },
                    }),
                },
            }),
        },
    };
}
