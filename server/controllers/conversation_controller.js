import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
    console.log('request.body ',request.body)
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    // match all members using { $all: [receiverId, senderId]  }
    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    console.log('exist ',exist)
    
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

export const getConversation = async (request, response) => {
    try {
        let senderId = request.body.senderId;
        let receiverId = request.body.receiverId;
        const conversation = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
        return response.status(200).json(conversation);
    } catch (error) {
        response.status(500).json(error);
    }
}