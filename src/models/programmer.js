const {Schema, model} = require('mongoose');

const programmer = new Schema({
    fullname:       {type: String},
    img:            {type: String},
    dateOfBirth:    {type: String},
    descriptions:   {type: String},
});

module.exports = model('programmeres', programmer);