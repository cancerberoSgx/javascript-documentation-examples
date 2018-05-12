import { EventEmitter } from 'events';

type BeforeExitListener1 = (code: number) => void;
type DisconnectListener1 = () => void;

export interface MyEmitter1 extends EventEmitter {

  /** @event */
  addListener(event: 'beforeExit', listener: BeforeExitListener1): this;  
  
  /** @event */
  addListener(event: 'disconnect', listener: DisconnectListener1): this;

  /** @event */
  on(event: 'beforeExit', listener: BeforeExitListener1): this;  

  /** @event */
  on(event: 'disconnect', listener: DisconnectListener1): this;
}
