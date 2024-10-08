import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem, Select } from '@mui/material';

function MıiSelect() {
    const [currency, setCurrency] = useState("");
    console.log(currency);

    return (
        <div>
            <FormControl sx={{ width: "150px" }}>
                <InputLabel>Para Birimi </InputLabel>
                <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="TRY">Türk Lirası</MenuItem>
                    <MenuItem value="USD"> Dolar</MenuItem>
                    <MenuItem value="EUR">Euro</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default MıiSelect