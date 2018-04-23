# About

JavaScript (and its family) has no standard tool for documentation and there are many tools with different perspective. This is a collection of working node.js projects demonstrating best practices of complex semantics in such tools. 


# Install

```sh
yarn 
```

# Generate all the documentation



# Catalog

## events-001

 Shows rich documentation of classes and interfaces that trigger events, compatible / subclassing  node.js EventEmitter implementation



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