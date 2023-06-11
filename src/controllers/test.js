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
    getAllByThame = async (req, res) => {
        const { thame } = req.params; 
        const tests = await testModel.find({ thame: thame })
        res.status(200).json(tests);
    }
    control = async (req, res) => {
        
    }
}

module.exports = new Test;