const express = require("express"); //('express) is a library & const express is a var
const app = express(); // call the function to create an app, set to const app
const bodyParser = require("body-parser"); // changes from JSON t JS object.

app.use(bodyParser.json()); // middleware that does json parsing
app.use("/", express.static(__dirname + "/"));

app.post("/save-task", function (req, res) {
  // this functon will run whenever a post req is sent 2 this endpoint
  const taskObj = req.body; // grab payload out of the request, body is attribute set on
  // connects to data base
  // saves new task in database
  console.log("saved-task: ", taskObj.task); // takes 2 parameters
  res.send({ savedTask: taskObj.task }); // send response from BE
});

app.get("/get-tasks", function (req, res) {
  const task = ["Write JS code", "Have breakfast", "Study more"];
  res.send({ tasks: tasks });
});

app.listen(3000, function () {
  // what the app is goin to do when it starts
  console.log("app listening to port 3000");
}); //call a method called listen, give two parameters
