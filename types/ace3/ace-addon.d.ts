interface Library {}

interface AceAddon {
    name: string;
    tostring(): string;

    OnInitialize(): void;
    Print(...args: any[]): void;
}

interface AceAddonLib extends Library {
    NewAddon(name: string, ...embed: string[]): AceAddon;
}
