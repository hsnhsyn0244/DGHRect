import { Button } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MuiButton() {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Button variant='text'>Kaydol</Button>
                <Button variant='contained'>Kaydol</Button>
                <Button variant='outlined'>Kaydol</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button color='error'>Giriş Yap</Button>
                <Button color='info'>Giriş Yap</Button>
                <Button color='inherit'>Giriş Yap</Button>
                <Button color='primary'>Giriş Yap</Button>
                <Button color='secondary'>Giriş Yap</Button>
                <Button color='success'>Giriş Yap</Button>
                <Button color='warning' variant='contained'>Giriş Yap</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button size='small' variant='contained' color='warning'>Geri Dön</Button>
                <Button size='medium' variant='contained' color='warning'>Geri Dön</Button>
                <Button size='large' variant='contained' color='warning'>Geri Dön</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button size='medium' variant='contained' startIcon={<AddCircleIcon />} color='warning'>Geri Dön</Button>
                <Button size='medium' variant='contained' endIcon={<AddCircleIcon />} color='warning'>Geri Dön</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>

            </div>
        </div>
    )
}

export default MuiButton