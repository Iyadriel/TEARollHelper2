import { debug } from 'logger';

enum Event {
    // System
    INITIALIZED = 'INITIALIZED',
    PROFILE_CHANGED = 'PROFILE_CHANGED',

    // Character sheet
    FEAT_CHANGED = 'FEAT_CHANGED', // featID
    WEAKNESSES_CHANGED = 'WEAKNESSES_CHANGED',
    WEAKNESS_ADDED = 'WEAKNESS_ADDED', // weaknessID
    WEAKNESS_REMOVED = 'WEAKNESS_REMOVED', // weaknessID
}

type EventCallback = (...args: any[]) => any;

const listeners: Record<string, EventCallback[]> = {};

function addListener(event: Event, callback: EventCallback): void {
    if (!listeners[event]) {
        listeners[event] = [];
    }
    listeners[event].push(callback);
}

function fire(event: Event, ...args: any[]): void {
    debug('[bus]', event, ...args);
    if (!listeners[event]) return;

    listeners[event].forEach((callback) => {
        callback(...args);
    });
}

export { Event, addListener, fire };
