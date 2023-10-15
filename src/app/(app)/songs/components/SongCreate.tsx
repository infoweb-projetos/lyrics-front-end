import { api } from '@/lib/axios';
import SongFormDialog from './SongFormDialog';
import { playlistProps } from '@/types/playlistProps';

export default async function SongCreate() {
    const ResponsePlaylists = await api.get('/playlists')
    const playlists: playlistProps[] = ResponsePlaylists.data

    return (
        <SongFormDialog playlists={playlists}/>
    );
}