'use client'

import { playlistProps } from "@/types/playlistProps"

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function PlaylistDelete({id}: playlistProps){

    function deletePlaylist(){
        window.alert(`Função delete id: ${id}`)
        // api.delete(`/playlists/${id}`)
    }

    return (
        <div>
            <IconButton aria-label="delete" onClick={deletePlaylist}>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}