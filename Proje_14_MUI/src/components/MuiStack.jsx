import { Box, Divider, Stack } from '@mui/material'
import React from 'react'

function MuiStack() {
    return (
        <div>
            <Stack direction={"row"} spacing={10}   > {/*stack içine yazılmış herşey başlangıc olarak column olarak başlar 
            direction={xs="colm", sm:"row"} dersem telefon boyutu ve altına geldiğinde dikey srıalama yap demek
            */}
                <Box sx={{ width: "200px", height: "200px", backgroundColor: "red" }}>Item 1</Box>
                <Box sx={{ width: "200px", height: "200px", backgroundColor: "yellow" }}>Item 2</Box>
                <Box sx={{ width: "200px", height: "200px", backgroundColor: "green" }}>Item 3</Box>
            </Stack>
        </div>
    )
}

export default MuiStack