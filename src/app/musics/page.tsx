'use client'

import { SongcardBig } from "@/components/SongCardBig";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";

type SongcardProps = {
    id: string
    name: string
    playlist_id: string
}[]

export default function musics() {
    const [songs, setSongs] = useState<SongcardProps>([])

    useEffect(() => {
        api.get('/songs').then(response => {
            setSongs(response.data)
        })
    }, [])

    return (
        <div>
            <div className="flex justify-between mt-20 border-b-2 border-gray-500 pb-3">
                <span className="text-3xl font-semibold">Músicas</span>
            </div>
            <div className="my-8 grid grid-cols-1 gap-3">
                {songs.map((song) => {
                    return (
                        <SongcardBig key={song.id} id={song.id} name={song.name} playlist_id={song.playlist_id} />
                    )
                })}
            </div>
        </div>
    )
}