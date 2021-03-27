interface AceDBOptions extends AceCallback {
    GetOptionsTable(db: AceDBInstance, noDefaultProfiles?: boolean): AceOptionsTable;
}
