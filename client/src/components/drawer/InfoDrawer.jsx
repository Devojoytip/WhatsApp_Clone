import { Drawer } from '@mui/material'
import React from 'react'

const InfoDrawer = (props) => {
    const {open,setOpen} = props;
    return (
        <Drawer
            open={open}
            onClose={setOpen}
        >
            Hello
        </Drawer>
    )
}

export default InfoDrawer