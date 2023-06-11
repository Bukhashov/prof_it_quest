const {Schema, model} = require('mongoose');

const comment = new Schema({
    thameId:  {type: String},
    username:  {type: String},
    message:   {type: String},
});

module.exports = model('comments', comment);