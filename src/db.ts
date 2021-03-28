import { Event, fire } from 'bus';
import { Stats } from 'constants';

function onProfileChanged(): void {
    fire(Event.PROFILE_CHANGED);
}

const defaults = {
    profile: {
        stats: {
            [Stats.Offence]: 0,
            [Stats.Defence]: 0,
            [Stats.Spirit]: 0,
            [Stats.Stamina]: 0,
        },
    },
};

type TEADB = typeof defaults;

function init(options: AceOptions.Root): void {
    const db = LibStub<AceDB>('AceDB-3.0').New('TestTypescriptDB', defaults);
    TEARollHelper2.db = db;

    options.args.profile = LibStub<AceDBOptions>('AceDBOptions-3.0').GetOptionsTable(db);

    db.RegisterCallback(TEARollHelper2, 'OnProfileChanged', onProfileChanged);
    db.RegisterCallback(TEARollHelper2, 'OnProfileCopied', onProfileChanged);
    db.RegisterCallback(TEARollHelper2, 'OnProfileReset', onProfileChanged);
}

export default init;
export { TEADB };
