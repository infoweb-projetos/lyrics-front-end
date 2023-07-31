"use client";

import { SongcardBig } from "@/components/SongCardBig";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { PlaylistData } from "../../../components/PlaylistData";
import {playlistDataProps} from '../../../types/playlistProps'

export default function VerPlaylist() {
    const [id, setId] = useState('');
    const [playlist, setPlaylist] = useState<playlistDataProps | null>(null);

    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        const playlistId = pathParts[pathParts.length - 1];

        setId(playlistId);
    }, []);


    useEffect(() => {
      if (id !== '') {
        api.get(`/playlists/?id=${id}`).then(response => {
            console.log(response.data)
          setPlaylist(response.data);
        });
      }
    }, [id]);
  
    if (!playlist) {
      return <div>Carregando...</div>;
    }
    
    return (
        <div>
            <PlaylistData id={id} />
            <div className="my-8 grid grid-cols-1 gap-3">
                {playlist.Songs.map((song) => {
                    return (
                        <SongcardBig key={song.id} id={song.id} name={song.name} playlist_id={song.playlist_id}/>
                    )
                })}
            </div>
        </div>
    );
}