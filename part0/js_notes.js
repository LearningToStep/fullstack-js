// # Synchronous is when it happens instantly
function doSomething(callback) { // Calls the function 'doSomething'
  callback(); // JS enters the function and 'callback' runs immediately without being deferred with info/delay/scheduling
}

// # Asynchronous is when something happens in steps
function doSomething(callback) { // Calls the function 'doSomething'
  setTimeout(callback, 0); // JS enters the function and 'callback' gets delayed due to being deferred with info/delay/scheduling
}

// # Functions
// A First-class function is when a function is treated like any other variable 
// Examples;
// A function can be passed as an arg to other functions
// A function can be returned by another function
// A function can be assigned as a value in a variable

function add(a, b) { // Creates function 'add' with 2 placeholders
    return a + b; // Assigned a, b to do a + b
}

module.exports = { add, multiply }; // Allows the exporting of a class to other classes

// # Const Variable
// A const is a variable that can't be reassigned with a different value
// You can import multiple functions from another class into a const elsewhere

// # Let variable
// A let is a variable that can be reassigned, and only works in the section of code it is created in such as a function

// # Time formatting ('ccc d LLL yyyy, h:mm a'));
// ccc = Day of the week
// d = Date of the day
// h:mm = hour:minute
// LLL = Shortened Month name
// a = Am or Pm

// # Js interacts with/manipulates DOM Nodes

// A Node is a single Javascript object with properties & methods created by the browser, in the DOM tree structure or on it's own in Memory
// A Node if created by JavaScript can exist in memory on its own (not attached to the DOM tree yet)

// An Element is a JavaScript object created by the browser to represent an HTML tag

Example:
<div>Hello</div> // HTML Tag w information

DIV rawr (Element, Node)

DIV // the tag name (tag without the < >) I am working with
rawr // a JavaScript object name I can reference in my code
Element // tells me rawr is an element (define object's node type)
Node // tells me rawr is part of the DOM tree

// ## List of DOM Node/Element navigation APIs (using 'var' as the reference)

// ## Parent -> UP

// ## Siblings -> SIDEWAYS

// ## Children -> DOWN

// Point the var ONE UP (parent) in the DOM tree
var.parentNode // point to a node one up in the DOM tree (can be an element, document, etc.)
var.parentElement // point to an element one up in the DOM tree (returns null if the parent is not an element)

// Point the var DOWN (Child) to ACCESS child nodes / child elements
var.childNodes // all child nodes under this one (elements + text + comments)
var.children // only element children

var.firstChild // the first child node (including text, comments, or elements)
var.firstElementChild // the first child that is an element (including text, comments, or elements)

var.lastChild // the last child node (including text, comments, or elements)
var.lastElementChild // the last child that is an element (including text, comments, or elements)

var.hasChildNodes() // true if this node has any children

// Point the var ONE SIDEWAYS (Sibling) on the same node in the DOM tree
var.nextSibling // point the node to the right at the same level
var.previousSibling // point the node to the left at the same level

var.nextElementSibling // point the element to the right at the same level
var.previousElementSibling // point the element to the left at the same level

// READ or CHANGE content inside the node
var.textContent // get or set all text inside this node

// ACCESS the properties attached to an element
var.attributes // all attributes on this element
var.getAttribute("x") // get the value of attribute "x"

// CHECK relationship between nodes
var.contains(node) // true if node is inside this one

// Change the DOM structure
var.appendChild(node) // add node to the end of this node
var.insertBefore(newNode, referenceNode) // add newNode before referenceNode
var.removeChild(childNode) // remove childNode
var.replaceChild(newNode, oldNode) // replace oldNode with newNode



