// ## Documenting Events
// 
// (Part of [this project](https://github.com/cancerberoSgx/javascript-documentation-examples))

// IMO, this is the best way of documenting events with typedoc. See the [typedoc output result](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-002/docs/interfaces/vehicle.html)
// 
// ### Features: 
// 
//  * Events optimally represented in typedoc output with separate definitions and unique names so they can be referenced from other entities
//  * Listener signatures fully defined in one place
//  * Don't contaminate the interface or class with artificial definitions
//  * Strict type checking for listeners
// 
// ### Background
// 
// In previous experiments [1](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-001/docs/docco/src/index.html) and [2](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-noEventEmitter/docs/docco/src/index.html) we tried to document events with typedoc but facing several difficulties: events appear all stacked under the same method signature, or we needed to contaminate our interfaces with artificial methods. None of these were acceptable. 
// 
// ### Solution summary
// *The solution we found* is declaring events as separate functions declarations and using the typedoc plugin [as-member-of](https://github.com/cancerberoSgx/typedoc-plugins-of-mine/tree/master/plugins/typedoc-plugin-as-member-of)  we annotate these functions with @asMemberOf so they will be moved as members of the host class `Vehicle`. 
// 
// Also we add the annotation `@event` so the plugin will mutate de functions to events. 
// 
// Since functions declarations don't generate any real js code, this won't impact the production code generate at all

import { EventEmitter } from 'events';
import { WSAEPROVIDERFAILEDINIT, SSL_OP_LEGACY_SERVER_CONNECT } from 'constants';





// 
// ### The interface
// 
// We are declaring `EventEmitter.on` overrides for enforcing our interface users to use the correct signatures as we did in [example 1](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-001/docs/docco/src/index.html). But we don't annotate them with `@event` ! Notice how the listener argument references the event listener function declaration, for example, `listener: typeof beforeStart`
// 
/**
 * A machine for transportation
 */
interface Vehicle extends EventEmitter {

  /** Subscribes to [[beforeStart]] event */
  on(eventName: 'beforeStart', listener: typeof beforeStart): this;

  /** Subscribes to [[beforeStart]] event */
  on(eventName: 'afterStop', listener: typeof afterStop): this;

  /** Make this Vehicle tart moving. It triggers events events [[beforeStart]] and [[afterStop]] .  */
  start();
}

// ### Event function declarations
// 
// We define now the events as separate function declarations. We annotate them with `@asMemberOf Vehicle` and with `@event` so the typedoc plugin [as-member-of](https://github.com/cancerberoSgx/typedoc-plugins-of-mine/tree/master/plugins/typedoc-plugin-as-member-of) will move these funcions as Vehicle members and also transform them into events. 
// 
/**
 * Event triggered by [[Vehicle.start]] just before the engine of the vehicle starts.
 * @asMemberOf Vehicle
 * @event
 */
declare function beforeStart(event: VehicleBeforeStartEvent): void;

// 
// This event handler has a complicate signature. Fortunately is fully defined here, in one place. Notice how in the `on` overrides we are referencing this declaration with `listener: typeof beforeStart`. 
// 

/**
 * Event triggered right after the vehicle stop its movement. 
 * TODO: document my arguments better
 * @asMemberOf Vehicle
 * @event
 */
declare function afterStop(when: Date, engineStatus: {temp: number, cont: number[]}, coolDown: Promise<boolean>): void;


/** The data for [[beforeStart]] event */
interface VehicleBeforeStartEvent{
  suit: string; 
  card: number[]; 
}

