import { Button, IconButton, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function MuiSnackBar() {

    const [openSnackBar, setOpenSnackBar] = useState(false)

    const handleClick = () => {
        setOpenSnackBar(true)
    }
    const handleClose = () => {
        setOpenSnackBar(false)
    }

    const action = (
        <>
            <Button onClick={handleClose} size='small' color='info'>Kapat</Button>
            <IconButton >
                <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
        </>
    )

    return (
        <div>
            <Button onClick={handleClick}> Snack Bar' ı aç</Button>
            <Snackbar
                open={openSnackBar}
                message={"hata oluştu"}
                action={action}
                autoHideDuration={3000}
                onClose={handleClose}
            />
        </div>
    )
}

export default MuiSnackBar