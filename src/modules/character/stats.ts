import { Event, fire } from 'bus';
import { Stats } from 'constants';
import { WEAKNESSES } from 'resources/index';
import { hasWeakness } from './weaknesses';

const STAT_POINTS_PROFICIENCY = 4;
const STAT_POINTS_MASTERY = 6;

function getPlayerOffence(): Stat {
    return TEARollHelper2.db.profile.stats.offence as Stat;
}

function getPlayerDefence(): Stat {
    return TEARollHelper2.db.profile.stats.defence as Stat;
}

function getPlayerSpirit(): Stat {
    return TEARollHelper2.db.profile.stats.spirit as Stat;
}

function getPlayerStamina(): Stat {
    return TEARollHelper2.db.profile.stats.stamina as Stat;
}

function getPlayerStat(stat: Stats): Stat {
    return TEARollHelper2.db.profile.stats[stat] as Stat;
}

function hasProficiency(stat: Stats): boolean {
    if (hasWeakness(WEAKNESSES.ACOLYTE)) return false;

    return getPlayerStat(stat) >= STAT_POINTS_PROFICIENCY;
}

function hasMastery(stat: Stats): boolean {
    if (hasWeakness(WEAKNESSES.ACOLYTE)) return false;

    return getPlayerStat(stat) >= STAT_POINTS_MASTERY;
}

function hasOffenceProficiency(): boolean {
    return hasProficiency(Stats.Offence);
}

function hasDefenceProficiency(): boolean {
    return hasProficiency(Stats.Defence);
}

function hasSpiritProficiency(): boolean {
    return hasProficiency(Stats.Spirit);
}

function hasStaminaProficiency(): boolean {
    return hasProficiency(Stats.Stamina);
}

function hasOffenceMastery(): boolean {
    return hasMastery(Stats.Offence);
}

function hasDefenceMastery(): boolean {
    return hasMastery(Stats.Defence);
}

function hasSpiritMastery(): boolean {
    return hasMastery(Stats.Spirit);
}

function hasStaminaMastery(): boolean {
    return hasMastery(Stats.Stamina);
}

function setStat(stat: Stats, value: Stat): void {
    const oldValue = TEARollHelper2.db.profile.stats[stat];
    TEARollHelper2.db.profile.stats[stat] = value;
    if (oldValue !== value) {
        fire(Event.CHARACTER_STAT_CHANGED, stat, value);
    }
}

export {
    getPlayerOffence,
    getPlayerDefence,
    getPlayerSpirit,
    getPlayerStamina,
    getPlayerStat,
    hasProficiency,
    hasMastery,
    hasOffenceProficiency,
    hasDefenceProficiency,
    hasSpiritProficiency,
    hasStaminaProficiency,
    hasOffenceMastery,
    hasDefenceMastery,
    hasSpiritMastery,
    hasStaminaMastery,
    setStat,
};
