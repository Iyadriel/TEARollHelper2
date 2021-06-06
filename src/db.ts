import { Event, fire } from 'bus';
import { Stats } from 'constants';
import CharacterSheet from 'models/character-sheet';
import { FEATS } from 'resources/feats';

function onProfileChanged(): void {
    fire(Event.PROFILE_CHANGED);
}

function getDefaultCharacterSheet(): CharacterSheet {
    return {
        stats: {
            [Stats.Offence]: 0,
            [Stats.Defence]: 0,
            [Stats.Spirit]: 0,
            [Stats.Stamina]: 0,
        },
        featID: FEATS.FEATLESS.id,
    };
}

const defaults = {
    profile: getDefaultCharacterSheet(),
    global: {
        settings: {
            autoUpdateTRP: false,
            debug: false,
            minimapIcon: {},
            refreshOnPartyUpdate: true,
            showCustomFeatsTraits: false,
            suggestFatePoints: true,
        },
        warningsSeen: {
            updateTRP: false,
        },
    },
};

type TEADB = typeof defaults;

function init(options: AceOptions.Root): void {
    const db = LibStub<AceDB>('AceDB-3.0').New('TeaRollHelper2DB', defaults);
    TEARollHelper2.db = db;

    options.args.profile = LibStub<AceDBOptions<TEADB>>(
        'AceDBOptions-3.0',
    ).GetOptionsTable(db);

    db.RegisterCallback(TEARollHelper2, 'OnProfileChanged', onProfileChanged);
    db.RegisterCallback(TEARollHelper2, 'OnProfileCopied', onProfileChanged);
    db.RegisterCallback(TEARollHelper2, 'OnProfileReset', onProfileChanged);
}

export default init;
export { TEADB };
