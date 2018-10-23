const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
    if (err) {
        console.log('Unable to connect to mongodb server');
        console.log(err);
        return
    }
    console.log('Successfully connected to MongoDB');
    const db = client.db('ToDoApp'); 
    //here you have to specify the database by its name, "ToDoApp" is an entire database which holds collections
    db.collection('ToDos').insertOne(
        {
            name: 'Vismay',
            task: 'Learn full stack web development',
            status: 'WIP'
        },
        (error,result)=>{
            if (error) {
                console.log('Unable to add data',error);
            }
            console.log(JSON.stringify(result.ops,undefined,2));
        }
    );
})