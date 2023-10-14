'use client'

import { api } from "@/lib/axios"
import { useState } from "react"
import { playlistProps } from "@/types/playlistProps"

export function PlaylistEdit({id}: playlistProps){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function editPlaylist(){
        api.post(`/playlists/${id}`,{
            name,description
        })
    }
    
    return (
        <div>
            <input type='text' onChange={e => setName(e.target.value)} className='bg-black/50 p-2 w-full mb-7 rounded-md'/>
            <input type='text' onChange={e => setDescription(e.target.value)} className='bg-black/50 p-2 w-full mb-7 rounded-md'/>
            <button onClick={editPlaylist}>Editar playlist</button>
        </div>
    )
}