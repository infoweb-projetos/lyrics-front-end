'use client'

import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { songProps } from "@/types/songProps";
import { playlistProps } from "@/types/playlistProps";
import { SongCard } from "@/components/SongCard";
import { PlaylistCard } from "@/components/PlaylistCard";
import cardImage from '../../../assets/card.jpeg'

export default function Dashboard() {
    const [songs, setSongs] = useState<songProps[]>([]);
    const [playlists, setPlaylists] = useState<playlistProps[]>([]);

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
                        <SongCard key={song.id} id={song.id} name={song.name} />
                    )
                })}
            </div>

            <h1 className="text-3xl font-semibold">Playlists</h1>
            <div className="my-8 grid grid-cols-5 gap-3">
                {playlists.slice(0, 4).map((playlist) => {
                    return (
                        <PlaylistCard key={playlist.id} id={playlist.id} description={playlist.description} name={playlist.name} cardImage={cardImage}/>
                    )
                })}
            </div>
        </div>
    )
}