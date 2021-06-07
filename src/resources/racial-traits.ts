const RACE_IDS = <const>[
    1, // Human
    3, // Dwarf
    4, // Night Elf
    7, // Gnome
    11, // Draenei
    22, // Worgen
    25, // Pandaren
    29, // Void Elf
    30, // Lightforged Draenei
    32, // Kul Tiran
    34, // Dark Iron Dwarf
    37, // Mechagnome
];

type RaceID = typeof RACE_IDS[number] | -1 | 100;

function getRaceName(raceID: RaceID): string {
    return C_CreatureInfo.GetRaceInfo(raceID).raceName;
}

const RACE_NAMES = {
    [-1]: 'None',
    ...RACE_IDS.reduce((names: Partial<Record<RaceID, string>>, raceID) => {
        names[raceID] = getRaceName(raceID);
        return names;
    }, {} as Partial<Record<RaceID, string>>),
    100: 'High elf',
};

export { RaceID, RACE_NAMES };
