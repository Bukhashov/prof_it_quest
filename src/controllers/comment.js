const comentModel = require('../models/comment');

class Comment {
    
    getById = async (req, res) => {
        const {thameId} = req.params;
        const comments = await comentModel.find({ thameId: thameId });
        res.status(200).json(comments);
    }
    add = (req, res) => {
        const { thameId, username, message } = req.body;
        
        new comentModel({
            thameId: thameId,
            username: username,
            message: message,
        }).save();

        res.status(201).json({ massage: "crated" });
    }
}

module.exports = new Comment;