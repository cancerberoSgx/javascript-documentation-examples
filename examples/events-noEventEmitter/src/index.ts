import { on } from 'cluster';

// ## What's this?
// 
// This is an example similar to [events-001](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-001/docs/docco/src/index.html) but using a rich event - listeners, class inheritance hierarchy that's completely unrelated with `EventEmitter`. 
// 
// You can notice in the output that, because the method name is not so short as `on()` , the output that describe these events doesn''t look good. 
//
// In my case I really need to name my events arbitrarily. After all events are an artificial concept, they aren't methods, nor objects so I should be able to name them a piaccere. That's why I came up with [typedoc-plugin-respect-name-tag TypeDoc plugin ](https://github.com/cancerberoSgx/typedoc-plugin-respect-name-tag) . Using it, if some entity is annotated with a `@name` tag it will be named by typedoc with that name 
// 

/**
 * Nostrud officia labore non pariatur exercitation irure consectetur ut reprehenderit dolor.
 */
export interface IMouseEventSource extends IDeviceEventSource{
  /**
   * Qui cillum aliqua id ex consequat dolore ut commodo proident veniam. 
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




// These three events there,  have the same format as EventEmmiter.on as shown [here](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-001/docs/docco/src/index.html) 
//
  /**
   * a generic event source that will trigger named events
   * @event
   * @param deviceName  
   * @param listener 
   */
  addDeviceListener(eventName:'mouse', listener:IMouseEventListener):void;
 /**
   * a generic event source that will trigger named events
   * @event keyboard1232123
   * @name keyboard123
   * @param deviceName  
   * @param listener 
   */
  addDeviceListener(eventName:'keyboard', listener:IKeyboardEventListener):void;
 /**
   * a generic event source that will trigger named events
   * @event
   * @param deviceName  
   * @param listener 
   */
  addDeviceListener(eventName:'mic', listener:IMicEventListener):void;
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
