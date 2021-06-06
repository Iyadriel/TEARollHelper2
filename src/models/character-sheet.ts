import { Stats } from 'constants';
import { FeatID } from 'resources/feats';

export default interface CharacterSheet {
    stats: {
        [Stats.Offence]: number;
        [Stats.Defence]: number;
        [Stats.Spirit]: number;
        [Stats.Stamina]: number;
    };
    featID: FeatID;
}
