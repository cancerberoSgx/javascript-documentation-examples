// # Documenting Events
// 
// IMO, the right way

import { EventEmitter } from 'events';
import { WSAEPROVIDERFAILEDINIT } from 'constants';







// 
// And now a lst attempt, using [typedoc-plugin-as-member-of](https://github.com/cancerberoSgx/typedoc-plugins-of-mine/tree/master/plugins/typedoc-plugin-as-member-of) typedoc plugin we will declare events as separate functions and using the annotation @asMemberOf those functioned will be moved as members of the host class `Vehicle`. 
// 
// Because we annotated the functions with `@event` the plugin will also mutate de functions to events. 
// 
// And it looks really good now : [typedoc output](https://cancerberosgx.github.io/javascript-documentation-examples/examples/events-002/docs/interfaces/vehicle.html)
// 
/**
 * A machine for transportation
 */
interface Vehicle{
  /** I you want to start moving. It's the main cause of events [[beforeStart]] and [[afterStop]] event emissions.  */
  start();
}
/**
 * @asMemberOf Vehicle
 * @event
 * @param x 
 */
declare function beforeStart(engineData: {suit: string; card: number; }[]): Promise<boolean>;

/**
 * @asMemberOf Vehicle
 * @event
 * @param x 
 */
declare function afterStop(stopReason: 'gas'|'fail', position: {x:number, y:number}): void;












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
