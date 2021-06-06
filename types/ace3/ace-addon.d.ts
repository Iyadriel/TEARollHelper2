interface Library {}

interface AceAddon<T> {
    name: string;
    tostring(): string;
    db: AceDBInstance<T>;

    OnInitialize(): void;
    Print(...args: any[]): void;
}

interface AceAddonLib extends Library {
    NewAddon<T>(name: string, ...embed: string[]): AceAddon<T>;
}
