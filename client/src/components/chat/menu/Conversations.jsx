import { useContext, useEffect, useState } from "react";

import { getUsers } from '../../../services/api';
import Conversation from "./Conversation";
import { Box,Divider,styled } from "@mui/material";
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

const Conversations = () => {

  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext)

  useEffect(() => {
    const fetchData = async () => {
      let users_arr = await getUsers();
      setUsers(users_arr)
    }
    fetchData();
  }, []);

  return (
    <Component>
      {
        // each user's chat
        users.map(user => (
          user.sub !== account.sub && // check if same user then no chat 
          <>
          <Conversation user={user} key={user.sub}></Conversation>
          <StyledDivider></StyledDivider>
          </>
        ))
      }
    </Component>
  )
}

export default Conversations