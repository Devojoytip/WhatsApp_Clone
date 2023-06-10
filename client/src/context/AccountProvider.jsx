import { useState, useEffect, useRef } from "react";
import { createContext } from "react";
import { io } from 'socket.io-client';

export const AccountContext = createContext(null)

const AccountProvider = ({children}) => {

    const [account, setAccount] = useState(null)

    const [person, setPerson] = useState({})

    const [activeUsers, setActiveUsers] = useState([]) // to store all online users

    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;