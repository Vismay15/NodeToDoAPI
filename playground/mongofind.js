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
    .find({
        task:'loopback Expert'
    })
    .toArray()
    .then((docs)=>{
        console.log('Fetched');
        console.log(JSON.stringify(docs,undefined,2));
    },(error)=>{
        console.log('Error in fetching the docs',error);
    })
})