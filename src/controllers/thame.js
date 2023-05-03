const thameModel = require('../models/thame');

class Thame {
    add = async (req, res) => {
        const { kvesterId, title, subject } = req.body;

        const newThame = new thameModel({
            kvesterId: kvesterId,
            title: title,
            subject: subject
        }).save();

        res.status(200).json("saved");
    }

    getAllByKvesterId = async (req, res) => {
        const { kvesterId } = req.body;

        const thames = await thameModel.find({kvesterId: kvesterId}, {title: 1, _id: 1, ball: 1});

        if(thames.length > 0){
            res.status(200).json(thames);
        }
        else{
            res.status(400);
        }
    }

    getById = async (req, res) => {
        const {thameId} = req.body;

        const th = await thameModel.findById(thameId);

        if(th) {
            res.status(200).json(th);
        }else{
            res.status(400);
        }
    }
}

module.exports = new Thame;