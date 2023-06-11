const {Schema, model} = require('mongoose');

const test = new Schema({
    question:       {type: String},
    variant:        {type: Array},
    answer:         {type: String},
    thame:          {type: String},
});

module.exports = model('tests', test);