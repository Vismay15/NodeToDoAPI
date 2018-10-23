const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
    if (err) {
        console.log('Unable to connect to mongodb server');
        console.log(err);
        return
    }
    console.log('Successfully connected to MongoDB');
    const db = client.db('ToDoApp');

    db.collection('ToDos')
    .deleteMany({text:'start learning express.js'})
    .then((result)=>{
        console.log(result);
    })
})