'use client'

import { useState } from "react"
import { editPlaylist } from "@/operations/editPlaylist";

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { playlistProps } from '@/types/playlistProps';

interface PlaylistEditProps {
    playlist: playlistProps
}

export function PlaylistEdit({playlist}: PlaylistEditProps){
    const oldName = playlist.name
    const oldDescription = playlist.description
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    function submit() {

        if(newName === '' && newDescription !== '') {
            editPlaylist(playlist.id, oldName, newDescription);
        } else if (newDescription === '' && oldName !== '') {
            editPlaylist(playlist.id, newName, oldDescription);
        } else if (newDescription === '' && newName === '') {
            editPlaylist(playlist.id, oldName, oldDescription);
        } else {
            editPlaylist(playlist.id, newName, newDescription);
        }

        setNewName('')
        setNewDescription('')
    }
    
    return (
        <div>
            <IconButton aria-label="delete" onClick={handleClickOpen}>
                <EditIcon sx={{color: 'white'}}/>
            </IconButton>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Nova playlist</DialogTitle>
                <form onSubmit={submit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Novo nome"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={e => setNewName(e.target.value)} 
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Nova descrição"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={e => setNewDescription(e.target.value)}
                        />                      
                    </DialogContent>
                    <DialogActions>
                            <Button onClick={handleClose}>Cancelar</Button>
                            <Button type="submit" onClick={handleClose}>Confirmar</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}
