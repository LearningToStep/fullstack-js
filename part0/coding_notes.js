//Asynchronous is when something happens in steps, Synchronous is when it happens instantly for example;

// A Node is 

// Synchronous
function doSomething(callback) { // Calls the function 'doSomething'
  callback(); // JS enters the function and 'callback' runs immediately without being deferred with info/delay/scheduling
}

// Asynchronous
function doSomething(callback) { // Calls the function 'doSomething'
  setTimeout(callback, 0); // JS enters the function and 'callback' gets delayed due to being deferred with info/delay/scheduling
}
