'use client'

import { PlaylistCard } from "@/components/PlaylistCards";
import { Songcard } from "@/components/Songcard";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import cardImage from '../../assets/card.jpeg';

type SongcardProps = {
    id: string
    name: string
}[]

type PlaylistcardProps = {
    id?: string
    cardImage?: any
    name: string
    description: string
}[]

export default function dashboard() {
    const [songs, setSongs] = useState<SongcardProps>([])
    const [playlists, setPlaylists] = useState<PlaylistcardProps>([])

    useEffect(() => {
        api.get('/songs').then(response => {
            setSongs(response.data)
        })
    }, [])

    useEffect(() => {
        api.get('/playlists').then(response => {
            setPlaylists(response.data)
        })
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-semibold">Vistas recentemente</h1>
            <div className="my-8 grid grid-cols-3 gap-3">
                {songs.slice(0, 6).map((song) => {
                    return (
                        <Songcard key={song.id} id={song.id} name={song.name} />
                    )
                })}
            </div>

            <h1 className="text-3xl font-semibold">Playlists</h1>
            <div className="my-8 grid grid-cols-5 gap-3">
                {playlists.slice(0, 4).map((playlist) => {
                    return (
                        <PlaylistCard key={playlist.id} cardImage={cardImage} description={playlist.description} name={playlist.name} />
                    )
                })}
            </div>
        </div>
    )
}