import { api } from "@/lib/axios";
import SongCreate from "./components/SongCreate";
import { SongCard } from "@/components/SongCard";
import { songProps } from "@/types/songProps";

export default async function Songs() {
    const ResponseSongs = await api.get('/songs')
    const songs: songProps[] = ResponseSongs.data

    return (
        <div>
            <div className="flex justify-between mt-20 border-b-2 border-gray-500 pb-3">
                <span className="text-3xl font-semibold">Músicas</span>
                <SongCreate />
            </div>
            <div className="my-8 grid grid-cols-1 gap-3">
                {songs.map((song) => {
                    return (
                        <SongCard key={song.id} id={song.id} name={song.name} playlist_id={song.playlist_id} cardWidth={false}/>
                    )
                })}
            </div>
        </div>
    )
}