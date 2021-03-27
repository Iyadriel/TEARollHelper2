import { addListener, Event } from 'bus';

addListener(Event.INITIALIZED, (who) => {
    TEARollHelper2.Print(`Hello ${who}!`);
});
