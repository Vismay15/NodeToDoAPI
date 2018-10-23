var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

//require the custom code writtten by us 
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var port = process.env.PORT || 3000;


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

app.get('/fetchByID/:id',(req,res)=>{
  var id = req.params.id;
  if (!ObjectID.isValid(id) || id == null || id == undefined || id.toString().trim() == '') {
    return res.status(400).send();
  } else {
    Todo.findById(id,(error,todo)=>{
      if (error) {
        return res.status(400).send();
      } else {
        res.send({todo});
      }
    })
  }
})

//start the app on port 3000
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
