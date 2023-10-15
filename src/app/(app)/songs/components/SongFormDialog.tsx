'use client'

import { useState } from 'react';
import { submitData } from './submitData';
import { playlistProps } from '@/types/playlistProps';

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
import AddIcon from '@mui/icons-material/Add';

interface SongFormDialogProps{
    playlists: playlistProps[]
}

export default function SongFormDialog({playlists}: SongFormDialogProps) {
    const [name, setName] = useState('');
    const [playlist_id, setIdPlaylist] = useState<string>('');
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setIdPlaylist(event.target.value);
    };

    function submit() {
        submitData(name, playlist_id)
        setName('')
        setIdPlaylist('')
    }

    return(
        <div>
            <button className='flex items-center' onClick={handleClickOpen}>
                <AddIcon className='relative left-8' sx={{color: 'white'}}/>
                <span className='bg-darkBlue p-3 pl-11 text-white rounded-lg'>Adicionar música</span>
            </button>
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Nova Música</DialogTitle>
            <form onSubmit={submit}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nome da Música"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => setName(e.target.value)}
                    />
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Playlist</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={playlist_id}
                            onChange={handleChange}
                            autoWidth
                            label="Playlist"
                        >
                            <MenuItem value="">
                                <em>None</em>
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