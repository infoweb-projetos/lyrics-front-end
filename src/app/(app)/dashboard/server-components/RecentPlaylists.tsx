import { PlaylistCard } from "@/app/(app)/dashboard/server-components/PlaylistCard";
import { playlistProps } from "@/types/playlistProps";
import cardImage from '../../../../assets/card.jpeg'

interface RecentPlaylistsProps {
    playlists: playlistProps[];
}

export default function RecentPlaylists({playlists}: RecentPlaylistsProps) {
    return(
        <div>
        <h1 className="text-3xl font-semibold">Vistas recentemente</h1>
            <div className="my-8 grid grid-cols-3 gap-3">
                {playlists.slice(0, 6).map((playlist) => {
                    return (
                        <PlaylistCard key={playlist.id} id={playlist.id} name={playlist.name} cardImage={cardImage}/>
                    )
                })}
            </div>
        </div>
    )
}