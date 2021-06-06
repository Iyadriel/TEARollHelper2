interface AceDBOptions<T> extends AceCallback {
    GetOptionsTable(
        db: AceDBInstance<T>,
        noDefaultProfiles?: boolean,
    ): AceOptionsTable;
}
