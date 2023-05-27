import React from 'react'
import LoginDialog from './account/LoginDialog'
import { AppBar, Toolbar, styled, Box } from '@mui/material'

const Header = styled(AppBar)`
background-color: #00A884;
height: 125px;
box-shadow: none;
`

const DivBox = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;


const Messenger = () => {
    return (
        <DivBox>
            <Header>
                <Toolbar>

                </Toolbar>
                <LoginDialog />
            </Header>
        </DivBox>
    )
}

export default Messenger