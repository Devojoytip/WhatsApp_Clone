import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { useContext, useState, useEffect } from 'react';
import { AccountContext } from '../../../context/AccountProvider'
import { getMessages, newMessage } from '../../../services/api';
import Message from './Message';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 79vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {

  const { account } = useContext(AccountContext);

  const [value, setValue] = useState('')

  const [messages, setMessages] = useState([])

  const [newMessageFlag, setNewMessageFlag] = useState(false)

  const sendText = async (e) => {
    // console.log(e);
    const code = e.keyCode || e.which;
    if (code === 13) {
      // message which typed & send by user to person
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value // value of message typed & sent
      }
      console.log('message - ', message)

      // api call to store messages
      await newMessage(message)

      setValue('')
      setNewMessageFlag(prev => !prev)
    }
  }

  // fetch past messages to show in chats
  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation?._id);
      setMessages(data);
    }
    getMessageDetails();
  }, [conversation?._id, person._id,newMessageFlag]);


  return (
    <Wrapper>
      <Component>
        {
          messages && messages.map(message => (
            <Container>
              <Message message={message} />
            </Container>
          ))
        }
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value} // to change value in input field after msg sent
      ></Footer>
    </Wrapper>
  )
}

export default Messages