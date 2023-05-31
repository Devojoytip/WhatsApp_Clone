import { useContext, useEffect, useState } from "react";

import { getUsers } from '../../../services/api';
import Conversation from "./Conversation";
import { Box } from "@mui/material";
import { AccountContext } from '../../../context/AccountProvider';

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
    <Box>
      {
        users.map(user => (
          user.sub !== account.sub &&
          <Conversation user={user} key={user.sub}></Conversation>
        ))
      }
    </Box>
  )
}

export default Conversations