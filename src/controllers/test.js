const testModel = require('../models/test');

class Test {
    add = async (req, res) => {
        const {thameId, question, variant, answer} = req.body;

        const newTest = new testModel({
            question: question,
            variant: variant,
            answer: answer,

        }).save();

        res.status(201).json("saved");
    }
    control = async (req, res) => {

    }
}

module.exports = new Test;