interface AceConfig {
    RegisterOptionsTable(
        appName: string,
        options: AceOptions.Root,
        slashCmd?: string | string[],
    ): void;
}
