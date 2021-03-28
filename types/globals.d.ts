import { TEADB } from 'db';

interface TEARollHelper2 extends AceAddon {
    db?: AceDBInstance & TEADB;
}

declare global {
    let TEARollHelper2: TEARollHelper2;
}

export {};
