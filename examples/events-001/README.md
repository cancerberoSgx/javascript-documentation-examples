
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
 