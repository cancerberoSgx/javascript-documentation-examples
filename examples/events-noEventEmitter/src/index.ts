
// ## What's this?

// (Part of [Sebastian's javascript-documentation-examples project](https://github.com/cancerberoSgx/javascript-documentation-examples))

// All of this was a failure since I couldn't make what I wanted, but teach me a lot about the tools limitations. If you want to go to the successful experiment where I now now to to do it properly go to [this example](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-002/docs/docco/src/index.html) 

// This is an example similar to [events-001](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-001/docs/docco/src/index.html) but using a rich event - listeners, class inheritance hierarchy that's completely unrelated with `EventEmitter`. 

// Also it tries to define events as members so they don't appear all grouped under the method name which is ugly .
//
// [**This is the final output**](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-noEventEmitter/docs/interfaces/igenericdeviceeventsource.html#adddevicelistener)

// You can notice in the output that, because the method name is not so short as `on()` , the output that describe these events doesn't look good. Mostly because all these events are grouped together under the same label `addDeviceListener`
//
// In my case I really need to name my events arbitrarily. After all events are an artificial concept, they aren't methods, nor objects so I should be able to name them a 'piaccere'. That's why I came up with [typedoc-plugin-respect-name-tag TypeDoc plugin ](https://github.com/cancerberoSgx/typedoc-plugin-respect-name-tag) . Using it, if some entity is annotated with a `@name` tag it will be named by typedoc with that name 


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


  // You can see in [the output](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-noEventEmitter/docs/interfaces/igenericdeviceeventsource.html#adddevicelistener) that all evens appear grouped under the same method name `addDeviceListener` which is ugly and confusing. 


}




// We could think a way of solving this is with another approach, this time defining our events as individual members so they doesn't appear all grouped:


export interface IDownloadEventEmitter2{

  /**
   * This method trigger events. Unfortunately I don't know yet how to express that in typedoc. 
   * This method might trigger [[error]] event in case something goes wrong or if it rains. Also susceptible of triggering [[progress]] event ro indicate how is going and [[finish]] when is done ni which case resolve returned
   * @param config 
   */
  startDownloading2(config: {data:number[], ts:Date, url: string}): Promise<any>;
  /**
   * triggered by [[startDownloading2]] when there is an error. Use [[on]] to subscribe for this event.
   * @event
   */
  error: (event: Error) => void;
  /**
   * triggered by [[startDownloading]] when there is an download ends. Use [[on]] to subscribe for this event.
   * @event
   */
  finish: (event: {when: Date, bytes: Buffer, url: String, codec: number[]}) => void;
  /**
   * triggered by [[startDownloading]]  on progress. Use [[on]] to subscribe for this event.
   * @event
   */
  progress: (event: {when: Date, bytes: Buffer, url: String, codec: number[], progress: number}) => void;

}
  


//
// [The output looks good now](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-noEventEmitter/docs/interfaces/idownloadeventemitter2.html#error) (events non stacked) but  **there is something very wrong**: We are defining new synthetic members that now subclasses must implement. These definitions are not needed ni the real world. **We dont want to sacrifice simplicity because of documentation tool limits**

// The solution for this (I promise the final one) is using a plugin and defining event as separate function declarations as fully explained [here](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-002/docs/docco/src/index.html)







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
 * Laboris proident magna sint ex sit officia dolore do veniam incididunt irure.
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
  addDeviceListener(deviceName: string, listener: IDeviceEventListener): void {
    throw new Error('Method not implemented.');
  }
  name: string;
  ip: number;
  addMouseListener(l:IMouseEventListener):void {}
}
