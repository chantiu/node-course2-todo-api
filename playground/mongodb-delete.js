//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb server');
        return;
    }
    console.log('Connected to mongodb server');
 
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a3b4b78fe136a061c56facc')
    }).then((res) => {
        console.log('Result', res);
    }, (err) => {
        console.log('Unable to delete user\'s provided.', err)
    });

    db.close();
});