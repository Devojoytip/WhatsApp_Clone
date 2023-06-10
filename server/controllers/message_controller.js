import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const newMessage = async (request, response) => {
    const msg = new Message(request.body);
    try {
        await msg.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        return response.status(200).json("Message has been sent successfully");
    } catch (error) {
        response.status(500).json('Error calling newMessage api', error.message);
    }
}

export const getMessage = async (request, response) => {
    try {
        const messages = await Message.find({ conversationId: request.params.id });
        return response.status(200).json(messages);
    } catch (error) {
        response.status(500).json('Error calling getMessage api', error.message);
    }
}