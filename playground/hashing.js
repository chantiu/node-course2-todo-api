const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// var message = 'i AM Awesome!';
// var hash = SHA256(message).toString();

// console.log(`message : ${message}`);
// console.log(`hash : ${hash}`);


// var data = {
//     id: 4
// }
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }


// ============== jwt
// var data = {
//     id: 10
// };

// var token = jwt.sign(data, 'somesecret');
// console.log(token);
// var decoded = jwt.verify(token, 'somesecret');
// console.log('decoded: ', decoded);

// ============ bcryptjs
var password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$1RQ2LPLhHPn3LTXguZT2..jYwgiplpuBkxCBci01cZXkbNXv4jpKa';
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});
