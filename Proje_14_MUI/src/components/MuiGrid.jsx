import { Grid, Grid2 } from '@mui/material'
import React from 'react'

function MuiGrid() {
    return (
        <div>
            Responsive taarım yapmaızı saglar
            <Grid container> {/* 12 bolmeden olusrur */}
                <Grid xs={12} sm={6} md={8} lg={9} > Item 1</Grid>
                <Grid xs={12} sm={6} md={4} lg={3} > Item 2</Grid>
            </Grid>
        </div>
    )
}

export default MuiGrid