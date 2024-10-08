import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import CustomTabPanel from './CustomTabPanel';

function MuiTabs() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Kişisel Bİlgiler" />
                    <Tab label="Eğitim Bilgisii" />
                    <Tab label="İletişim" />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                Hasan Hüseyin Korutürk
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Fırat Üniversitesi
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                hsnhsyn02440244@gmail.com
            </CustomTabPanel>
        </Box>
    )
}

export default MuiTabs