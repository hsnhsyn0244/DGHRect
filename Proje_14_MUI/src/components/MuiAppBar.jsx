import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';


function MuiAppBar() {
    const [anchorel, setAnchorel] = useState(null)

    const openMenu = (e) => {
        setAnchorel(e.currentTarget);
    }

    const closeMenu = () => {
        setAnchorel(null);
    }


    const openControl = anchorel ? true : false;

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton>
                    <MenuIcon sx={{ color: "white" }} />
                </IconButton>

                <Typography variant='h6'>MUI</Typography>

                <Stack direction={'row'} sx={{ marginLeft: 'auto' }} >
                    <Button sx={{ color: "white" }} >Anasyafa</Button>
                    <Button sx={{ color: "white" }} >Hakkımızda</Button>
                    <Button sx={{ color: "white" }} onClick={openMenu} >Ürünler</Button>
                    <Button sx={{ color: "white" }} >İletişim</Button>
                </Stack>

                <Menu anchorEl={anchorel} open={openControl} onClose={closeMenu}>
                    <MenuItem onClick={closeMenu}>Uzun sap</MenuItem>
                    <MenuItem onClick={closeMenu}>Kısa Sap</MenuItem>
                    <MenuItem onClick={closeMenu}>Cura</MenuItem>
                    <MenuItem onClick={closeMenu}>Tel Çeşitleri</MenuItem>
                </Menu>

            </Toolbar>

        </AppBar>
    )
}

export default MuiAppBar