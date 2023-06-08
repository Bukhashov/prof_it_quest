const {Schema, model} = require('mongoose');

const thame = new Schema({
    kvesterId:  {type: String},
    title:      {type: String},
    subject:    {type: String},
});

module.exports = model('thames', thame);