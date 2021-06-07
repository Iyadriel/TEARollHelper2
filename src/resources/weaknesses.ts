import { EngagementDistance } from 'models/engagement-distance';
import { EnemyID } from 'resources/enemies';
import { Player } from './players';

type WeaknessID = typeof WEAKNESS_KEYS[number];

interface Weakness {
    id: WeaknessID;
    name: string;
    desc?: string;
    icon?: string;
    distanceFromEnemy?: EngagementDistance;
    weakAgainstEnemies?: {
        [enemyId in EnemyID]?: true;
    };
}

interface CustomWeakness extends Weakness {
    isCustom: true;
    player: Player;
}

const WEAKNESS_KEYS = <const>[
    'ACOLYTE',
    'BRIGHT_BURNER',
    'BRUTE',
    'CORRUPTED',
    'FATELESS',
    'FEATLESS',
    'FRAGILE',
    'GLASS_CANNON',
    'OLD_SCARS',
    'OTHER',
    'OUTCAST',
    'OVERFLOW',
    'REBOUND',
    'TEMPERED_BENEVOLENCE',
    'TEMPO',
    'TIMID',
    'UNDERACHIEVER',
    'WOE_UPON_THE_AFFLICTED',
    'WORN',
];

const WEAKNESSES: Record<WeaknessID, Weakness | CustomWeakness> = {
    ACOLYTE: {
        id: 'ACOLYTE',
        name: 'Acolyte',
        desc: 'You no longer benefit from your chosen masteries.',
    },
    BRIGHT_BURNER: {
        id: 'BRIGHT_BURNER',
        name: 'Bright Burner',
        desc: 'All your traits have their amount of uses lowered by 1.',
    },
    BRUTE: {
        id: 'BRUTE',
        name: 'Brute',
        desc: 'You can no longer heal, buff, or pick any Utility traits.',
    },
    CORRUPTED: {
        id: 'CORRUPTED',
        name: 'Corrupted',
        desc:
            'All healing received from other players and NPCs is cut in half, rounded down. Furthermore you must choose one of the following types of healing: Holy, Unholy, Life. Whenever you are healed by the chosen type, your max HP is reduced by 3. Your HP returns to normal after combat ends, but you are not healed for the missing HP. If healed by your chosen type outside of combat your HP returns to normal after the next combat section ends.',
        icon: 'Interface\\Icons\\spell_deathknight_bloodplague',
    },
    FATELESS: {
        id: 'FATELESS',
        name: 'Fateless',
        desc:
            'Your fate points can now only do one of the three listed things (your choice).',
    },
    FEATLESS: {
        id: 'FEATLESS',
        name: 'Featless',
        desc: 'You may no longer pick a Feat.',
    },
    FRAGILE: {
        id: 'FRAGILE',
        name: 'Fragile',
        desc: 'Reduce your max HP by 8.',
    },
    GLASS_CANNON: {
        id: 'GLASS_CANNON',
        name: 'Glass Cannon',
        desc:
            'You take 4 additional damage from all sources, but you also gain +2 dmg.',
        isCustom: true,
        player: Player.Callean,
    },
    OLD_SCARS: {
        id: 'OLD_SCARS',
        name: 'Old Scars',
        desc:
            'Your Critical Wounds levels can no longer be removed by the spending of Greater Heal slots.',
    },
    OTHER: {
        id: 'OTHER',
        name: 'Other',
    },
    OUTCAST: {
        id: 'OUTCAST',
        name: 'Outcast',
        desc: 'You no longer benefit from your Racial Trait.',
    },
    OVERFLOW: {
        id: 'OVERFLOW',
        name: 'Overflow',
        desc:
            'You no longer benefit from the Excess mechanic. Requires at least 4 out  of 6 points in the Spirit stat in order to pick.',
    },
    REBOUND: {
        id: 'REBOUND',
        name: 'Rebound',
        desc:
            'When rolling a nat 1 on any player turn roll, you take damage equal to your Offense or Spirit stat, whichever is highest, and you have disadvantage during the next enemy turn. Requires at least 4 out of 6 points in either Offense or Spirit to pick.',
        icon: 'Interface\\Icons\\ability_hunter_hatchettoss',
    },
    TEMPO: {
        id: 'TEMPO',
        name: 'Tempo',
        desc:
            'If you take damage during an enemy turn, you have disadvantage on your next player turn.',
        icon: 'Interface\\Icons\\ability_mage_timewarp',
    },
    TEMPERED_BENEVOLENCE: {
        id: 'TEMPERED_BENEVOLENCE',
        name: 'Tempered Benevolence',
        desc:
            'You gain a Greater Heal slot for every 3 Spirit, rather than every 2 Spirit, and do not gain Greater Heal slots from the +4 and +6 Spirit bonuses. Requires at least 4/6 in Spirit in order to pick. Can not be picked together with Paragon.',
    },
    TIMID: {
        id: 'TIMID',
        name: 'Timid',
        desc:
            'While in melee range of an enemy, your Offence, Defense, and Spirit stats are reduced by -2.',
        icon: 'Interface\\Icons\\spell_misc_emotionafraid',
        distanceFromEnemy: EngagementDistance.Melee,
    },
    UNDERACHIEVER: {
        id: 'UNDERACHIEVER',
        name: 'Underachiever',
        desc: 'You cannot gain advantage on any roll under any circumstance.',
    },
    WOE_UPON_THE_AFFLICTED: {
        id: 'WOE_UPON_THE_AFFLICTED',
        name: 'Woe Upon The Afflicted',
        desc:
            'You take 4 additional damage from creatures and magical sources of the following types - undead, demon, void, eldritch.',
        weakAgainstEnemies: {
            DEMON: true,
            ELDRITCH: true,
            UNDEAD: true,
            VOID: true,
        },
    },
    WORN: {
        id: 'WORN',
        name: 'Worn',
        desc: 'When going KO your max HP is reduced by 6 instead of 3.',
    },
};

export { WeaknessID, Weakness, WEAKNESS_KEYS, WEAKNESSES };
