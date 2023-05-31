import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"

const ChatBox = () => {
  return (
    <Box>
        <ChatHeader></ChatHeader>
        <Messages></Messages>
    </Box>
  )
}

export default ChatBox