import { hasFeat } from 'modules/character/feats';
import { hasStaminaMastery } from 'modules/character/stats';
import { hasWeakness } from 'modules/character/weaknesses';
import { FEATS, WEAKNESSES } from 'resources/index';

const BASE_MAX_HEALTH = 25;

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
    // eslint-disable-next-line import/prefer-default-export
    calculateMaxHealth,
};
