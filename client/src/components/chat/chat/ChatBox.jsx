import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const ChatBox = () => {
  
  const { person } = useContext(AccountContext);

  return (
    <Box>
        <ChatHeader person={person}></ChatHeader>
        <Messages person={person}></Messages>
    </Box>
  )
}

export default ChatBox