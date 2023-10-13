'use client'

import { api } from "@/lib/axios";
import { useState } from "react";
import { playlistProps } from "@/types/playlistProps";
import { PlaylistData } from "@/components/PlaylistData";
import { SongCardBig } from "@/components/SongCardBig";

interface PlaylistIdProps {
  params: {
    id: string
  }
}

export default function Playlist({params}: PlaylistIdProps) {
  const id = params.id;
  const [playlist, setPlaylist] = useState<playlistProps>();

  if (id !== '') {
    api.get(`/playlists/${id}`).then(response => {
      setPlaylist(response.data);
    });
  }

  if (playlist && playlist.songs) {
    return (
      <div>
          <PlaylistData id={id} />
          <div className="my-8 grid grid-cols-1 gap-3">
              {playlist.songs.map((song) => {
                  return (
                    <SongCardBig key={song.id} id={song.id} name={song.name} playlist_id={song.playlist_id}/>
                  )
              })}
          </div>
      </div>
    );
  }
}