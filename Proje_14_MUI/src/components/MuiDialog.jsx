import React, { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

function MuiDialog() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const types = {
        YES: "yes",
        NO: "no",
    }

    const result = (typeParam) => {
        console.log("Kullanıcı sonucu : ", typeParam);
        if (typeParam === "yes") {
            console.log("Evet beni seviyor");
        } else {
            console.log("Hayır beni sevmiyor");
        }
        setDialogOpen(false);
    }
    return (
        <div>
            <Button onClick={() => setDialogOpen(true)}>Dialog</Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Soru</DialogTitle>
                <DialogContent>
                    <DialogContentText>Saz çalmayı seviyor musunuz ?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => result(types.YES)}>Evet</Button>
                    <Button onClick={() => result(types.NO)}>Hayır</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default MuiDialog