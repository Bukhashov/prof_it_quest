const kvesterModel = require('../models/kvester');

class Kvester {
    getAll = async (req, res) => {
        const allKvesters = await kvesterModel.find({});

        if(allKvesters.length > 0) {
            res.status(200).json(allKvesters);
        }
    }
    add = async (req, res) => {
        const {title, image} = req.body;

        const newKvester = new kvesterModel({
            title: title,
            img: image
        }).save();

        res.status(200).json("saved");
    }
}

module.exports = new Kvester;