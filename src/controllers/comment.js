const commentModel = require('../models/comment');

class Comment {
    add = async (req, res) => {
        const { username, thameId, message } = req.body;

        const newComment = new commentModel({
            username: username,
            thameId: thameId,
            message: message
        }).save();

        res.status(200).json({massage: "saved"});
    }

    get = async (req, res) => {
        const {thameId} = req.body;

        const comments = await commentModel.find({thameId: thameId});
        
        res.status(200).json(comments);
    }
}

module.exports = new Comment;