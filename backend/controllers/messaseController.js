const Message = require('../models/messageModel');
const Conversation = require('../models/conversationModel');
const {getReceiverSocketId, io} = require("../socket/socket");

const sendMessage = async (req, res) => {
    try{
        const {id:receiverId}= req.params
        const senderId = req.user._id.toString()
        const {message} = req.body

        let conversation = await Conversation.findOne({
            participants: {$all:[senderId,receiverId]}
        })

if (!conversation){
    conversation = await Conversation.create({
        participants: [senderId,receiverId]
    })
}
        const newMessage = new Message({
            receiverId,
            senderId,
            message
        })
        const savedMessage = await newMessage.save();

        if (savedMessage) {
            conversation.messages.push(savedMessage._id)
            await conversation.save(); // Save the conversation after updating messages
        }

        const receiverSocketId = getReceiverSocketId(receiverId)

        if (receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }




        return res.status(201).json(newMessage)


    }catch (error) {
        console.error('following error in here',error)
        return res.status(500).json({error: 'Something went wrong',error3:error});
    }
}
const getMessages = async (req,res)=>{
    try {
        const {id:userIdToChatId}= req.params
        const senderId = req.user._id.toString()

        let conversation = await Conversation.findOne({
            participants: {$all:[senderId,userIdToChatId]}
        }).populate("messages");

        if (!conversation){
            return res.status(400).json([])
        }

        const messages = conversation.messages

        return res.status(200).json(messages)


    }catch (error) {
        console.error('following error in here',error)
        return res.status(500).json({error: 'Something went wrong',error3:error});
    }

}


module.exports={
    sendMessage,
    getMessages
}