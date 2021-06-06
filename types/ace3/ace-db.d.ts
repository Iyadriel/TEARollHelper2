interface AceDBInstanceBase extends AceCallback {}

type AceDBInstance<T> = AceDBInstanceBase & T;

interface AceDB extends Library {
    New<T extends Record<string, any>>(
        name: string,
        defaults: T,
    ): AceDBInstance<T>;
}
