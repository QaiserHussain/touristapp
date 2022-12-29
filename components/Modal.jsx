import { Dialog, Typography } from '@mui/material';
import React from 'react'

function Modal({open,handleModal}) {
  return (
    <Dialog open={open} onClose={handleModal}>
        <Typography sx={{padding:'100px'}}>dialog box</Typography>
    </Dialog>
  )
}

export default Modal;