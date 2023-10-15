'use client'

import { useState } from 'react';
import { deleteSong } from '@/operations/deleteSong';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { deletePlaylist } from '@/operations/deletePlaylist';

interface DeleteConfirmationProps {
  id: string
  direction: string
  children: React.ReactNode
}

export default function DeleteConfirmation({id, direction, children}: DeleteConfirmationProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function confirmation() {
    switch(direction) {
      case 'song' :
        deleteSong(id);
        break;
      case 'playlist' :
        deletePlaylist(id);
        break;
    }
  }

  return (
    <div>
        <div onClick={handleClickOpen}>
          {children}
        </div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {" Você tem certeza que deseja excluir?"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={confirmation}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}