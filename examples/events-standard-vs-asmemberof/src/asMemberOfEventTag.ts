import { EventEmitter } from 'events';

/**
 * @asMemberOf Emitter2
 * @event 
 */
export declare function beforeExit(code: number) : void;

/**
 * @asMemberOf Emitter2
 * @event 
 */
export declare function disconnect(): void;

export interface Emitter2 extends EventEmitter {

  addListener(event: 'beforeExit', listener: typeof beforeExit): this;  

  addListener(event: 'disconnect', listener: typeof disconnect): this;

  on(event: 'beforeExit', listener: typeof beforeExit): this;  

  on(event: 'disconnect', listener: typeof disconnect): this;
}
