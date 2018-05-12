import { EventEmitter } from 'events';

type BeforeExitListener3 = (code: number) => void;
type DisconnectListener3 = () => void;

export interface Emitter3 extends EventEmitter {

  addListener(event: 'beforeExit', listener: BeforeExitListener3): this;  
  
  addListener(event: 'disconnect', listener: DisconnectListener3): this;

  on(event: 'beforeExit', listener: BeforeExitListener3): this;  

  on(event: 'disconnect', listener: DisconnectListener3): this;
}
