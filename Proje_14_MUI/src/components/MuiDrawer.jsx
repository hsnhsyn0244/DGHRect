import { Box, Button, Drawer } from '@mui/material'
import React, { useState } from 'react'

function MuiDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Aç</Button>
            {/* anchor drawer in hangi pozısyondaacılacagınıgosterektedır */}
            <Drawer open={isOpen} anchor='right' onClose={() => setIsOpen(false)} >
                <Box sx={{ width: "300px" }}>
                    <h1>Başlık</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Box>
            </Drawer>
        </div>
    )
}

export default MuiDrawer