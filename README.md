# About

JavaScript (and its family) has no standard tool for documentation and there are many tools with different perspective. This is a collection of working node.js projects demonstrating best practices of complex semantics in such tools. 


# Success experiments

 A list of expeiments that IMO demonstrate best practices for documentation

## events-002

Demonstrate best practices for documenting events, after some failures, I concluded that I needed a typedoc plugin for accomplish the perfect representation of events. So I implemented [as-member-of](https://github.com/cancerberoSgx/typedoc-plugins-of-mine/tree/master/plugins/typedoc-plugin-as-member-of) type-doc plugin and declaring events as separate functions. The following tutorial explains with detail:  

#### [Tutorial, descriptions and code](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-002/docs/interfaces/vehicle.html)


#### [Final Output](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-002/docs/interfaces/vehicle.html)




# Failed experiments

The following are the examples generated that I consider failures this is , they are non-satisfactory experiments or demonstrate tools limitations. 

## events-001 (failed)

Several (failed) experiments trying to document events with typedoc, particularly subclasses of node.js `EventEmitter`.

#### [Tutorial, descriptions and code](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-001/docs/docco/src/index.html)

#### [Final Output](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-001/docs/interfaces/idownloadeventemitter.html#on)


## events-noEventEmitter (failed)

Similar example as [events-001](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-001/docs/docco/src/index.html) Nothing special here. But completly indepdent of EventEmitter and declaring a righ class hierarchy of Listeners, EventSources, etc. 
Best practices for documenting events, particularly subclasses of node.js `EventEmitter`

#### [Tutorial, descriptions and code](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-noEventEmitter/docs/docco/src/index.html)

#### [Final Output](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-noEventEmitter/docs/interfaces/igenericdeviceeventsource.html#adddevicelistener)





# Install and generate all the docs

```sh
yarn 
yarn run-all doc
```

Note with `yarn run-all X` you run X command in all yarn workspaces



# Concepts and technologies

Some concepts that are hard to document (I'm learning and discussing best practices in this project) : 

 * Events EventEmitters and EventListeners particularly best practices for descibing complex hierarchies.
 
Some technologies: 

 * jsdoc (and templates)
 * typedoc (and templates)
 * short-jsdoc
 * JavaScript
 * TypeScript
 * Flow


# TODO: things I don't know how to do, yet

## typedoc

 * "this method trigger the event foo of that class". can do it in jsdoc but not in typedoc

*
    // TODO: IDEA: what if we biuld a event emitter with generics that doesn't 
    // extends node event emitter but just delegate the methods to a property???