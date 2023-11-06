const express = require("express"); //('express) is a library & const express is a var
const app = express(); // call the function to create an app, set to const app
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/"));

app.post("/save-task", function (req, res) {
  const taskObj = req.body;
  // connects to database
  //saves new task to database
  console.log("/saved-task: ", taskObj.task);
  res.send({ savedTask: taskObj.task });
});

app.get("/get-tasks", function (req, res) {
  const tasks = ["Write Js code", "Relearn load tasks", "Run app"];
  res.send({ tasks: tasks });
});

app.listen(3000, function () {
  // what the app is goin to do when it starts
  console.log("app listening to port 3000");
}); //call a method called listen, give two parameters
