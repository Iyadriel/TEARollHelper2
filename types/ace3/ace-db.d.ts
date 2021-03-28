interface AceDBInstance extends AceCallback {}

interface AceDB extends Library {
    New<T extends Record<string, any>>(name: string, defaults: T): AceDBInstance & T;
}
