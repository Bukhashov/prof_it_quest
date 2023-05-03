const {Schema, model} = require('mongoose');

const kvester = new Schema({
    title:  {type: String},
    img:    {type: String},

    ball:   {type: Number}
});

module.exports = model('kvesters', kvester);