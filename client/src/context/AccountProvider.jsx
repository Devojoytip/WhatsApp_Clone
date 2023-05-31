import { useState } from "react";
import { createContext } from "react";

export const AccountContext = createContext(null)

const AccountProvider = ({children}) => {

    const [account, setAccount] = useState(null)

    const [person, setPerson] = useState({})

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;