const thameModel = require('../models/thame');

class Thame {
    add = async (req, res) => {
        const { kvesterId, title, subject } = req.body;

        const newThame = new thameModel({
            kvesterId: kvesterId,
            title: title,
            subject: subject
        }).save();

        res.status(201).json("saved");
    }

    getAllByLanguage = async (req, res) => {
        const { language } = req.params;
        const thames = await thameModel.find({language: language}, {title: 1, _id: 1, subject: 1});
        res.status(200).json(thames);
    }

    getById = async (req, res) => {
        const {id} = req.params;

        const th = await thameModel.findById(id);
        res.status(200).json(th);
    }
}

module.exports = new Thame;