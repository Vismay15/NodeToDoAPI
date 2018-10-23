var express = require('express');
var bodyParser = require('body-parser');

//require the custom code writtten by us 
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//initialize the app using express
var app = express();


app.use(bodyParser.json());


//creating a new route with 'Post' method
app.post('/todos', (req, res) => {

  //creating a new instance of the Todo model as defined in todo.js
  var todo = new Todo({
    text: req.body.text
  });

  // this todo variable created above holds method for saving the data
  // the data is saved in the database only when todo.save is called

  todo.save().then((doc) => {
    //returns the created doc, and then it is sent in the response 
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//start the app on port 3000
app.listen(3000, () => {
  console.log('Started on port 3000');
});
