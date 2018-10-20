const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
    if (err) {
        console.log('Unable to connect to mongodb server');
        console.log(err);
        return
    }
    console.log('Successfully connected to MongoDB');
    const db = client.db('ToDoApp');
    db.collection('ToDos').insertOne(
        {
            name: 'Vismay',
            task: 'Backend Developer',
            status: true
        },
        (error,result)=>{
            if (error) {
                console.log('Unable to add data',error);
            }
            console.log(JSON.stringify(result.ops,undefined,2));
        }
    );

    db.collection('Users').insertOne(
        {
            name: 'Vismay',
            age: 23,
            location: 'India'
        },
        (error,result)=>{
            if (error) {
                console.log('Unable to add data',error);
            }
            console.log(result.ops[0]._id.getTimestamp());
        }
    );

    client.close();
})