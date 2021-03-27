const AceConfigDialog = LibStub<AceConfigDialog>('AceConfigDialog-3.0');

interface Window {
    name: string;
    displayName: string;
}

const turn: Window = {
    name: 'TEARollHelper2Turn',
    displayName: 'Turn View',
};

const config: Window = {
    name: 'TEARollHelper2Config',
    displayName: 'TEA Roll Helper',
};

const WINDOWS = {
    config,
    turn,
};

function openWindow(name: string): void {
    AceConfigDialog.Open(name);
}

function toggleWindow(name: string): void {
    if (AceConfigDialog.OpenFrames[name]) {
        AceConfigDialog.Close(name);
    } else {
        openWindow(name);
    }
}

export { WINDOWS, openWindow, toggleWindow };
