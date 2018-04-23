# Tutorial

 * how to describe events that a subclass of EventEmitter triggers. The events and the event listeners have kind of a complex inheritance hierarchy



# Background (TL;DR)

this example tries to discuss best practices to document event related information with the typedoc. 
Is an excellent tool that does a lot of work automatically, ut unfortunately has poor documentation. 
There is almost no manual (this is the only "reference" I've found http://typedoc.org/guides/doccomments/). 

Annotation based comments in the code are a relative complex language. Poor documentation would be acceptable
if typedoc language is based on some well defined standard like jsdoc, closure annotations, javadoc, etc, 
but in this case typedoc seems to had created its own dialect taking advantage of typescript one can write 
 almost no types in the comments prettyy similar to javadoc. 

In the particular case of event sources and event listeners java/javadoc treats the problem differently. 
Event Listeners and events are described with well defined classes . In javascript on the contrary, is 
pretty common to see the event semantic spread in several callback arguments, and listeners as functions, and event types referenced with string constants (EventEmitter.on('click') instead of addMouseClickListener ala Java) . 

 In particular, listneres as functions make veyr hard (or impossible) to express complex listener hierarchies MouseClickEvent extends MouseEvent extends  UIEvent extends Event... So this example looks for a good practice designing and documenting such system. 
 







 // old: 



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