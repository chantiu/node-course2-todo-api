const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a3da0b421f062e71087d0cbz';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos : ', todos);
// }, (err) => {
//     console.log('Error', err);
// })

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo : ', todo);
// }, (err) => {
//     console.log('Error', err);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         console.log('Id not found');
//         return;
//     }
//     console.log('Todo : ', todo);
// }).catch((err) => {
//     console.log('Error', err);
// });

var userID = '5a3d899646183df3096f9932';
User.findById(userID).then((user) => {
    if(!user) {
        console.log('Id not found');
    } else {
        console.log('User : ', user);
    }
}).catch((err) => {
    console.log('Error : ', err);
});