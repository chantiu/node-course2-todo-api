//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb server');
        return;
    }
    console.log('Connected to mongodb server');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a3b1f2838c3680fa1179e3f')
    // }).toArray().then((docs) => {
    //     console.log('Todos: ');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todo's count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todo\'s count', err)
    // });
    
    db.collection('Users').find({name: 'Kristhian Tiu'}).count().then((count) => {
        console.log(`User's count : ${count}`);
    }, (err) => {
        console.log('Unable to fetch user\'s count', err)
    });

    db.close();
});