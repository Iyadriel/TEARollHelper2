type FeatID = typeof FEAT_KEYS[number];

interface Feat {
    id: FeatID;
    name: string;
    desc?: string;
}

const FEAT_KEYS = <const>['FEATLESS', 'MASTER'];

const FEATS: Record<FeatID, Feat> = {
    FEATLESS: {
        id: 'FEATLESS',
        name: 'Featless / other',
    },
    MASTER: {
        id: 'MASTER',
        name: 'Master',
        desc:
            'The mastery bonuses granted to you by your chosen stats are enhanced.',
    },
};

export { FeatID, Feat, FEAT_KEYS, FEATS };
