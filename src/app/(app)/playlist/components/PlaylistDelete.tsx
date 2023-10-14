'use client'

import { api } from "@/lib/axios"
import { playlistProps } from "@/types/playlistProps"

export function PlaylistDelete({id}: playlistProps){

    function deletePlaylist(){
        api.delete(`/playlists/${id}`)
    }

    return (
        <div>
            <button onClick={deletePlaylist}>Excluir playlist</button>
        </div>
    )
}