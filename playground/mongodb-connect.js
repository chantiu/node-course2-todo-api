//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb server');
        return;
    }
    console.log('Connected to mongodb server');
    
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (error, result) => {
        if (error) {
            console.log('Unable to insert todo', error)
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Kristhian Tiu',
        age: 30,
        location: 'PH'
    }, (error, result) => {
        if (error) {
            console.log('Unable to insert users', error)
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});