# Tutorial

 * Best practices and details on how to describe events that a subclass of EventEmitter triggers with tutorial using typescript and typedoc
 * The events and the event listeners have kind of a complex inheritance hierarchy

### [final typedoc output](interfaces/idownloadeventemitter.html#on)

### [tutorial along in the code](docco/src/index.html) 

explaining my thoughts and experiments while I was implementing this. Hope can be useful to JavaScripters entering the world of typescript&typedoc like me



# Conclusion

typedoc seems to be very adapted to typescript and typescript interfaces. In the past I tried to document my classes not interfaces, and there I was not able of, for example overload the on() method. Seems that if you use interfaces and method overloading to exactly describe your APIs it behaves very well. 


# TODO

 * I'm still not able to document something like "this method triggers the events A, B, C of this or other class
 * I Still dont understand if there is something special with the `on()` method or if the same typedoc behavior will happen with other methods. 








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

In particular, listeners as functions make very hard (or impossible) to express complex listener hierarchies MouseClickEvent extends MouseEvent extends  UIEvent extends Event... So this example looks for a good practice designing and documenting such system. 
 



