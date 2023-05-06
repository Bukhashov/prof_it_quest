const {Schema, model} = require('mongoose');

const university = new Schema({
    fullname:       {type: String},
    img:            {type: String},
    dateOfBirth:    {type: String},
    descriptions:   {type: String},
});

module.exports = model('university', university);