import { TEADB } from 'db';

type BooleanSetting = Exclude<keyof TEADB['global']['settings'], 'minimapIcon'>;

function getSet(key: BooleanSetting, callback?: (value: any) => void): GetterSetter<boolean> {
    return {
        get(): boolean {
            return TEARollHelper2.db!.global.settings[key];
        },
        set(value: boolean): void {
            TEARollHelper2.db!.global.settings[key] = value;
            if (callback) callback(value);
        },
    };
}

const settings = {
    autoUpdateTRP: getSet('autoUpdateTRP'),
    debug: getSet('debug'),
    refreshOnPartyUpdate: getSet('refreshOnPartyUpdate'),
    showCustomFeatsTraits: getSet('showCustomFeatsTraits'),
    suggestFatePoints: getSet('suggestFatePoints'),
};

export default settings;
