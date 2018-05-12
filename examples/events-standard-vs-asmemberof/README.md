# Documenting events

another demonstration about why TypeDoc @event tag with the standard way of documenting events is confusing versus using @asMemberOf which IMO gives the optimal description for the @event concept. 

Why typedoc proposal is confusing: 

 * events names are hidden 
 * events are stacked inside the listener name
 * addListener method dissapear ! now is an event. Are events callable ? 
 * if there are alias to `addListener` method (like in node.js EventEmitter), then it gets more confusing - now more methods "disappear",  and more events with strange names appear
 * I would say that not using @event at all generates less confusing descriptions. TODO: link to Emitter3
