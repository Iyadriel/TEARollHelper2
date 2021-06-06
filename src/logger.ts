import settings from 'settings';

type ChatFrame = WoWAPI.ChatFrame;

declare const DEFAULT_CHAT_FRAME: ChatFrame;

// TODO pick up on chat frames being added/removed
function findDebugFrame(): ChatFrame | undefined {
    for (let i = 1; i < NUM_CHAT_WINDOWS; i++) {
        const chatFrame = _G[`ChatFrame${i}`];
        if (chatFrame.name === 'Debug') {
            return chatFrame;
        }
    }
    return undefined;
}

const debugFrame = findDebugFrame() || DEFAULT_CHAT_FRAME;

function debug(...args: any[]): void {
    if (settings.debug.get()) {
        TEARollHelper2.Print(debugFrame, ...args);
    }
}

// eslint-disable-next-line import/prefer-default-export
export { debug };
