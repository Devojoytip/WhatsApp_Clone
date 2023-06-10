import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../services/api";

const ChatBox = () => {

  const { account, person } = useContext(AccountContext);
  // const { person } = useContext(UserContext);

  const [conversation, setConversation] = useState(null)

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({ senderId: account.sub, receiverId: person.sub })
      setConversation(data) // fetch conversation details btw user & person & set it
    }

    getConversationDetails();
  }, [account.sub,person.sub])

  return (
    <Box>
      <ChatHeader person={person}></ChatHeader>
      <Messages person={person} conversation={conversation} ></Messages>
    </Box>
  )
}

export default ChatBox