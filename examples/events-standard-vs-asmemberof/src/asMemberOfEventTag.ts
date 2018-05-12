import { EventEmitter } from 'events';

/**
 * Events will be shown as properties not as methods which is better. Nevertheless, listener signatures will be well described. 
 * @asMemberOf Emitter2
 * @event 
 */
export declare function beforeExit(code: number) : void;

/**
 * Events will be shown as properties not as methods which is better. Nevertheless, listener signatures will be well described. 
 * @asMemberOf Emitter2
 * @event 
 */
export declare function disconnect(): void;


/**
 * Esse veniam ad dolor laborum et eiusmod ipsum nisi duis.
 */
export interface Emitter2 extends EventEmitter {
  /**
   * @param event Nisi laboris laborum aute cillum reprehenderit aliquip voluptate occaecat mollit dolor tempor.
   * @param listener Adipisicing labore adipisicing cillum est do ad ut commodo elit incididunt veniam fugiat enim.
   */
  addListener(event: 'beforeExit', listener: typeof beforeExit): this;  
  /**
  * @param event Tempor aliqua ipsum irure proident.
  * @param listener Dolore laboris magna esse occaecat mollit sit ea ex occaecat ad irure ad exercitation.
  */
  addListener(event: 'disconnect', listener: typeof disconnect): this;
}
