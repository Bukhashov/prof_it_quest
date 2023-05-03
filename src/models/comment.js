const {Schema, model} = require('mongoose');

const comment = new Schema({
    thameId:  {type: String},
    message:   {type: String},
    username:  {type: String}
});

module.exports = model('comments', comment);