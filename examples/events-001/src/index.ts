import { EventEmitter } from 'events';

/**
 * describes only the on() methods with the types that our class accept so is 
 * more descriptive and typechecking is better. 
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


/**
 * This class implements an EventEmitter. It just implements [[IDownloadEventEmitter]] 
 * so type binding will work well and to be more descriptive. 
 * Heads up! we don't need to override on() imeplementation - is already implemented 
 * by super class EventEmitter  
 */
export class DownloadEventEmitter extends EventEmitter implements IDownloadEventEmitter {

  public startDownloading(config: DownloadConfig): Promise<any> {
    return Promise.resolve();
  }

}

interface DownloadEvent  {
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
export interface DownloadFinishEvent extends DownloadEvent {
  totalBytes: number;
  ips: number[][];
}

export interface IDownloadConfig {
  abortOnError: boolean;
}
export class DownloadConfig implements IDownloadConfig {
  abortOnError: boolean;
}




// and now a main() so we can see if type bindings really worked

class Main{
  static main(...any):number {
    
    const clientInterface:IDownloadEventEmitter = Factory.getInstance<IDownloadEventEmitter>('IDownloadEventEmitter');

    // passing incorrect event name: gives error because we are working with 
    // the; interface (commented).

    // clientInterface.on('incorrectEventName', (data) => {}); 



    // but if we work with the class does not, as expected, because the class is an EventEmitter 
    // supports any thing: 
    const clientClass:DownloadEventEmitter = new DownloadEventEmitter();
    clientClass.on('incorrectEventName', (data) => {}); 



    // Now, keep working with the signature, try to cheat it passing eventName from 
    // one signature and listener from another. It fails as expected, with error 
    // "Argument of type '"finish"' is not assignable to parameter of type '"error"'. 
    // Leave it commented:

    // clientInterface.on('finish', (data:DownloadProgressEvent) => {}); 



    // now let's call it right and define callback argument wihtout type to see if 
    // type inference work: 


    clientInterface.on('progress', (data) => {
      data.timestamp = undefined; // autocomplete works fine both in data and in the eventName arg 
    }); 
    
    
    return 0;
  }
}

class Factory{
  static getInstance<T>(interfaceName: string):T {
    if (interfaceName === 'IDownloadEventEmitter') {
      return new DownloadEventEmitter() as any;
    }
  }
}
