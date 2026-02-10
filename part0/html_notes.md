### HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP

- Server & Brave communicate using HTTP protocol, Network tab in dev console (f12) shows this.
- GET method requests a representation of the specified resource, GET requests should only be used to request data and shouldn't contain a body
- An Upstream server refers to a server that provides services to another servers (ususally higher in a network hierarchy)
- Common Status Codes;
  - Status code 200 Request successful
  - Status code 201 Created is when the request has been fulfilled, creating a new resource
  - Status code 204 No Content is when the server successfully processed the request, and is not returning any content
  - Status code 206 Partial Content is when the server delivers only part of a resource due to a range header sent by the client (the range header is used by HTTP clients to enable reumsing downloads or split a downloadi nto multiple simultaneous streams)
  - Status code 301 Moved Permanently is when the link has moved to a new resource and will be redirected after asking consent
  - Status code 302 Found Indicated the resource is accessible via a different URL in the Location Header Field
  - Status code 303 See other is when a server responds to a post with a location header field expecting the client to issue a GET request to the specified location
  - Status code 400 Bad Request is due to an apparent client error
  - Status code 401 Unauthorized is due to authentication being required and failed/not yet provided
  - Status code 403 Forbidden is due to a request that is valid, but the server refuses the action. The user may not have permissions, need an account or caused the creation of a duplicate record where only one is allowed
  - Status code 404 Not Found is due to a resource not able to be found but may be available in the future
  - Status code 429 Too Many Requests is when you get rate limited
  - Status code 500 Internal Server Error is a generic error message when no other status is suitable
  - Status code 502 Bad Gateway is when the server was acting as a gateway or proxy and received an invalid response from the upstream server
  - Status code 503 Service Unavailable is when the server cannot handle the request (it's down for maintenance or overloaded with traffic)
  - Status code 504 is when the server was acting as a gateway or proxy and did not receive a timely response form the upstream server

- The server can form HTML documents dynamically according to the application's code, for example using data from a database
- Course is using Express Library (framework) for Node.js
- Type 'Document' is the HTML code of the page in network under F12
- Document Object Model (DOM) is an application programming interface (API)
  - A DOM is the tree strucure of HTML
- A Node is a single Javascript object with properties & methods created by the browser, in the DOM tree structure or Memory [Dom Tree Example](domtreenodes.png)
- An Element is a JavaScript object created by the browser to represent an HTML tag
- HTTP is an application layer protocol for transmitting hypermedia documents such as HTML. Uses are communication between browsers and servers, machine to machine communication, programmatic access to APIs
- XMLHttpRequest.readyState property returns the state an XMLHttpRequest (XHR) client is in. 
An XHR client exists in one of the 5 fetch request states;
  - Value: `0` State: `UNSET` Desc: The XMLHttpRequest client has been created, but the `open()` method has not been called yet
  - Value: `1` State: `OPENED` Desc: `open()` method has been called, During this state, the request can be set using the `setRequestHeader()` method and the `send()` method can be called which will initiate the fetch
  - Value: `2` State: `HEADERS_RECEIVED` Desc: `send()` has been called, all redirects have been followed and the response headers have been received
  - Value: `3` State: `LOADING` Desc: Response's body is being received. If `responseType is "text" or empty string, `responseText` will have the partial text response as it loads
  - Value: `4` State: `DONE` Desc: The fetch operation is complete (Completed or failed)