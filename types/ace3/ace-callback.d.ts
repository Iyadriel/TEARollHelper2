/** @noSelf **/
interface AceCallback {
    RegisterCallback(
        target: object,
        func: string,
        handler: (...args: any[]) => void,
    ): void;
}
