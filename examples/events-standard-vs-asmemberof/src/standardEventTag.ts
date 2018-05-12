import { EventEmitter } from 'events';


type BeforeExitListener1 = (code: number) => void;
type DisconnectListener1 = () => void;

/**
 * Esse veniam ad dolor laborum et eiusmod ipsum nisi duis.
 */
export interface MyEmitter1 extends EventEmitter {
  /**
   * @param event Nisi laboris laborum aute cillum reprehenderit aliquip voluptate occaecat mollit dolor tempor.
   * @param listener Adipisicing labore adipisicing cillum est do ad ut commodo elit incididunt veniam fugiat enim.
   * @event
   */
  addListener(event: 'beforeExit', listener: BeforeExitListener1): this;  
  /**
  * @param event Tempor aliqua ipsum irure proident.
  * @param listener Dolore laboris magna esse occaecat mollit sit ea ex occaecat ad irure ad exercitation.
  * @event
  */
  addListener(event: 'disconnect', listener: DisconnectListener1): this;
}
