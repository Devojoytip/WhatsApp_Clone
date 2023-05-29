import { useState, useContext } from 'react';

// Menu & MenuItem from mui with props passed to adjust functions
// like position, closing

import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = () => {

    const [open, setOpen] = useState(null);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <>
        <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ // wrt to anchor (ele which is above it - MoreVert here)
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{ 
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={handleClose}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu