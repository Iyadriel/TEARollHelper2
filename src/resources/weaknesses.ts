type WeaknessID = typeof WEAKNESS_KEYS[number];

interface Weakness {
    id: WeaknessID;
    name: string;
    desc?: string;
}

const WEAKNESS_KEYS = <const>[
    'ACOLYTE',
    'FEATLESS',
    'FRAGILE',
    'OTHER',
    'OUTCAST',
];

const WEAKNESSES: Record<WeaknessID, Weakness> = {
    ACOLYTE: {
        id: 'ACOLYTE',
        name: 'Acolyte',
        desc: 'You no longer benefit from your chosen masteries.',
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
    OTHER: {
        id: 'OTHER',
        name: 'Other',
    },
    OUTCAST: {
        id: 'OUTCAST',
        name: 'Outcast',
        desc: 'You no longer benefit from your Racial Trait.',
    },
};

export { WeaknessID, Weakness, WEAKNESS_KEYS, WEAKNESSES };
