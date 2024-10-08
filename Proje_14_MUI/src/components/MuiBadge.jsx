import { AttachEmail } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'

function MuiBadge() {
    return (
        <div style={{ marginTop: '100px', marginLeft: '100px ' }}>
            <Badge badgeContent={51} max={9} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                <AttachEmail />
            </Badge>
        </div>
    )
}

export default MuiBadge