declare global {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let C_CreatureInfo: {
        GetRaceInfo: (raceID: number) => { raceName: string };
    };
}

export {};
