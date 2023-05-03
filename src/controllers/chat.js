const chatModel = require('../models/chat');

class Chat {
    add = async (req, res) => {
        const { username, message } = req.body;

        const newChat = new chatModel({
            username: username,
            message: message
        }).save();

        res.status(200).json({massage: "saved"});
    }

    get = async (req, res) => {
        const allChats = await chatModel.find({});

        if(allChats.length() > 0) {
            res.status(200).json(allChats);
        }
    }
}

module.exports = new Chat;