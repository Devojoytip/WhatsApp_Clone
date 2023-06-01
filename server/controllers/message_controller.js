import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const newMessage = async (request, response) => {
    const msg = new Message(request.body);
    try {
        await msg.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        response.status(200).json("Message has been sent successfully");
    } catch (error) {
        response.status(500).json(error);
    }
}