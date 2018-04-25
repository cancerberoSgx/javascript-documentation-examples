// # TypeDoc Tutorial

// In this tutorial you will learn how to document your [TypeScript](https://www.typescriptlang.org/) 
// projects using [TypeDoc](http://typedoc.org/), a tool that will extract descriptions from your TypeScript 
// source comments and generate a well organized and pretty HTML documentation. 

// It is required that you know the basics of TypeScript, but besides that, this tutorial will start from scratch. 

// *Comment about this tutorial format*: Tutorial text, like this one, is at the left side of the screen, 
// and in general it will reference TypeScript code that is next to it, at the right side, just like 
// the function declare at the right side of this paragraph

// ## TypeDoc Introduction

// TypeDoc is an API documentation generator for TypeScript projects, similar 
// to [jsdoc](http://usejsdoc.org/) or [javadoc](https://en.wikipedia.org/wiki/Javadoc) are for JavaScript or Java. 
// Basically, you add documentation comments directly to your source code, right alongside the code 
// itself. The TypeDoc tool will scan your source code and generate an HTML documentation website for you.
//   
// Although configurable, TypeDoc will generate documentation of everything in your source, 
// even things that are not documented. 

// For adding descriptions of some entity in the code you must use special comments that must be placed 
// immediately *before* the code being documented. Each comment must start with a `/**` sequence in order 
// to be recognized by TypeDoc. Comments beginning `//`, /*, /***, or more than 3 stars will be ignored. 

// The simplest documentation is just a description (look the code at the right):

/** This is a description of the class Fruit */
class Fruit {

}




