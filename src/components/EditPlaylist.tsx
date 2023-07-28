'use client'
import { api } from "@/lib/axios"
import { PlaylistcardProps } from "./PlaylistCards"
import { useState } from "react"

export function EditPlaylist({id}: PlaylistcardProps){

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function editPlaylist(){
        api.post(`/playlists/?id=${id}`,{
            name,description
        })
        console.log('estive aqui')
    }
    return (
        <div>
            <input type='text' onChange={e => setName(e.target.value)} className='bg-black/50 p-2 w-full mb-7 rounded-md'/>
            <input type='text' onChange={e => setDescription(e.target.value)} className='bg-black/50 p-2 w-full mb-7 rounded-md'/>
            <button onClick={editPlaylist}>editar playlist</button>
        </div>
    )
}