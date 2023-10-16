'use client'

import { api } from '@/lib/axios';
import React, { useEffect, useState } from 'react';
import { playlistProps } from '@/types/playlistProps';
import { editSong } from '@/operations/editSong';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SongEditProps {
    id: string
    children: React.ReactNode
}

export function SongEdit({id, children}: SongEditProps) {
    const [playlists, setPlaylists] = useState<playlistProps[]>([]);
    const [newPlaylist_id, setNewIdPlaylist] = useState('');
    const [newName, setNewName] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        api.get('/playlists').then(response => {
            setPlaylists(response.data)
        })
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleChange = (event: SelectChangeEvent) => {
        setNewIdPlaylist(event.target.value);
    };
    
    function submit() {
        editSong(id, newName, newPlaylist_id);
        setNewName('')
        setNewIdPlaylist('')
    }

    return(
        <div>
            <div onClick={handleClickOpen}>
                {children}
            </div>
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar Música</DialogTitle>
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
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Playlist</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={newPlaylist_id}
                            onChange={handleChange}
                            autoWidth
                            label="Playlist"
                        >
                            <MenuItem value="">
                                <em>Nenhuma</em>
                            </MenuItem>
                            {playlists.map((playlist) => {
                                return (
                                    <MenuItem value={playlist.id} key={playlist.id}>
                                        {playlist.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
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
