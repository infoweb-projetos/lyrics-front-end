'use client'
import { Button } from "@/components/Button";
import { PlaylistCard } from "@/components/PlaylistCards";
import cardImage from '../../assets/card.jpeg'
import {api} from '../../lib/axios'
import { useState, useEffect } from "react";


type PlaylistcardProps = { 
    id?: string
    cardImage?: any
    name?: string
    description?: string
}[]

export default function playlist(){

    const [playlists, setPlaylists] = useState<PlaylistcardProps>([]);

    useEffect(() => {
        api.get('/playlists').then(response => {
            setPlaylists(response.data)
        })
    }, [])


    return(
        <div className="flex flex-col h-full">
            <Button add='Adicionar playlist' text='Playlist'/>
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