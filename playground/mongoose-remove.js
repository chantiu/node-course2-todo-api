const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5a41f4bd6b377d6e46548042').then((todo) => {
    console.log(todo);
})