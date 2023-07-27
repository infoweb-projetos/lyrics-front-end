'use client'
import { api } from "@/lib/axios"
import { PlaylistcardProps } from "./Playlistcards"

export function RemovePlaylist({id}: PlaylistcardProps){
    function removePlaylist(){
        api.delete(`/playlists/?id=${id}`)
    }
    return (
        <button onClick={removePlaylist}>deletar playlist</button>
    )
}