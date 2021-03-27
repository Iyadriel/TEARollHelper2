interface AceConfigDialog {
    OpenFrames: Record<string, AceGUI.Frame>;

    AddToBlizOptions(
        appName: string,
        name: string,
        parent: WoWAPI.FrameInterfaceCategory,
    ): WoWAPI.FrameInterfaceCategory;

    Close(appName: string): void;
    CloseAll(): void;
    Open(appName: string, container?: AceGUI.Container, ...path: string[]): void;
    SelectGroup(appName: string, ...path: string[]): void;
    SetDefaultSize(appName: string, width: number, height: number): void;
}
