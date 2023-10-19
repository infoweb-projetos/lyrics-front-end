import SongCreate from "./components/SongCreate";
import { SongCard } from "@/components/SongCard";
import { getSongs } from "@/operations/getSongs";

export default async function Songs() {  
    const songs = await getSongs()

    return (
        <div>
            <div className="flex justify-between pb-3">
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