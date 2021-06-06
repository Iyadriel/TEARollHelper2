import { TEADB } from 'db';

interface TEARollHelper2 extends AceAddon<TEADB> {}

declare global {
    let TEARollHelper2: TEARollHelper2;
}

export {};
