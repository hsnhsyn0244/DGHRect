import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Navbar() {

    const navigate = useNavigate();

    const logout = async () => {
        toast.success("Çıkış Yapılıyor...")
        setTimeout(() => {
            signOut(auth);
            navigate("/auth")
        }, 3000)


    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "black", height: "80px" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FireBase
                    </Typography>
                    <Button onClick={logout} color="inherit">Çıkış yap</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar