interface AceDBInstance extends AceCallback {}

interface AceDB extends Library {
    New(name: string, defaults: object): AceDBInstance;
}
