# Tutorial

 * Can we document events that don't use node.js `EventEmitter`?, in other words, is there something special about the on() method and its first parameter from where the event name seems to be taken magically by typedoc??


### [Take a look at the output](interfaces/igenericdeviceeventsource.html) 

### [descriptions along the code](docco/src/index.html)

And indeed it seems there is something special with the on() method name when it matters to events. [Take a look at the output](../interfaces/igenericdeviceeventsource.html) 

There are three events there, more or less well described, but their name is `addDeviceListner`  . That didnt happened with on()

In this case events are treated like methods but I think is acceptable. 


 * see also [the first research events-001](../../events-001/docs/index.html)



<!-- ### [final typedoc output](interfaces/idownloadeventemitter.html#on)

### [tutorial along in the code](docco/src/index.html) 

explaining my thoughts and experiments while I was implementing this. Hope can be useful to JavaScripters entering the world of typescript&typedoc like me



# Conclusion

typedoc seems to be very adapted to typescript and typescript interfaces. In the past I tried to document my classes not interfaces, and there I was not able of, for example overload the on() method. Seems that if you use interfaces and method overloading to exactly describe your APIs it behaves very well. 


# TODO

 * I'm still not able to document something like "this method triggers the events A, B, C of this or other class
 * I Still dont understand if there is something special with the `on()` method or if the same typedoc behavior will happen with other methods.  -->



