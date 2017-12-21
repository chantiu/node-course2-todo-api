//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb server');
        return;
    }
    console.log('Connected to mongodb server');
 
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a3b4eff1287d20660082cd0')
    // }, {
    //     $set : {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log('Result', res);
    // }, (err) => {
    //     console.log('Unable to update user\'s provided.', err)
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a3b5f2e041ec809ebcef7b5')
    }, {
        $set : {
            name: 'Engr. Kristhian Tiu'
        },
        $inc : { age: 1}
    },{
        returnOriginal: false
    }).then((res) => {
        console.log('Result', res);
    }, (err) => {
        console.log('Unable to update user\'s provided.', err)
    });

    db.close();
});