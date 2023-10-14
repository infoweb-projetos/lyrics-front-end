'use client'

import {api} from '../../../lib/axios';
import cardImage from '../../../assets/card.jpeg';
import { AddPlaylistButton } from "@/components/AddPlaylistButton";
import { playlistProps } from "@/types/playlistProps";
import { PlaylistCard } from "@/app/(app)/dashboard/server-components/PlaylistCard";
import { useEffect, useState } from 'react';

export default function Playlists(){
    const [playlists, setPlaylists] = useState<playlistProps[]>([]);

    useEffect(() => {
        api.get('/playlists').then(response => {
            setPlaylists(response.data)
        })
    }, [])

    return(
        <div className="flex flex-col h-full">
            <AddPlaylistButton/>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {playlists.map((card) => {
                    return(
                        <div key={card.id}>
                            <PlaylistCard id={card.id} cardImage={cardImage} description={card.description} name={card.name}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}