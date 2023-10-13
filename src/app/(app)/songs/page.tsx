'use client'

import { api } from "@/lib/axios";
import { AddSongButton } from "@/components/AddSongButton";
import { SongCardBig } from "@/components/SongCardBig";
import { songProps } from "@/types/songProps";
import { useEffect, useState } from "react";

export default function Songs() {
    const [songs, setSongs] = useState<songProps[]>([]);

    useEffect(() => {
        api.get('/songs').then(response => {
            setSongs(response.data)
        })
    }, [])

    return (
        <div>
            <div className="flex justify-between mt-20 border-b-2 border-gray-500 pb-3">
                <span className="text-3xl font-semibold">Músicas</span>
                <AddSongButton />
            </div>
            <div className="my-8 grid grid-cols-1 gap-3">
                {songs.map((song) => {
                    return (
                        <SongCardBig key={song.id} id={song.id} name={song.name} playlist_id={song.playlist_id} />
                    )
                })}
            </div>
        </div>
    )
}