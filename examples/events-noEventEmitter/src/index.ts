import { on } from 'cluster';

// ## What's this?
// 
// The objective of this document is see if we can document events that don't extend from EventEmitter, in other words, is there something special about the on() method and its first parameter from where the event name seems to be taken magically by typedoc??

// And indeed it seems there is something special with the on() method name when it matters to events. [Take a look at the output](../interfaces/igenericdeviceeventsource.html) 

// There are three events there, more or less well described, but their name is `addDeviceListner`  . That didnt happened with on()

// In this case events are treated like methods but I think is acceptable. 


/**
 * Minim sint reprehenderit laboris dolor officia non in officia nisi. Irure excepteur ea enim excepteur sunt cupidatat esse laborum dolore. Veniam irure ex in ad magna amet proident velit velit nostrud. 
 * 
 * Nostrud officia labore non pariatur exercitation irure consectetur ut reprehenderit dolor.
 */
export interface IMouseEventSource extends IDeviceEventSource{
  /**
   * Qui cillum aliqua id ex consequat dolore ut commodo proident veniam. Dolor tempor anim id cupidatat minim non dolore esse in fugiat aute. Labore dolore ad fugiat qui duis est. Fugiat adipisicing id ullamco incididunt labore dolor proident veniam ea sunt.
   * @param l Incididunt amet consequat aute et proident voluptate sit duis.
   */
  addMouseListener(l:IMouseEventListener):void;
}
/**
 * Lorem voluptate laboris aliquip cillum elit.
 */
export interface IDeviceEventSource{
  /**
   * Occaecat esse eiusmod veniam aliquip qui consectetur.
   */
  name:string;
  /**
   * Commodo labore exercitation exercitation laborum consectetur aliqua nulla pariatur consectetur commodo ut magna proident.
   */
  ip:number;

  /**
   * a generic event source that will trigger named events
   * @event
   * @param deviceName 
   * @param listener 
   */
  addDeviceListener(deviceName:string, listener:IDeviceEventListener):void;
}

/**
 * Ipsum commodo ut fugiat proident.
 */
export interface IGenericDeviceEventSource extends IDeviceEventSource{

  /**
   * a generic event source that will trigger named events
   * @event
   * @param deviceName  
   * @param listener 
   */
  addDeviceListener(deviceName:'mouse', listener:IMouseEventListener):void;

  addDeviceListener(deviceName:'keyboard', listener:IKeyboardEventListener):void;

  addDeviceListener(deviceName:'mic', listener:IMicEventListener):void;
}
/**
 * Mollit elit sunt anim minim dolore occaecat.
 */
export interface IMouseEventListener extends IDeviceEventListener{
  /**
   * Reprehenderit sunt ad consectetur deserunt exercitation veniam et 
   * @param event 
   */
  click(event: IMouseClickEvent):void;
}
/**
 * Mollit elit sunt anim minim dolore occaecat.
 */
export interface IKeyboardEventListener extends IDeviceEventListener{
  /**
   * Reprehenderit sunt ad consectetur deserunt exercitation veniam et 
   * @param event 
   */
  click(event: IKeypressedEvent):void;
}
/**
 * Mollit elit sunt anim minim dolore occaecat.
 */
export interface IMicEventListener extends IDeviceEventListener{
  /**
   * Reprehenderit sunt ad consectetur deserunt exercitation veniam et 
   * @param event 
   */
  keypressed(event:IMicEvent):void;
}


/**
 * Tempor velit eu proident cupidatat do exercitation adipisicing esse fugiat velit et ad quis.
 */
export interface IDeviceEventListener {
  /**
   * Consequat duis eu ad exercitation nostrud irure exercitation dolor.
   */
  priority: number;
}
/**
 * Laboris proident magna sint ex sit officia dolore do veniam incididunt irure. Ut sit Lorem ut occaecat irure nostrud. Amet sit esse sint elit tempor commodo non incididunt commodo sint est nulla enim exercitation. 
 * 
 * Tempor qui elit ut in eiusmod voluptate nisi esse esse. Ullamco et irure id voluptate consequat reprehenderit cupidatat amet labore enim ut. Fugiat minim reprehenderit non ea duis adipisicing. Laboris nulla ea magna minim culpa mollit id.
 */
export interface IMouseClickEvent extends IDeviceEvent{
  /**
   * Quis incididunt magna qui tempor magna occaecat.
   */
  x: number;
  /**
   * Veniam non do aliqua id.
   */
  y:number;
  /**
   * Amet consectetur ad sit cupidatat.
   */
  button: 'left'|'right'|'middle';

}

export interface IKeypressedEvent extends IDeviceEvent{
  key:number;
}

export interface IMicEvent extends IDeviceEvent{
  sound:string;
}


/**
 * Proident sit cillum ea et tempor minim ut consequat incididunt velit officia cillum cillum.
 */
export interface IDeviceEvent{
  ts:Date;
}

class MouseEventSource implements IMouseEventSource{
  /**
   * a generic event source that will trigger named events
   * @event
   * @param deviceName
   * @param listener
   */
  addDeviceListener(deviceName: string, listener: IDeviceEventListener): void {
    throw new Error('Method not implemented.');
  }
  name: string;
  ip: number;
  addMouseListener(l:IMouseEventListener):void {}
}
