import { songProps } from "@/types/songProps"
import { SongCard } from "@/app/(app)/dashboard/server-components/SongCard"

interface RecentSongsProps {
    songs: songProps[];
}

export default function RecentSongs({songs}: RecentSongsProps) {
    return(
        <div>
        <h1 className="text-3xl font-semibold">Vistas recentemente</h1>
            <div className="my-8 grid grid-cols-3 gap-3">
                {songs.slice(0, 6).map((song) => {
                    return (
                        <SongCard key={song.id} id={song.id} name={song.name} cardWidth={false}/>
                    )
                })}
            </div>
        </div>
    )
}