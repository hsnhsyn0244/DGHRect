import { TextField } from '@mui/material'
import React from 'react'

function MuiTextField() {
    return (
        <div>
            <div style={{ marginBottom: "30px" }}>
                <TextField variant='filled' label='isim' />
                <TextField variant='outlined' label='isim' />
                <TextField variant='standard' label='isim' />
            </div>

            <div style={{ marginBottom: "30px" }}>
                <TextField variant='filled' label='isim' color='error' />
                <TextField variant='outlined' label='isim' color='primary' />
                <TextField variant='standard' label='isim' color='warning' />
            </div>

            <div style={{ marginBottom: "30px" }}>
                <TextField variant='filled' label='isim' helperText="ismini<i giriniz" />
                <TextField variant='outlined' label='şifre' helperText="şifrenizi giriniz" />
                <TextField variant='standard' label='isim' />
            </div>

        </div>

    )
}

export default MuiTextField