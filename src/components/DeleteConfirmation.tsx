'use client'

import { useState } from 'react';
import { deleteSong } from '@/operations/deleteSong';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

interface DeleteConfirmationProps {
    id: string
}

export default function DeleteConfirmation({id}: DeleteConfirmationProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function confirmation() {
    deleteSong(id);
    handleClose();
  }

  return (
    <div>
        <p onClick={handleClickOpen}>Excluir</p>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {" Você tem certeza que deseja excluir esta música?"}
            </DialogTitle>
            <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={confirmation}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}