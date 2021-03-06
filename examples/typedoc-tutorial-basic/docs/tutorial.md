

<span class="invisible">
```tsimport { Stream } from 'stream';
import { EventEmitter } from 'events';
interface FooApplication{}
interface FooOptions{}
class GameContainer{}
interface FileAccess{}
```
</span>




# TypeDoc Tutorial

In this tutorial you will learn how to document your [TypeScript](https://www.typescriptlang.org/) 
projects using [TypeDoc](http://typedoc.org/), a tool that will extract descriptions from your TypeScript 
source comments and generate a well organized and pretty HTML documentation. 

It is required that you know the basics of TypeScript, but besides that, this tutorial will start from scratch. 




## Table of Contents

<div id="generated-toc"></div>




## TypeDoc Introduction

This section is oriented to those with no experience with any JsDoc-like technology. If you are familiar with JsDoc, javadoc or related technology, skip it and proceed to [next section](#classes-and-interfaces). 

TypeDoc is an API documentation generator for TypeScript projects, similar 
to [JsDoc](http://usejsdoc.org/) or [javadoc](https://en.wikipedia.org/wiki/Javadoc).

Basically, you add documentation comments directly to your source code, right alongside the code itself. The TypeDoc tool will scan your source code and generate an HTML documentation website for you.

In general you will be documenting entities like classes, interfaces, methods, functions, etc. 

Although configurable, TypeDoc will generate documentation of everything in your source, even things that are not documented like their names, types and relationships. 

Unlike JsDoc, with TypeDoc you only take care of descriptions and you never document types, names member modifiers or any other data that is already expressed in the TypeScript code: that work is automatically performed by the TypeDoc tool. 






### Descriptions

For adding a description to some entity in the code you must use special comments that must be placed immediately *before* the code being documented. 

Each comment must start with a `/**` sequence in order to be recognized by TypeDoc. Comments beginning with `//`, `/*`, `/***`, or more than 3 stars will be ignored. Example: 

```ts
/** The sweet and fleshy product of a tree or other plant. */
class Fruit {

}
```
Here you can see the output generated by TypeDoc: [classes/fruit](../../classes/fruit.html).

TypeDoc will format descriptions with MarkDown, in concrete it uses the [Marked](https://github.com/chjj/marked) markdown parser and [HighlightJS](https://github.com/isagalaev/highlight.js) to highlight code blocks within markdown sections. In the following example, notice how we use markdown to write multiple paragraphs, bold text and an example code snippet:

```ts
/**
 * Responsible of minify given string containing JavaScript code. By default it uses the foo-bar minimization algorithm. 
 * 
 * **Warning: if you don't specify an output in the configuration your input file will be overridden !**
 * 
 * Basic usage example: 
 * 
 * ```ts
 * import {minify} from 'foobar-minify';
 * const config = {
 *   input: readFileSync('dist/awesome-app.js'), 
 *   output: createWriteStream('dist/awesome-app.min.js')
 * }
 *   minify(config);
 * ```
 */
function minify(){}
```
Here you can see the output generated by TypeDoc: [globals.html#minify](../../globals.html#minify).








### Tags

TypeDoc will extract the information of entities found in TypeScript source code such as classes, methods, functions, names, types, etc, and will associating the comment descriptions, if any, to each entity. But sometimes, we want to describe more than one entity in a comment, or often, a high level concept that the TypeScript language simply doesn't support as we will see. In those cases we use what we call **comment `tags`** (also known as comment annotations). 

Tags are special words in comment descriptions that start with `@`. For example, when describing a function, we must describe its subparts like parameters and return value and for doing that in the same comment, we use tags for identify each subpart, for example: 

```ts
/**
 * Starts the application with given options
 * @param options options to start the application with
 * @param app the application to start
 * @returns a promise resolved true when the application is ready
 */
declare function startApplication(app: FooApplication, options: FooOptions): Promise<boolean>
```
Here you can see the output generated by TypeDoc: [globals.html#startapplication](../../globals.html#startapplication).


As you can see, we described the entire method declaration in a single comment, starting with the method description, its parameters and last the return value. We needed to use tags `@param` and `@returns` to indicate which part of the method each description is documenting. 

The complete list of tags supported by TypeDoc is here: [list of tags](http://typedoc.org/guides/doccomments/). 










## Classes and Interfaces

In the following example we focus only on classes and interfaces, later we will see [properties](#properties) and [methods](#methods-and-functions) documentation in detail. It declares an interface which is [generic](https://www.typescriptlang.org/docs/handbook/generics.html) and a class implementing it.

```ts
/**
 * A shape is the form of an object or its external boundary, outline
 * @param U The unit used to measure the properties of this type of shape
 */
interface Shape<U extends Unit > {
  area():number;
}
interface Unit {}
interface Centimeter extends Unit {} 
/**
 * The Shape implementation used in Foo component to represent Bar
 */
class MyCustomRectangle implements Shape<Centimeter> {
  private side:number;
  public area():number {
    return this.side*this.side;
  }
}
```


This is the output of the interface: [interfaces/shape](../../interfaces/shape.html) and this is the output of the class: [classes/mycustomrectangle](../../classes/mycustomrectangle.html)

Some details about what we just did:
 
 * We used the double star comment (`/**`) just before the interface declaration
 * The first line of the comment is the interface description
 * We documented the interface's generic type `U` using the tag `@param` then the name of the type parameter `U` followed by its description. 

**TIP: classes vs interfaces in documentation** . If you are working with interfaces (hiding implementation details from your users), then you should **only document interfaces instead of classes**. Document classes only to give details about the implementation, if that's what you want, but **make sure you don't repeat information that's already in the interface**









## Properties and Variables

You can describe properties of classes, interfaces, objects, enums, etc by adding a `/**` comment just before the property declaration. The same for variables declared with `var`, `const` or `let`. 

In the following example we document properties of several entities, including `interface`, `class`, `enum`, `type` and variable declarations:

```ts
interface GameUnit {
  /** unique id of this unit in the board */
  id: string
  /** 
   * Status of this unit in the board 
   * 
   */
  status: {
    /** must be between 0 and 1 */
    health: number, 
    /** the ids of units killed by this unit */
    kills: number[]
  }
}
enum GameState {
  /** game started but user paused it */
  paused, 
  /** victory condition reached */
  ended, 
  /** game is being played right now */
  playing, 
  /** game didn't started yet - player is choosing initial race? */
  notStarted,
}
class Game {
  /**
   * State of the game at this moment
   */
  state: GameState
  config: GameConfiguration

  private _currentTime: Date
  /** the actual current time elapsed since this game was started not counting when it was paused */
  get currentTime():Date { return this._currentTime; }
  set currentTime(value:Date) { this._currentTime = value; }
  /** default board with and height if none is provided */
  static DEFAULT_STATE = GameState.notStarted

}
declare type GameConfiguration = {
  /** number of columns the board haves */
  boardWith?: number
  /** number of rows the board haves */
  boardHeight?: number
  /** board fog of war initial configuration */
  fogOfWar?: string[]
}
/** the global game singleton */
export const gameContainer = new GameContainer()
```


TypeDoc Output: 

 * interface Unit [interfaces/gameunit.html](../../interfaces/gameunit.html) 
 * Class game [classes/game.html](../../classes/game.html) 
 * enum GameState [enums/gamestate.html](../../enums/gamestate.html)
 * type declaration GameConfiguration [globals.html#gameconfiguration](../../globals.html#gameconfiguration)

Notes: 

 * We didn't document types, names or modifiers of the properties, typedoc will do that automatically. 
 * We even added descriptions to `Unit.status` property which type is an object literal. Is unlikely you want to document the properties of object literals like that (you probably want to define interfaces) but just in case it's supported. ee how it looks in the output: [interfaces/gameunit.html#status](../../interfaces/gameunit.html#status)
 * Property accessors are documented like a property and is not necessary to document both the setter and the getter, is enough to document only one of them: [classes/game.html#currenttime](../../classes/game.html#currenttime) 
 * At the end of the example we documented a global variable, although is unlikely to document variables, it's also possible : [globals.html#gamecontainer](../../globals.html#gamecontainer) . 









## Methods and Functions

Methods and Functions could be the most complex parts of document, because thy imply parameters and return values. For these, you will be using two tags: `@param` and `@return` or `@returns` respectively. 

Because documenting methods and functions is the same thing, here we will say just "methods" but everything applies to both. 

The syntax of a method or function TypeDoc comment is as follows: first the method description and then the rest. The order of parameters is not important.

Let's go straight to an example that shows a lot of combinations regarding this:

```ts
/**
 * @param T the type of access this file has on IO
 */
class File<T extends FileAccess> {
  public constructor(fs:number) {} // constructor, no docs
  /**
   * Creates a new file in given path and given content
   * @param path absolute path of the file to create
   * @param content content of the new file or empty file if nothing given
   * @param T the type of access created file will have on IO
   * @return a new description of the access type the new file has
   */
  public static create<T extends FileAccess>(path: string, content?: string | Stream, 
    permissions: string = '666'): T {
    return null;
  }
  /**
   * Internal method used by foobar
   * @param interval how often file is read in the polling
   * @param predicate polling will end when true
   */
  private poll(interval:number, predicate: (t: T) => boolean):void {}
}
interface FileEmitter<T> extends EventEmitter {
  /** registers the listener to be notified **before** a file is about to change. The change will be hold until all listeners returned promises are resolved. If any listener reject the promise the file modification action will be canceled. */
  on(event: 'before-file-modification', listener: (f: File<T>) => Promise<boolean>): this
  on(event: 'after-file-modification', listener: (f: File<T>, previousContent: Buffer) => void): this
}
/**
 * List children of given folder
 * @param FAT target files access type 
 * @param options.force force read operation  even if files are busy
 * @param options.recursive list all files recursively
 * @return if given path points to a folder returns a list of direct children Files,. Returns null otherwise
 */
function listFiles<FAT extends FileAccess>(path: string, 
  options?: {force: boolean, recursive: boolean})
  : File<FAT>[] | undefined { return [] } 
```


Notes: 

 * The class `File` defines a constructor which is not documented but the output still is generated: [classes/file.html#constructor](../../classes/file.html#constructor)
 * The static method `create` that is generic and has a parameter `permissions` with a default value. Notice how we document the generic type `T` using `@param` : [classes/file.html#create](../../classes/file.html#create)
 * And last but not least, the function `listFiles` which shows how to document the complex parameter object `options` and has a generic parameter `FT`: [globals.html#listfiles](../../globals.html#listfiles) 

**Important**: Again, as with anynthing in TypeDoc we never describe information already defined in the TypeScript code, like names, types and modifiers like if a parameter is optional, default parameter values, if a method is private or static, etc. 



### Parameters and Return Type

As with anything in TypeDoc documenting parameters is optional. For describing a parameter we use the syntax `@param PARAMETER_NAME` where `PARAMETER_NAME``must match with one of the names of the parameters in the method or function signature. 

Unfortunately the TypeScript compiler won't validate this so we must careful when renaming parameters. 

TIP: if you use the "Rename" refactor tool of typescript for renaming a parameter, the @param will be also renamed so make sure you always use that tool instead of renaming manually. 

For return values, you can use `@return` or `@returns` and then the description of what is returned when the method or function is invoked. 

**TIP**: Make sure `@param` and `@returns` descriptions add value. Don't write them just because of the sake of writing. If you choose well your methods and parameter names descriptions often arenot needed. If you omit documenting a parameter or return type, its documentation will be still generated by TypeDoc (even if its type is `void` or `any`)

### Overrides

In the previous example, the interface `FileEmitter` overrides the method `on()` of its parent interface and declare two signatures. Take moment to see how TypeDoc generates the output for this case: [interfaces/fileemitter.html#on](../../interfaces/fileemitter.html#on)







## Modules

TODO






## Events

TL;DR : Three techniques to represent and document events with TypeDoc are presented in this section, each of them with its own pros and cons. If you want to play safe and do what the majority of TypeScript developers are doing, then use technique 1. If you want to represent your events optimally then go technique 3. 

First of all sorry for the long section, but really I don't think there is A way of declaring and documenting events today so I needed to be detailed here. 

JavaScript and TypeScript programming languages don't support the concept of events. Nevertheless, events usually they are an important part of APIs. This is why many technologies oriented to documentation, like TypeDoc, JsDoc, YuiDoc, EsDoc, support the concept of events using tags like `@event`, `@trigger`, `@emit`, `@listen`, etc.

One common pattern to semantically define events in these technologies, is treating **events as methods**, where then the event is a member of the emitter, the event name acts as member name and the listener signature is the method signature. But again, this is not written in stone and there are several ways of represent events, depending on the scenario and the technology, as we will see. 

Let's agree on the objective. The tags `@event`, `@emit` or `@listen` are, BTW missleading. What we really want to declare and document when we talk about "events" is the relationship that exists between an **event name**, an **emitter** and the protocol used to emit: the **listener signature**. The objectvie is to document the relationship that exists between those three things (not just an event name).

We will present three different ways of accomplish this, trying to describe objects that emit two events `'open'` and '`data'` and extends node.js `EventEmitter` (Our example is a simplified fragment of the [official node.js type declaration](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v8/index.d.ts#L5292) : 

```ts
interface Readable0 extends EventEmitter {
  addListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
  addListener(event: 'error', listener: (error: Error) => void): this;
}
```



### Technique 1: add @event to method descriptions

This technique is just adding the `@event` tag to each `addListener` signature: 

```ts
interface Readable1 extends EventEmitter {
  /** 
   * Emitted whenever the stream is relinquishing ownership of a chunk of data to a consumer.
   * @event
   */
  addListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
  /** 
   * Typically, this may occur if the underlying stream is unable to generate data due to an underlying internal failure
   * @event
   */
  addListener(event: 'error', listener: (error: Error) => void): this;
}
```


This is the output [interfaces/readable1.html](../../interfaces/readable1.html) . As you can see our interface shows now, instead of a method, an event.

It's relevant to note that this technique takes advantage of explicit method overloading done by TypeScript developers, to ensure method calls match signatures exactly. Since there is a signature for each event name (with a parameter default value being the event name) this more or less describe the event names and corresponding listener signatures. The `@event` tag just mark the methods visually so we know those signatures contain information about events. 


### Technique 2: add @event to static properties

```ts
class Readable2 extends EventEmitter { 
  /** 
   * Emitted whenever the stream is relinquishing ownership of a chunk of data to a consumer.
   * @event
   */
  static EVENT_DATA:'data' = 'data';
  /** 
   * Typically, this may occur if the underlying stream is unable to generate data due to an underlying internal failure
   * @event
   */
  static EVENT_ERROR:'error' = 'error';
  addListener(event: typeof Readable2.EVENT_DATA, listener: (chunk: Buffer | string) => void): this;
  addListener(event: typeof Readable2.EVENT_ERROR, listener: (error: Error) => void): this;
  addListener(event: string , listener: any): this {return this; }
}
```


This is the output [classes/readable2.html](../../classes/readable2.html).

Declare event names as constants static properties. Add the `@event` tag to them. We keep overloading the `addListener` method to force typechecking when calling it and the trick for it to work declare the type of the constants and parameters as a string literal: this `static EVENT_DATA:'data' = 'data';` together with this: `event: typeof Readable2.EVENT_DATA`.

Events are still encapsulated as member of the class and the relationship between event names and listener signatures is sill maintained and visible. 

[TypeDoc documentation](http://typedoc.org/api/classes/converter.html) uses a technique similar to this one. 


### Technique 3: add @event to listener signatures

This technique is my favorite IMO represents events optimally in typedoc output, but also it could be a little bit hard to accomplish. Is similar to technique 1 but we don't add the @event tag to methods (which is confusing) but to listener type declarations that are outside the class. 


```ts
/** 
 * Emitted whenever the stream is relinquishing ownership of a chunk of data to a consumer.
 * @asMemberOf Readable3
 * @event
 */
declare function data (chunk: Buffer | string): void; 
/** 
 * Typically, this may occur if the underlying stream is unable to generate data due to an underlying internal failure
 * @asMemberOf Readable3
 * @event
 */
declare function error (error: Error): void; 
interface Readable3 extends EventEmitter {
  addListener(event: 'data', listener: typeof data): this;
  addListener(event: 'error', listener: typeof error): this;
}
```
 

See the output: This is the output [interfaces/readable3.html](../../interfaces/readable3.html).

### Comparison

Why do I consider 3 better than 1 and 2: 

 * It doesn't pollute (or force me to) the members of the class/interface. Technique 1 transform the method `addListener` to an event. The method disappear and the event named `addListener doesn't make any sense. Technique 2 force me to create event name static properties
 * But most important I think, 1 and 2 fail because relationship between event names and listener signature is hidden inside a method method overriding.The event names appear all stacked, as parameter types, all stacked below sommething called "addListener" which is very confusing. This 3rd technique outputs individual events with their correct names together with the listener signature all in an individual event member desattached from `addListener` 
 * Also it allows me to declare all this information using interfaces. I've also  realized also that encapsulating  listener type in a declaration is a good idea to enforce typecheking when there are lots of events with complex different listener signatures

I will briefly explain it. The objectives are not contimate our classes with artificial entities ,maintain the relationship between event names and listener signatures and enforce types on addListener call

Unfortunately it requires the TypeDoc plugin [as-member-of](https://github.com/cancerberoSgx/typedoc-plugins-of-mine/tree/master/plugins/typedoc-plugin-as-member-of). Basically what we are doing is declaring the listener signature outside the class as a function type and then instructing the plugin to move as a member of the interface. Because it has the @event tag it will be converted to an event member of the interface. More details in the plugin page. 








## Referencing

When we are describing an entity sometimes we want to reference another entity. For example, when describing the method `Wind.blow()` I want to write a link that points to the class `Ocean` so users can quickly navigate while reading its description. That's what we call referencing. 

With TypeDoc is very easy to achieve this, you just put the name of the referenced entity between double squared brackets. In the previous example would be [[Ocean]].

### Absolute vs. relative references

You can reference any entity that has a comment like classes, interfaces, methods, functions, properties, etc. You cannot reference a method parameter because it doesn't contain its own comment: the parameter description is inside a method or function comment. 

Also take in account that a name can be repeated, for example, two classes can contain methods with the same name, or two modules contain classes with the same name. In those cases, the closest entity will takes precedence if we need to reference the external reference we need to use absolute names. Example:

```ts
interface Car {
  /** 
   * Once started the engine will turn off only when the 
   * car travel all the [[Route.size]]
   */
  engine:Engine
  size: number
  /** 
   * Put in march this cart by turning on its [[engine]] 
   */
  start()
}
interface Route {
  size:number[][]
}
interface Engine{}
```


Notes:
 
 * In `start` method's description, we just used `[[engine]]` since that property is in the same class: [interfaces/car.html#start](../../interfaces/car.html#start)
 * But in `engine` property description, for referencing the `Route`'s `size` property, we needed to use its absolute name `Route.size` since `Car` already has a property with that name: [interfaces/car.html#engine](../../interfaces/car.html#engine)


### Check for broken references

if you use a lot of references, you can run the command line tool with the `--listInvalidSymbolLinks` argument: 

```
 --listInvalidSymbolLinks  Emits a list of broken symbol [[navigation]] links after documentation generation
```









## Ignoring things


If we don't want some class method or other entity to appear at all in TypeDoc output we use the `@hidden` tag. 

**Important**: Put `@hidden` at the very top of the comment related to the entity you want to ignore. 

You can ignore any entity that can be documented with its own comment, for example classes, methods, properties, etc. But you can't ignore parameters or return values because these doesn't have its own comment. 

In the following example, the output will only contain `method2()` but not `method1()``: 

```ts
interface SomeThingsAreIgnored {
  /**
   * @hidden
   * this comment should be ignored
   * 
   */
  method1():Promise<void>;
  /**
   * this comment shouldn't be ignored
   */
  method2():string;
}
```
Here you can see the output generated by TypeDoc: [interfaces/somethingsareignored](../../interfaces/somethingsareignored.html).

The following example makes TypeDoc to ignore the whole class: 

```ts
/** @hidden */
export class ClassTotallyIgnored {
  color:string;
}
```
Here you can see the output generated by TypeDoc: [classes/classtotallyignored](../../classes/classtotallyignored.html).



### Filter non public or non exported entities globally

You can also configure TypeDoc tool to ignore all entities that are not public or all entities that are not exported. For that you must use the configuration options: 

```sh
--exclude                 Define patterns for excluded files when specifying paths.
--excludeExternals        Prevent externally resolved TypeScript files from being documented.
--excludeNotExported      Prevent symbols that are not exported from being documented.
--excludePrivate          Ignores private variables and methods
--excludeProtected        Ignores non exported things
```
  








## Configuration

**WIP**

 * all options should be in http://typedoc.org/guides/usage/

### Configuration files

Instead of passing all configuration as command line arguments, you can create a `typedocconfig.js` or `typedocconfig.ts` file (the name is not important) with the configuration properties in it and then call `typedoc --options ./typedocconfig.ts`. Example of `typedocconfig.ts` file: 

```typescript
module.exports = {
  src: [
    './src/index.ts',
  ],
  mode: 'file',
  includeDeclarations: true,
  tsconfig: 'tsconfig.json',
  out: './tutorial-output',
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  readme: 'README.md',
  name: 'my-cool-project',
  ignoreCompilerErrors: true,
  plugin: 'none',
  listInvalidSymbolLinks: true,
};
```

Since configuration is declared as JavaScript / TypeScript file it's easy to implement extends. For example, this configuration extends previous one and will use [typedoc-plugin-markdown](https://github.com/tgreyjs/typedoc-plugin-markdown) to generate Markdown output: 

```typescript
module.exports = {
  ... require('./typedoc.ts'),
  theme: 'markdown',
  out: '../tutorial-output/md',
}; 
```

## Plugins

Typedoc is an extensible framework which support easy implementation of plugins that can analyze and transform the input, AST or output. Plugins can extend TypeDoc in several ways, from supporting new tags, parsing comments differently, to generating output in different formats, etc. We will detail how to install and use a TypeDoc plugin, in this case [typedoc-plugin-markdown](https://github.com/tgreyjs/typedoc-plugin-markdown) which allow typedoc tool to generate markdown output instead of HTML. 

Install the plugin: 

```sh
npm install --save-dev typedoc-plugin-markdown
```

Installed plugins are loaded automatically by typedoc tool so installing a plugin is all you need to do in order to use it. In other words, after installing a plugin, `typedoc` tool will load them out of the box when executed so you don't have to do anything special. If you want to prevent plugins to execute or execute just one plugin from all currently installed you use the `--plugin` plugin option: 

`--plugin` -  Specify the npm plugins that should be loaded. Omit to load all installed plugins, set to 'none' to load no plugins.

In the particular case of this plugin, as indicated in [its documentation](https://github.com/tgreyjs/typedoc-plugin-markdown) we must use `--theme markdown` to generate Markdown output. But that's it, as said before we don't need to use `--plugin` since it's loaded automatically: 

`typedoc --theme markdown --out apidocs src/interfaces.ts`

See [generated markdown output](https://github.com/TypeStrong/typedoc-site/blob/gh-pages/tutorial-output/md/README.md) for this tutorial code. 





<script src="https://cancerberosgx.github.io/raphaeljs-tutorial/generated_toc.js"></script>
<style>
h1, h2, h3, h4, h5, h6{
  text-transform: none;
}
.invisible {
  display: none;
}
</style>
