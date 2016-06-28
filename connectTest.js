var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next) {
    console.log("sup");
    next()
}
function doSecond(request, response, next) {
    console.log("hey");
}
app.use(doFirst);
app.use(doSecond);

function profile(request, response) {
  console.log("Profile Requested");
}
app.use('/profile', profile);


http.createServer(app).listen(8888);
console.log("Server is running");
