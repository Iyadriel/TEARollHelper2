import { Stats } from 'constants';
import {
    getPlayerStat,
    hasFeat,
    hasStaminaMastery,
    hasWeakness,
} from 'modules/character';
import { FEATS, WEAKNESSES } from 'resources';

const BASE_MAX_HEALTH = 25;
const BASE_STAT_POINTS = 12;
const MAX_STAT_POINTS = 16;
const NEGATIVE_POINTS_BUDGET = MAX_STAT_POINTS - BASE_STAT_POINTS;
const STAT_MIN_VALUE = -4;
const STAT_MAX_VALUE = 6;
const STAT_POINT_COSTS: Record<number, number> = {
    1: 1,
    2: 2,
    3: 4,
    4: 6,
    5: 9,
    6: 12,
};

function getNegativePointsAssigned(): number {
    let negativePointsAllocated = 0;

    Object.values(Stats).forEach((stat) => {
        const value = getPlayerStat(stat);
        if (value < 0) {
            negativePointsAllocated -= value;
        }
    });

    return negativePointsAllocated;
}

function getNegativePointsUsed(): number {
    return Math.min(NEGATIVE_POINTS_BUDGET, getNegativePointsAssigned());
}

function getAvailableNegativePoints(): number {
    return NEGATIVE_POINTS_BUDGET - getNegativePointsUsed();
}

function getAvailableStatPoints(): number {
    let points = BASE_STAT_POINTS;

    Object.values(Stats).forEach((stat) => {
        const value = getPlayerStat(stat);
        if (value > 0) {
            points -= STAT_POINT_COSTS[value];
        }
    });

    points += getNegativePointsUsed();

    return points;
}

function getHpPerStamina(): number {
    return hasStaminaMastery() && hasFeat(FEATS.MASTER) ? 3 : 2;
}

function calculateMaxHealth(
    stamina: Stat,
    staminaBuff: number = 0,
    maxHealthBuff: number = 0,
): number {
    (stamina as number) += staminaBuff;

    let maxHealth =
        BASE_MAX_HEALTH + stamina * getHpPerStamina() + maxHealthBuff;

    if (hasWeakness(WEAKNESSES.FRAGILE)) {
        maxHealth -= 8;
    }

    maxHealth = Math.max(1, maxHealth); // sanity check

    return maxHealth;
}

export {
    STAT_MIN_VALUE,
    STAT_MAX_VALUE,
    getNegativePointsAssigned,
    getNegativePointsUsed,
    getAvailableNegativePoints,
    getAvailableStatPoints,
    calculateMaxHealth,
};
