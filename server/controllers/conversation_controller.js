import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    // match all members using { $all: [receiverId, senderId]  }
    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        response.status(200).json('Conversation already exists');
        return;
    }
    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        console.log('Conversation added')
        response.status(200).json(savedConversation);
    } catch (error) {
        response.status(500).json(error);
    }

}