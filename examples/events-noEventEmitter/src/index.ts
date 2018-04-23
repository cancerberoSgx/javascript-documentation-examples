// ## What's this?
// 
// The objective of this document is see if we can document events that don't extend from EventEmitter, in other words, is there something special about the on() method and its first parameter from where the event name seems to be taken magically by typedoc??



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
}
/**
 * Ea cupidatat qui reprehenderit elit dolor minim. Sit ut velit ut exercitation occaecat tempor minim sint nisi consectetur consectetur et cillum. Nostrud laboris irure labore quis ea excepteur. 
 * 
 * Mollit elit sunt anim minim dolore occaecat.
 */
export interface IMouseEventListener extends IDeviceEventListener{
  /**
   * Reprehenderit sunt ad consectetur deserunt exercitation veniam et dolore adipisicing deserunt in. Officia Lorem dolor laboris occaecat ex duis aliquip deserunt cillum ut voluptate ut adipisicing. 
   * @param event 
   */
  click(event: IMouseClickEvent):void;
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
  x: number;
  y:number;
  button: 'left'|'right'|'middle';

}
/**
 * Proident sit cillum ea et tempor minim ut consequat incididunt velit officia cillum cillum.
 */
export interface IDeviceEvent{
  ts:Date;
}

class MouseEventSource implements IMouseEventSource{
  addMouseListener(l:IMouseEventListener):void {
  }
}
