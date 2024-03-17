import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'

export const sendMessage = async (req, res, next) => {
    try {
        const { message } = req.body
        const { id: receivedId } = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receivedId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receivedId]
            })
        }

        const newMessage = new Message({
            senderId,
            receivedId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        //SOCKET IO FUNTIONALITY WIL GO HERE

        // await conversation.save()
        // await newMessage.save()

        // this will run in paralel
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)

        //minuto 1:10
    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" })
        next(error)
    }


}