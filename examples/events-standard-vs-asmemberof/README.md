# Documenting events

Another demonstration about why TypeDoc @event tag with the standard way of documenting events is confusing versus using @asMemberOf which IMO gives the optimal description for the @event concept. 

## Examples

 * [Using `@event` on addListener functions as proposed by typedoc](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-standard-vs-asmemberof/out/interfaces/emitter1.html)
 * [Adding `@asMemberOf` to the same example](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-standard-vs-asmemberof/out/interfaces/emitter2.html)  
 * [Not using `@event` tag at all](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-standard-vs-asmemberof/out/interfaces/emitter3.html)

## Why typedoc proposal is confusing: 
 
 * events names are hidden 
 * events are stacked "inside" the listener name
 * `addListener`-like methods dissapear ! Now they appear as events. Are events methods ? 
 * If there are alias to `addListener` method (like `on()` in node.js `EventEmitter`), then it gets more confusing - now more methods "disappear",  and more events with strange names appear
 * I would say that not using `@event` at all generates less confusing descriptions like in [Emitter3]((https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-standard-vs-asmemberof/out/interfaces/emitter3.html))
