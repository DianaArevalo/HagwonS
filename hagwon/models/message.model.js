import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Register",
        required: true
    },

    receivedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Register",
        required: true,
    },

    message: {
        type: String,
        required: true
    }
}, { timestamps: true }

)

const Message = mongoose.model('Message', messageSchema)

export default Message