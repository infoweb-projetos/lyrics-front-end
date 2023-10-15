'use client'

import { useState } from 'react';
import { createPlaylist } from '../../../../operations/createPlaylist';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';


export default function PlaylistFormDialog() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function submit() {
        createPlaylist(name, description)
        setName('')
        setDescription('')
    }

    return (
        <div>
            <button className='flex items-center' onClick={handleClickOpen}>
                <AddIcon className='relative left-8' sx={{color: 'white'}}/>
                <span className='bg-darkBlue p-3 pl-11 text-white rounded-lg'>Adicionar playlist</span>
            </button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Nova playlist</DialogTitle>
                <form onSubmit={submit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nome da playlist"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={e => setName(e.target.value)} 
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Descrição"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={e => setDescription(e.target.value)}
                        />                      
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button type="submit" onClick={handleClose}>Confirmar</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}