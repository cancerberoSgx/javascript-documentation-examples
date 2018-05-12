# Documenting events

another demonstration about why TypeDoc @event tag with the standard way of documenting events is confusing versus using @asMemberOf which IMO gives the optimal description for the @event concept. 

Why typedoc proposal is confusing: 

 * events names are hidden 
 * events are stacked inside the listener name
 * addListener method dissapear ! now is an event. Are events callable ? 
 * if there are alias to `addListener` method (like in node.js EventEmitter), then it gets more confusing - now more methods "disappear",  and more events with strange names appear
 * I would say that not using @event at all generates less confusing descriptions. TODO: link to Emitter3

From discussion : https://github.com/TypeStrong/typedoc/issues/136 in TypeDoc: 

"
@event param is intended to be used additionally to any other doc tags, something like this:

```ts
/**
 * Subscribe for a general event by name.
 * @param event The name of the event to subscribe for.
 * @param The handler called when the event occurs.
 * @event
 */
on(event: string, handler: (e: observable.EventData) => void): void;
```
As events are not part of the TypeScript language the @event tag should just give a slightly hint in the documentation. It can be used in conjunction with any code element, e.g. in TypeDoc we use the @event tag with static variables.
"

This is example standardEventTag

asMemberOfEventTag is similar, but: the listener types are renamed to match the event name and the @event and @asMemberOf tags are added to them not to the method addListener. 