import init from 'db';
import 'events';
import getOptions from 'ui/config';

const AceConfig = LibStub<AceConfig>('AceConfig-3.0');
const AceConfigDialog = LibStub<AceConfigDialog>('AceConfigDialog-3.0');

TEARollHelper2 = LibStub<AceAddonLib>('AceAddon-3.0').NewAddon(
    'TEARollHelper2',
    'AceBucket-3.0',
    'AceComm-3.0',
    'AceConsole-3.0',
    'AceEvent-3.0',
    'AceSerializer-3.0',
);

TEARollHelper2.OnInitialize = function OnInitialize() {
    const config = getOptions();

    AceConfig.RegisterOptionsTable(config.name, config, 'tea2');
    AceConfigDialog.SetDefaultSize(config.name, 700, 550);
    init(config);
};
