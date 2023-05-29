import { styled, Drawer, Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
    font-size: 18px;
`

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const InfoDrawer = (props) => {
    const {open,setOpen} = props;
    return (
        <Drawer
            open={open}
            onClose={setOpen}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => setOpen(false)} />
                <Text>Profile</Text>
            </Header>
            <Component>
            <Profile></Profile>
            </Component>
        </Drawer>
    )
}

export default InfoDrawer