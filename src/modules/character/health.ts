import { calculateMaxHealth } from 'rules/health';
import { getPlayerStamina } from './stats';

// TODO
/* function calculatePlayerMaxHealth(): number {
    const staminaBuff = buffsState.state.buffs.stamina.get()
    const maxHealthBuff = buffsState.state.buffs.maxHealth.get()

    return calculateMaxHealth(getPlayerStamina(), staminaBuff, maxHealthBuff)
} */

function calculatePlayerMaxHealthWithoutBuffs(): number {
    return calculateMaxHealth(getPlayerStamina());
}

export {
    // calculatePlayerMaxHealth,
    // eslint-disable-next-line import/prefer-default-export
    calculatePlayerMaxHealthWithoutBuffs,
};
