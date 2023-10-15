'use client'

import { useState } from "react"
import { playlistProps } from "@/types/playlistProps"
import { editPlaylist } from "@/operations/editPlaylist";

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export function PlaylistEdit({id}: playlistProps){
    const [newName, setNewName] = useState('')
    const [newDescription, setNewDescription] = useState('')

    function confirmation() {
        editPlaylist(id, newName, newDescription);
    }
    
    return (
        <div>
            {/* <input type='text' onChange={e => setNewName(e.target.value)} autoFocus />
            <input type='text' onChange={e => setNewDescription(e.target.value)} /> */}
            <IconButton aria-label="delete" onClick={confirmation}>
                <EditIcon />
            </IconButton>
        </div>
    )
}