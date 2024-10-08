import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import React from 'react'

function MuiCheckbox() {
    return (
        <div>
            <FormControl>
                <FormLabel>Eğitim Durumu</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Universite" //ekranda gözükecek yazı
                        labelPlacement='end' //yazı checkbox ın neresınde gozukecegını burada belirliyoruz.
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Lise" //ekranda gözükecek yazı
                        labelPlacement='end' //yazı checkbox ın neresınde gozukecegını burada belirliyoruz.
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="İlkOkul" //ekranda gözükecek yazı
                        labelPlacement='end' //yazı checkbox ın neresınde gozukecegını burada belirliyoruz.
                    />

                </FormGroup>
            </FormControl>
        </div>
    )
}

export default MuiCheckbox