type AceOptionsTableType =
    | 'execute'
    | 'input'
    | 'toggle'
    | 'range'
    | 'select'
    | 'multiselect'
    | 'color'
    | 'keybinding'
    | 'header'
    | 'description'
    | 'group';

interface AceOptionsInfo {
    options: AceOptionsTable;
    // TODO
}

type AceOptionsCallbackFunc<T> = (info: AceOptionsInfo, value?: any) => T;
type AceOptionsCallback<T> = AceOptionsCallbackFunc<T> | string;

interface AceOptionsTable {
    type: AceOptionsTableType;
    name: AceOptionsCallback<string>;
    desc?: AceOptionsCallback<string>;
    validate?: AceOptionsCallback<true | string> | false;
    confirm?: AceOptionsCallback<boolean | string> | boolean;
    order: number | AceOptionsCallback<number>;
    disabled?: boolean | AceOptionsCallback<boolean>;

    hidden?: boolean | AceOptionsCallback<boolean>;
    guiHidden?: boolean;
    dialogHidden?: boolean;
    dropdownHidden?: boolean;
    cmdHidden?: boolean;

    icon?: AceOptionsCallback<string>;
    handler?: object;
    width?: 'double' | 'half' | 'full' | 'normal' | number;
}

declare namespace AceOptions {
    interface Group
        extends Omit<AceOptionsTable, 'validate' | 'confirm' | 'disabled' | 'handler' | 'width'> {
        args: Record<string, any>;
        type: 'group';
        childGroups?: 'tree' | 'tab' | 'select';
    }

    interface Root extends Omit<Group, 'order'> {
        name: string;
    }

    interface Execute extends Omit<AceOptionsTable, 'validate'> {
        type: 'execute';
        func: AceOptionsCallback<void>;
        // TODO: image + related props
    }
}
