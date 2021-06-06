import { addListener, Event, fire } from 'bus';
import { FEATS, Weakness, WEAKNESSES, WeaknessID } from 'resources';
import { setPlayerFeatByID } from './feats';

function getPlayerWeaknesses(): Partial<
    Record<'ACOLYTE' | 'FRAGILE', boolean>
> {
    return TEARollHelper2.db.profile.weaknesses;
}

function getNumWeaknesses(): number {
    return Object.keys(getPlayerWeaknesses()).length;
}

function hasWeaknessByID(weaknessID: WeaknessID): boolean {
    return TEARollHelper2.db.profile.weaknesses[weaknessID] || false;
}

function hasWeakness(weakness: Weakness): boolean {
    return hasWeaknessByID(weakness.id);
}

function togglePlayerWeaknessByID(
    weaknessID: WeaknessID,
    value: boolean,
): void {
    if (value) {
        TEARollHelper2.db.profile.weaknesses[weaknessID] = value;
    } else {
        delete TEARollHelper2.db.profile.weaknesses[weaknessID];
    }

    const event = value ? Event.WEAKNESS_ADDED : Event.WEAKNESS_REMOVED;
    fire(event, weaknessID);
    fire(Event.WEAKNESSES_CHANGED);
}

addListener(Event.WEAKNESS_ADDED, (weaknessID) => {
    if (weaknessID === WEAKNESSES.FEATLESS.id) {
        setPlayerFeatByID(FEATS.FEATLESS.id);
    } else if (weaknessID === WEAKNESSES.OUTCAST.id) {
        // TODO
        // setPlayerRacialTrait(RACIAL_TRAITS.OUTCAST);
    }
});

export {
    getPlayerWeaknesses,
    getNumWeaknesses,
    hasWeaknessByID,
    hasWeakness,
    togglePlayerWeaknessByID,
};
