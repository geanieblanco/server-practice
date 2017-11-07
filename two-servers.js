const http = require("http");

//name ports
const PORT70 = 7000;
const PORT75 = 7500;

function handleRequestOne(request, response) {
  response.end("Path Hit! Path: " + request.url);
  console.log(`YOU EAT FARTS FOR BREAKFAST`);
};

function handleRequestTwo(request, response) {
  response.end("Path Hit! Path: " + request.url);
  console.log(`YOU SMELL LIKE ROSES`);
};

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORT70, function() {
  console.log(`Listening on ${ PORT70 }`);
})

serverTwo.listen(PORT75, function() {
  console.log(`Listening on ${ PORT75 }`);
});
