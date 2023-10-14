import { api } from "@/lib/axios";
import { songProps } from "@/types/songProps";
import { playlistProps } from "@/types/playlistProps";
import RecentSongs from "./server-components/RecentSongs";
import RecentPlaylists from "./server-components/RecentPlaylists";

export default async function Dashboard() {
    const ResponseSongs = await api.get('/songs')
    const songs: songProps[] = ResponseSongs.data

    const ResponsePlaylists = await api.get('/playlists')
    const playlists: playlistProps[] = ResponsePlaylists.data

    return (
        <div>
            <RecentSongs songs={songs} />
            <RecentPlaylists playlists={playlists} />
        </div>
    )
}