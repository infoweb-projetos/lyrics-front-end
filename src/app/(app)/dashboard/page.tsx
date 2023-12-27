import card from '../../../assets/card.png';
import { PlaylistCard } from "@/components/PlaylistCard";
import { SongCard } from "@/components/SongCard";
import { getPlaylists } from "@/operations/getPlaylists";
import { getSongs } from "@/operations/getSongs";

export default async function Dashboard() {
    const songs = await getSongs()
    const playlists = await getPlaylists()

    return (
        <div className=''>
            <div>
                <h1 className="text-3xl font-semibold">Vistas recentemente</h1>
                <div className="my-8 grid grid-cols-3 gap-3">
                    {songs.slice(0, 6).map((song) => {
                        return (
                            <SongCard key={song.id} id={song.id} name={song.name} playlist_id={song.playlist_id} cardWidth={true} lyric={song.lyric} />
                        )
                    })}
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-semibold">Playlists</h1>
                <div className="my-8 grid grid-cols-5 gap-3">
                    {playlists.slice(0, 5).map((playlist) => {
                        return (
                            <PlaylistCard key={playlist.id} id={playlist.id} name={playlist.name} description={playlist.description} cardImage={card} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}