// # Documenting Events
// 
// (Best Practices with TypeScript and typedoc)
// 
// ## Objective
// 
// In this example we describe a class that extends NodeJS.js `EventEmitter` and triggers a couple of events `progress`, `finish`, and `error`.
//  
// The main objective was to find/discuss the best practices for documenting events, eventemitters, event listeners using typedocs (wihtout any plugin)
// 
// Also, is important to validate that the typescript compiler bind the types so we are sure that our users won't miss the events names or callback functions signatures. 
//
// See the **[final typedoc output](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-001/docs/interfaces/idownloadeventemitter.html#on))**
// 
// Notice how in that output, TypeDoc treats events as methods, it just group them in the "Events" section because they contain the `@event` annotation.


import { EventEmitter } from 'events';





// ## The interface
// 
// We start by declaring an interface which responsibility will be to define the exact method signatures that we will be offering to our users. 
// 
// Notice that we are overriding the `EventEmitter.on`  method with ore specialized signatures - even forcing that the event name to be a concrete string. This way we enforce the API to our users. 
// 

/** 
 * Responsible of notifying relevant events about downloading stuff. Instances can be obtained like this: 
 * ```
 *  const downloadEmitter = Factory.getInstance<IDownloadEventEmitter>('IDownloadEventEmitter');
 * ```
 */
export interface IDownloadEventEmitter{



  /**
   * Subscribes given listener so it will be called when the progress of the download changes
   * @event
   * @param eventName The name of the event to subscribe for.
   * @param handler A handler that will receive a progress event with the current and expected 
   * total bytes
   */
  on(eventName: 'progress', listener: (event: DownloadProgressEvent) => void): this;

  /**
   * Subscribes given listener so it will be called when the download finished
   * @event
   * @param event The name; of the event to subscribe for.
   * @param handler A handler that will receive a progress event with the current and expected 
   * total bytes
   */
  on(eventName: 'finish', listener: (event: DownloadFinishEvent) => void): this;



// 
// Something important is that, we need to respect the original signature that is: 
// 
// ```ts
// on(event: string | symbol, listener: (...args: any[]) => void): this;
// once(event: string | symbol, listener: (...args: any[]) => void): this;
// ```
// 
// That's why for example we need to return `this` and our callback still need to return `void`
  /**
   * Subscribes given listener so it will be called when the download finished
   * @event
   * @param event The name of the event to subscribe for.
   * @param handler A handler that will receive a progress event with the current and expected 
   * total bytes
   */
  on(eventName: 'error', listener: (event: Error) => void): this;


  /**
   * This method trigger events. Unfortunately I don't know yet how to express that in typedoc
   * @param config 
   */
  startDownloading(config: IDownloadConfig): Promise<any>;
  
}


// ## The implementation
// 
// `DownloadEventEmitter` class is our concrete, private implementation. We let its super class `EventEmitter` to implement the on() methods - and we just implement our concrete feature  `startDownloading`. 
// 
// It implements previous interface so users referencing the interface will use the exact method descriptions and type binding will be perfect.  


/**
 * Event Emitter concrete class - Private
 */
class DownloadEventEmitter extends EventEmitter implements IDownloadEventEmitter {

  
  public startDownloading(config: DownloadConfig): Promise<any> {
    return Promise.resolve();
  }

}








// ## Does it really work?
// 
// Now that we have everithing ready, I would like to test it a bit, to see if by using the interface our library's users will have a good experience with type binding or call our methods with bad signatures.
// 
// For that we build a Main() function , some code is commented because it has compilation errors: 
class Main{
  static main(...any):number {
    





// In the following statement we try to pass an incorrect event name. It gives error because we are working with 
// the interface and is very strict about that.   (code commented).
    const clientInterface = Factory.getInstance<IDownloadEventEmitter>('IDownloadEventEmitter');
    /*
    clientInterface.on('incorrectEventName', (data) => {}); 
    */








// In the following statement, we work with the class directly. As expected, we can use signatures incorrectly here because our class IS A ```EventEmitter``` and its `on`  method has a very flexible signature. Remember, In Strongly typed languages, a sub class cannot change signatures defined by the super class - in other words *polymorphism* must apply:
    const clientClass = new DownloadEventEmitter();
    clientClass.on('incorrectEventName', (data) => {}); // SHOULD BE COMPILATION ERROR !!







// Now, keep working with the signature, try to cheat it passing eventName from 
// one signature and listener from another. It fails as expected, with error 
// "Argument of type '"finish"' is not assignable to parameter of type '"error"'. 
// Leave it commented:
    /* 
    clientInterface.on('finish', (data:DownloadProgressEvent) => {}); 
    */









// Finally let's call it right and define callback argument without type to see if 
// type inference work: 
    clientInterface.on('progress', (data) => {
      data.timestamp = undefined; // autocomplete works fine both in data and in the eventName arg :)
    }); 
    




    
    return 0;
  }
}





/**
 * abstract super interface of all download-related events
 */
export interface DownloadEvent  {
  timestamp: Date;
  id: string;
}
/**
 * data with progress information
 */
export interface DownloadProgressEvent extends DownloadEvent {
  name: string;
  value: number;
  code: number[];
}
/**
 * event emitted when a download finished
 */
export interface DownloadFinishEvent extends DownloadEvent {
  totalBytes: number;
  ips: number[][];
}
/**
 * event emitted When something goes wrong
 */
export interface DownloadError extends DownloadEvent {
  status: number;
  error: Error;
}
/**
 * Configuration for a download, see [[IDownloadEventEmitter.startDownloading]]
 */
export interface IDownloadConfig {
  abortOnError: boolean;
}
class DownloadConfig implements IDownloadConfig {
  abortOnError: boolean;
}

export class Factory{
  static getInstance<T>(interfaceName: string):T {
    if (interfaceName === 'IDownloadEventEmitter') {
      return new DownloadEventEmitter() as any;
    }
  }
}
