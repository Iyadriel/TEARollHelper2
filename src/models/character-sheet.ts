import { Stats } from 'constants';
import { FeatID, WeaknessID } from 'resources';

export default interface CharacterSheet {
    stats: {
        [Stats.Offence]: number;
        [Stats.Defence]: number;
        [Stats.Spirit]: number;
        [Stats.Stamina]: number;
    };
    featID: FeatID;
    weaknesses: Partial<Record<WeaknessID, boolean>>;
}
