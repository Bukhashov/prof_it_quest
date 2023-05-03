const {Schema, model} = require('mongoose');

const chat = new Schema({
    username:  {type: String},
    message:   {type: String},
});

module.exports = model('chats', chat);