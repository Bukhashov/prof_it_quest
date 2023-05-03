const {Schema, model} = require('mongoose');

const thame = new Schema({
    kvesterId:  {type: String},
    title:      {type: String},
    subject:    {type: String},

    ball:       {type: Number}
});

module.exports = model('thames', thame);