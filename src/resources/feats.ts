import { Stats } from 'constants';
import { RequiredStats } from 'models/required-stats';
import { EnemyID } from './enemies';
import { Player } from './players';

type FeatID = typeof FEAT_KEYS[number];

interface Feat {
    id: FeatID;
    name: string;
    desc?: string;
    note?: string;
    icon?: string;
    passives?: {
        advantageAgainstEnemies?: {
            [enemyId in EnemyID]?: boolean;
        };
        bonusDmgAgainstEnemies?: {
            [enemyId in EnemyID]?: number;
        };
        resistance?: {
            [damageType in DamageType]?: number;
        };
    };
    requiredStats?: RequiredStats;
}

interface CustomFeat extends Feat {
    isCustom: true;
    player: Player;
}

const FEAT_KEYS = <const>[
    'FEATLESS',
    'ADRENALINE',
    'AVENGING_GUARDIAN',
    'BLOOD_HARVEST',
    'BULWARK_OF_HOPE',
    'CHAPLAIN_OF_VIOLENCE',
    'COUNTER_FORCE',
    'CYCLES_OF_LIFE_AND_DEATH',
    'DEFENSIVE_TACTICIAN',
    'DIVINE_PURPOSE',
    'ETERNAL_SACRIFICE',
    'EXPANSIVE_ARSENAL',
    'FOCUS',
    'INSPIRING_PRESENCE',
    'KEEN_SENSE',
    'LEADER',
    'LIFE_SENTINEL',
    'LIVING_BARRICADE',
    'MARKSMAN',
    'MASTER',
    'MEDIC',
    'MENDER',
    'MERCY_FROM_PAIN',
    'MONSTER_HUNTER',
    'ONSLAUGHT',
    'PAIN_BY_PROXY',
    'PARAGON',
    'PENANCE',
    'PHALANX',
    'PROFESSIONAL',
    'SHEPHERD_OF_THE_WICKED',
    'SUNDER_THE_VILE',
    'TRAUMA_RESPONSE',
    'VALIANT_WATCHER',
    'VANGUARD',
    'VENGEANCE',
    'WARDER',
];

const FEATS: Record<FeatID, Feat | CustomFeat> = {
    FEATLESS: {
        id: 'FEATLESS',
        name: 'Featless / other',
    },
    ADRENALINE: {
        id: 'ADRENALINE',
        name: 'Adrenaline',
        desc:
            'Beating the threshold by 6 or more with an Offence attack roll lets you perform a second attack against the same target. Cannot trigger more than once per player turn.',
    },
    AVENGING_GUARDIAN: {
        id: 'AVENGING_GUARDIAN',
        name: 'Avenging Guardian',
        desc:
            'Performing a successful save on someone else allows you to roll attack/cc on the next player turn with your Defence or Spirit stat and gives you a bonus to damage dealt equal to half your Defence or Spirit stat rounded up.',
        icon: 'Interface\\Icons\\ability_paladin_holyavenger',
        requiredStats: [
            {
                [Stats.Defence]: 4,
            },
            {
                [Stats.Spirit]: 4,
            },
        ],
    },
    BLOOD_HARVEST: {
        id: 'BLOOD_HARVEST',
        name: 'Blood Harvest',
        desc:
            'For every point you put into the Offence stat you gain a Harvest Slot. You can activate these Harvest Slots to spend them akin to a Greater Heal Slot. Spending a Harvest slot increases the damage of your next Offence attack by +3. This damage is dealt even if you miss. You can activate up to 3 Harvest Slots at the same time.',
    },
    BULWARK_OF_HOPE: {
        id: 'BULWARK_OF_HOPE',
        name: 'Bulwark of Hope',
        desc:
            'Healing or buffing a player grants you advantage on your next Defence or Save roll. Defending yourself or performing a successful Save grants you advantage on your next Heal or Buff roll.',
        icon: 'Interface\\Icons\\spell_holy_blessingofprotection',
        requiredStats: [
            {
                [Stats.Defence]: 4,
                [Stats.Spirit]: 4,
            },
        ],
    },
    CHAPLAIN_OF_VIOLENCE: {
        id: 'CHAPLAIN_OF_VIOLENCE',
        name: 'Chaplain of Violence',
        desc:
            'Healing a single friendly target for 3HP or more increases the damage of your next successful Offence Attack roll by +2. Using a Greater Heal slot increases the damage to +4. This bonus does not stack and is consumed on your next successful Offence Attack roll.',
        icon: 'Interface\\Icons\\spell_holy_holyguidance',
        requiredStats: [
            {
                [Stats.Spirit]: 4,
            },
        ],
    },
    COUNTER_FORCE: {
        id: 'COUNTER_FORCE',
        name: 'Counter-Force',
        desc:
            'Your melee save rolls only benefit from half of your Defence stat (rounded up), but if you manage the roll you deal damage back to the attacker by an amount equal to double your Defence stat.',
    },
    CYCLES_OF_LIFE_AND_DEATH: {
        id: 'CYCLES_OF_LIFE_AND_DEATH',
        name: 'Cycles of Life and Death',
        desc:
            'The benefits from your chosen masteries are half as effective, but when rolling Offence Attack or Spirit Healing on a player turn you can perform both actions at the same time.',
        note:
            'The addon will adjust your masteries, but Attack and Healing will still be displayed as separate actions.',
        requiredStats: [
            {
                [Stats.Offence]: 4,
                [Stats.Spirit]: 4,
            },
        ],
    },
    DEFENSIVE_TACTICIAN: {
        id: 'DEFENSIVE_TACTICIAN',
        name: 'Defensive Tactician',
        desc:
            'After successfully blocking an enemy attack (either at you or through a Melee save) add half the damage rounded down to your next successful Offence attack roll. Does not stack, the highest result is chosen. Requires at least 4/6 Defence to pick.',
        icon: 'Interface\\Icons\\spell_holy_ardentdefender',
    },
    DIVINE_PURPOSE: {
        id: 'DIVINE_PURPOSE',
        name: 'Divine Purpose',
        desc:
            'Vindication has 2 extra charges, but you can no longer perform Heal rolls while in combat.',
        isCustom: true,
        player: Player.Iyadriel,
    },
    ETERNAL_SACRIFICE: {
        id: 'ETERNAL_SACRIFICE',
        name: 'Eternal Sacrifice',
        desc:
            'Your melee attacks have advantage.|nYour Defence is increased by +4 against magical attacks.|nYou unlock the following traits: Blade Dance, Fel Rush.|nYou gain the following weaknesses: Corrupted, Fateless, Reckless Abandon, Old Scars, Outcast.',
        passives: {
            resistance: {
                [DamageType.Magical]: 4,
                [DamageType.Mixed]: 2,
            },
        },
        isCustom: true,
        player: Player.Kelanra,
    },
    EXPANSIVE_ARSENAL: {
        id: 'EXPANSIVE_ARSENAL',
        name: 'Expansive Arsenal',
        desc: 'You may pick an additional Trait.',
    },
    FOCUS: {
        id: 'FOCUS',
        name: 'Focus',
        desc:
            'On player turn you can choose to roll with advantage, but when doing so you have disadvantage on the following enemy turn. Choose before rolling whether or not to apply the advantage.',
        icon: 'Interface\\Icons\\spell_nature_focusedmind',
    },
    INSPIRING_PRESENCE: {
        id: 'INSPIRING_PRESENCE',
        name: 'Inspiring Presence',
        desc:
            'You now buff someone for both their current player turn and the next enemy turn, but you only apply half of your spirit stat to the roll, rounded up.',
    },
    KEEN_SENSE: {
        id: 'KEEN_SENSE',
        name: 'Keen sense',
        desc:
            'The threshold for getting a critical roll is reduced to 19 from 20.',
    },
    LEADER: {
        id: 'LEADER',
        name: 'Leader',
        desc:
            'You can now buff with the Offence stat instead of the Spirit stat.',
        note: 'The addon will automatically use the highest stat.',
    },
    LIFE_SENTINEL: {
        id: 'LIFE_SENTINEL',
        name: 'Life Sentinel',
        desc:
            'Place a blessing on a friendly player, whenever you heal someone the amount of healing is duplicated onto your chosen player. You can switch out the chosen player once per player turn. Healing the blessed player causes no additional benefits, a player can only benefit from one Life Sentinel at a time.',
    },
    LIVING_BARRICADE: {
        id: 'LIVING_BARRICADE',
        name: 'Living Barricade',
        desc:
            'When tasked with doing multiple defense rolls in the same enemy turn (saves not included) you take 3 less damage from all sources for the duration of the enemy turn. Likewise when tasked with reducing an amount of damage taken with a defence roll, you reduce that damage taken by an additional 5.',
        note:
            'The multiple rolls part must be activated manually from the Defend action tab. The 5 dmg reduction part is applied automatically.',
        icon: 'Interface\\Icons\\ability_warrior_shieldwall',
    },
    MARKSMAN: {
        id: 'MARKSMAN',
        name: 'Marksman',
        desc:
            'Your damage rolls are now 5-10. When dealing only your base damage, your base damage is 5.',
    },
    MASTER: {
        id: 'MASTER',
        name: 'Master',
        desc:
            'The mastery bonuses granted to you by your chosen stats are enhanced.',
    },
    MEDIC: {
        id: 'MEDIC',
        name: 'Medic',
        desc:
            'Your out of combat basic healing is doubled, and the amount of heals you can do out of combat is increased by 2.',
    },
    MENDER: {
        id: 'MENDER',
        name: 'Mender',
        desc: 'Gain 2 additional Greater Heal Slots.',
    },
    MERCY_FROM_PAIN: {
        id: 'MERCY_FROM_PAIN',
        name: 'Mercy from Pain',
        desc:
            'Every time you deal 5 damage or more to a single enemy, your next healing roll is boosted by +2 HP, if you deal 5 damage or more to multiple enemies at once, your next healing roll is instead boosted by +4HP (does not stack). The bonus to healing lasts until the end of combat, but does not stack with itself and is consumed on your next heal roll.',
        icon: 'Interface\\Icons\\ability_priest_atonement',
    },
    MONSTER_HUNTER: {
        id: 'MONSTER_HUNTER',
        name: 'Monster Hunter',
        desc:
            'You have advantage on offense attack rolls against creatures of the following types - Undead, Demon, Void, Eldritch.',
        passives: {
            advantageAgainstEnemies: {
                DEMON: true,
                ELDRITCH: true,
                UNDEAD: true,
                VOID: true,
            },
        },
    },
    ONSLAUGHT: {
        id: 'ONSLAUGHT',
        name: 'Onslaught',
        desc:
            'When rolling an Offence Attack roll against a target and failing to meet the threshold to hit, you still deal your base damage to the target.',
    },
    PAIN_BY_PROXY: {
        id: 'PAIN_BY_PROXY',
        name: 'Pain by Proxy',
        desc:
            'Choose one of the following feats; Adrenaline, Focus, Onslaught. Another player character of your choice benefits from the chosen feat. You may change player and/or feat on a player turn or outside of combat, this occupies your player turn.',
    },
    PARAGON: {
        id: 'PARAGON',
        name: 'Paragon',
        desc:
            'You no longer gain Greater Heal Slots. Every 3 Spirit lets you apply your basic heal in full to an additional target. Not increased by buffs, but is increased by spending Excess. You can no longer divide your healing done.',
    },
    PENANCE: {
        id: 'PENANCE',
        name: 'Penance',
        desc:
            'You can now perform Attack rolls with your Spirit stat. When using a Greater Heal Slot you can also heal someone for the Heal Slot amount while using your Spirit to deal damage to an enemy. You can still choose to heal, buff, and ranged save with your Spirit Stat.',
    },
    PHALANX: {
        id: 'PHALANX',
        name: 'Phalanx',
        desc: 'You now have advantage on Melee save rolls.',
    },
    PROFESSIONAL: {
        id: 'PROFESSIONAL',
        name: 'Professional',
        desc:
            'You may pick 2 additional Utility Traits. Furthermore your Utility Traits now grant you a bonus of +8 rather than +5.',
    },
    SHEPHERD_OF_THE_WICKED: {
        id: 'SHEPHERD_OF_THE_WICKED',
        name: 'Shepherd of the Wicked',
        desc:
            'You can now roll CC rolls with your Defence stat instead of your Offence stat.',
    },
    SUNDER_THE_VILE: {
        id: 'SUNDER_THE_VILE',
        name: 'Sunder the Vile',
        desc:
            'Gain an additional 4 damage done against Demons, Undead, Eldritch, and Void enemies, as well as those who use such Magic.',
        passives: {
            bonusDmgAgainstEnemies: {
                DEMON: 4,
                ELDRITCH: 4,
                UNDEAD: 4,
                VOID: 4,
            },
        },
    },
    TRAUMA_RESPONSE: {
        id: 'TRAUMA_RESPONSE',
        name: 'Trauma Response',
        desc:
            'Your cost for removing a Critical Wound from yourself or another character is now 1 Greater Heal Slot.',
    },
    VALIANT_WATCHER: {
        id: 'VALIANT_WATCHER',
        name: 'Valiant Watcher',
        desc:
            'You can perform save rolls despite taking damage on the same enemy turn.',
    },
    VANGUARD: {
        id: 'VANGUARD',
        name: 'Vanguard',
        desc:
            'Your damage dealt is increased by half of your Defence rounded down. Your damage taken is decreased and your healing received is increased by half of your Offense rounded down.',
        requiredStats: [
            {
                [Stats.Offence]: 4,
                [Stats.Defence]: 4,
            },
        ],
    },
    VENGEANCE: {
        id: 'VENGEANCE',
        name: 'Vengeance',
        desc:
            'When the raw result of your Offence attack roll is 16 or higher, you gain an additional +4 to Offence and +2 damage for your next player round.',
        icon: 'Interface\\Icons\\ability_racial_spatialrift',
        isCustom: true,
        player: Player.Callean,
    },
    WARDER: {
        id: 'WARDER',
        name: 'Warder',
        desc: 'You now have advantage on Ranged save rolls.',
    },
};

export { FeatID, Feat, FEAT_KEYS, FEATS };
