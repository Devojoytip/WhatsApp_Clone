import React from 'react'
import LoginDialog from './account/LoginDialog'
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import { AccountContext } from '../context/AccountProvider'
import { useContext } from 'react'
import ChatDialog from './chat/ChatDialog'

const Header = styled(AppBar)`
background-color: #00A884;
height: 125px;
box-shadow: none;
`

const LoginHeader = styled(AppBar)`
background-color: #00A884;
height: 125px;
box-shadow: none;
`

const DivBox = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;


const Messenger = () => {
    const { account } = useContext(AccountContext);
    return (
        <DivBox>
            {
                (account)
                    ?
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                            <ChatDialog />
                        </LoginHeader>

                    </>
                    :
                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                            <LoginDialog />
                        </Header>
                    </>
            }

        </DivBox>
    )
}

export default Messenger