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

interface AceOptionsInfo extends Array<string> {
    [index: number]: string;
    // @ts-ignore: I'm creating a Dictarray!
    0: string;
    // @ts-ignore: I'm creating a Dictarray!
    options: AceOptionsTable;
}

type AceOptionsCallbackFunc<T> = (info: AceOptionsInfo, value?: any) => T;
type AceOptionsCallback<T> = AceOptionsCallbackFunc<T> | string;

interface AceOptionsTable {
    type: AceOptionsTableType;
    name: string | ((info: AceOptionsInfo) => string);
    desc?: string | ((info: AceOptionsInfo) => string);
    validate?: AceOptionsCallback<true | string> | false;
    confirm?: AceOptionsCallback<boolean | string> | boolean;
    order: number | AceOptionsCallback<number>;
    disabled?: boolean | AceOptionsCallback<boolean>;

    hidden?: boolean | AceOptionsCallback<boolean>;
    guiHidden?: boolean;
    dialogHidden?: boolean;
    dropdownHidden?: boolean;
    cmdHidden?: boolean;

    icon?: string | ((info: AceOptionsInfo) => string);
    iconCoords?: Array<number> | AceOptionsCallback<Array<number>>;

    handler?: object;
    width?: 'double' | 'half' | 'full' | 'normal' | number;
}

declare namespace AceOptions {
    interface WithImage {
        image?: string | ((info: AceOptionsInfo) => string);
        imageCoords?: Array<number> | AceOptionsCallback<Array<number>>;
        imageWidth?: number;
        imageHeight?: number;
    }

    interface Execute extends Omit<AceOptionsTable, 'validate'>, WithImage {
        type: 'execute';
        func: AceOptionsCallback<void>;
    }

    type Getter<T> = (info: AceOptionsInfo) => T;
    type Setter<T> = (info: AceOptionsInfo, value: T) => void;
    type MultiselectGetter = (info: AceOptionsInfo, key: string) => boolean;
    type MultiselectSetter = (
        info: AceOptionsInfo,
        key: string,
        value: boolean,
    ) => void;

    interface Input<T> extends AceOptionsTable {
        type: 'input';
        get: Getter<T>;
        set: Setter<T>;
        multiline?: boolean | number;
        pattern?: string;
        usage?: string;
    }

    interface Toggle extends AceOptionsTable {
        type: 'toggle';
        get: Getter<boolean>;
        set: Setter<boolean>;
        tristate?: boolean;
    }

    interface Range extends AceOptionsTable {
        type: 'range';
        min: number;
        max: number;
        softMin?: number;
        softMax?: number;
        step?: number;
        bigStep?: number;
        isPercent?: boolean;
        get?: Getter<number>;
        set?: Setter<number>;
    }

    interface Select<T> extends AceOptionsTable {
        type: 'select';
        values:
            | Record<string, T>
            | ((info: AceOptionsInfo) => Record<string, T>);
        sorting?: string[] | ((info: AceOptionsInfo) => string[]);
        get: Getter<string>;
        set: Setter<string>;
        style?: 'dropdown' | 'radio';
    }

    interface MultiSelect<T> extends AceOptionsTable {
        type: 'multiselect';
        values:
            | Record<string, T>
            | ((info: AceOptionsInfo) => Record<string, T>);
        sorting?: string[] | ((info: AceOptionsInfo) => string[]);
        get: MultiselectGetter;
        set: MultiselectSetter;
        style?: 'dropdown' | 'radio';
    }

    interface Header
        extends Omit<
            AceOptionsTable,
            'desc' | 'validate' | 'confirm' | 'disabled' | 'handler' | 'width'
        > {
        type: 'header';
    }

    interface Description
        extends Omit<
                AceOptionsTable,
                | 'desc'
                | 'validate'
                | 'confirm'
                | 'disabled'
                | 'handler'
                | 'width'
            >,
            WithImage {
        type: 'description';
        fontSize?: 'small' | 'medium' | 'large';
    }

    interface Group<T = void>
        extends Omit<
            AceOptionsTable,
            'validate' | 'confirm' | 'disabled' | 'handler' | 'width'
        > {
        args: Record<string, any>;
        type: 'group';
        childGroups?: 'tree' | 'tab' | 'select';
        get?: Getter<T>;
        set?: Setter<T>;
        validate?: (info: AceOptionsInfo, input: string) => string | boolean;

        inline?: boolean;
        cmdInline?: boolean;
        guiInline?: boolean;
        dropdownInline?: boolean;
        dialogInline?: boolean;
    }

    interface Root extends Omit<Group, 'order'> {
        name: string;
    }
}
