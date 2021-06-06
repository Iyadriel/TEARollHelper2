enum Actions {
    Attack = 'attack',
    Damage = 'damage',
    CC = 'cc',
    Healing = 'healing',
    Buff = 'buff',
    Defend = 'defend',
    MeleeSave = 'meleeSave',
    RangedSave = 'rangedSave',
    Utility = 'utility',
}

enum Stats {
    Offence = 'offence',
    Defence = 'defence',
    Spirit = 'spirit',
    Stamina = 'stamina',
}

const StatLabels = {
    [Stats.Offence]: 'Offence',
    [Stats.Defence]: 'Defence',
    [Stats.Spirit]: 'Spirit',
    [Stats.Stamina]: 'Stamina',
};

export { Actions, Stats, StatLabels };
