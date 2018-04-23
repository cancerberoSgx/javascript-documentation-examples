
export class DifferentBehavior {

  /**
   * @event
   * @param event The name of the event to subscribe for.
   * @param handler A handler that will receive a progress event with the current and expected total bytes
   */
  public on(event: 'progress', listener: (data: DownloadProgressEvent) => boolean):void;

 /*
  * @event
  * @param event The name of the event to subscribe for.
  * @param handler A handler that will receive a progress event with the current and expected total bytes
  */
  public on(event: 'finish', listener: (data: DownloadFinishEvent) => boolean): void;

  /**
   * This method is the one that triggers a lot of events. How can I communicate that with typedoc ? 
   * @param config 
   * @em
   */
  public startDownloading(config: IDownloadConfig): Promise<any>{
    return Promise.resolve()
  }

  /**
   * this is the only other way I found to document an event. typedoc will name this event 'finish'
   * @event
   */
  public static 'finish':'finish'= 'finish' 
}

interface DownloadEvent{

}
/**
 * data with progress information
 */
export interface DownloadProgressEvent extends DownloadEvent {
  name: string
  value: number
  code: Array<number>
}
export interface DownloadFinishEvent extends DownloadEvent {

}

export interface IDownloadConfig {
  abortOnError: boolean
}




/*


 * This example method is the only way I've found with typedoc to express events that instance of classes trigger (like 
   * node.js's EventEmitter subclasses, for example). In this case this will generate an event named 'progress' 
   * associated with this class. According to typedoc documentation,  `\event tag` 
   * 
   *    " the `event` tag documents events triggered by the subsequent method". 
   * 
   * 
   * I think in this case this is wrong. In general, the `on` method of "event emitters never trigger events, and is used 
   * just to register a listener. Nevertheless I assume that's what the documenter wanted to say
   * 
   * My problem is that I cannot say "the method startDownload trigger the events `progress` and `finish` with typedoc. 
   *
   * 
   * 
* where events/ callbacks are particularly important
* listners are often defined with functions (where even with typescript functoin hierarchi is hard or 
* impossible  to define) and often 
* there is only one method for registering an event referencing it by name. Also event objects, not always,
*  could be spread in several arguments n(not encapsulated in a single object)
* 
* and documented at the register() method. For example: 
* 
* Java: 
* interface MouseClickEvent extends MouseEvent{}
* interface MouseClickListener extends MouseListener {
*  boolean clicked(event: MouseClickEvent)...
* }
* ...
* interface MouseClickEventEmitter extends MouseEventEmitter {
*  boolean addMouseListener(MouseListener l)...
* }
* ...
* MouseListener l = new MouseListenerImpl()
* aComponent.addMouseListener(mouseListener)
* 
* 
* JavaScript: 
* 
* interface MouseClickEvent extends MouseEvent
* function MouseClickListener(e: MouseClickEvent): boolean
* interface MouseClickEventEmitter extends MouseEventEmitter{
*  on(eventName: string, l: MouseClickEventListener):boolean
* }
* 
* class 
* 
* 
* But JavaScript has. or But poor documentationThe only technology mention
*/