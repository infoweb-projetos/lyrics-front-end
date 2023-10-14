import { api } from "@/lib/axios";
import { playlistProps } from "@/types/playlistProps";
import { PlaylistView } from "../components/PlaylistView";
import { SongCard } from "../../../../components/SongCard";

interface PlaylistIdProps {
  params: {
    id: string
  }
}

export default async function Playlist({params}: PlaylistIdProps) {
  const ResponsePlaylist = await api.get(`/playlists/${params.id}`)
  const playlist: playlistProps = ResponsePlaylist.data

  if (playlist && playlist.songs) {
    return (
      <div>
          <PlaylistView id={params.id} />
          <div className="my-8 grid grid-cols-1 gap-3">
              {playlist.songs.map((song) => {
                  return (
                    <SongCard key={song.id} id={song.id} name={song.name} playlist_id={song.playlist_id} cardWidth={false}/>
                  )
              })}
          </div>
      </div>
    );
  }
}