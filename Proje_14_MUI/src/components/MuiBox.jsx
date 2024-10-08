import { Box } from '@mui/material'
import React from 'react'

function MuiBox() {
    return (
        <div>
            <Box
                sx={{
                    width: '200px', height: '200px', backgroundColor: "orange", borderRadius: "5px"
                }}
            >

            </Box>
        </div>
    )
}

export default MuiBox