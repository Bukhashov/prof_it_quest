const programmerModel = require('../../models/programmer');

class Programmer {
    getAll = async (req, res) => {
        const allProgrammer = await programmerModel.find({});

        res.status(200).json(allProgrammer);
    }

    getById = async (req, res) => {
        const { id } = req.params;

        const programmer = await programmerModel.findById(id);

        if(programmer) {
            res.status(200).json(programmer);
        }else{
            res.status(400).json({massage: "bad req"});
        }

    }

    add = async (req, res) => {
        const {fullname, img, dateOfBirth, descriptions} = req.body;

        new programmerModel({
            fullname: fullname,
            img: img,
            dateOfBirth: dateOfBirth,
            descriptions: descriptions
        }).save();

        res.status(200).json({message: "saved"});
    }
}

module.exports = new Programmer;