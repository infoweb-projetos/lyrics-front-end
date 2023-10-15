import { api } from "@/lib/axios";
import cardImage from '../../../assets/card.jpeg';
import { songProps } from "@/types/songProps";
import { playlistProps } from "@/types/playlistProps";
import { PlaylistCard } from "@/components/PlaylistCard";
import { SongCard } from "@/components/SongCard";

export default async function Dashboard() {
    const ResponseSongs = await api.get('/songs')
    const songs: songProps[] = ResponseSongs.data

    const ResponsePlaylists = await api.get('/playlists')
    const playlists: playlistProps[] = ResponsePlaylists.data

    return (
        <div>
            <div>
                <h1 className="text-3xl font-semibold">Vistas recentemente</h1>
                <div className="my-8 grid grid-cols-3 gap-3">
                    {songs.slice(0, 6).map((song) => {
                        return (
                            <SongCard key={song.id} id={song.id} name={song.name} cardWidth={true}/>
                        )
                    })}
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-semibold">Playlists</h1>
                <div className="my-8 grid grid-cols-3 gap-3">
                    {playlists.slice(0, 6).map((playlist) => {
                        return (
                            <PlaylistCard key={playlist.id} id={playlist.id} name={playlist.name} cardImage={cardImage}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}