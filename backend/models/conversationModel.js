const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ConversationModel = new Schema({
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message',
            default:[]
        }
    ],
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]
},{timestamps:true})


module.exports = mongoose.model('Conversation',ConversationModel);
