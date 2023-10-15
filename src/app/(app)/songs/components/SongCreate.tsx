import SongFormDialog from './SongFormDialog';
import { getPlaylists } from '@/operations/getPlaylists';

export default async function SongCreate() {
    const playlists = await getPlaylists();

    return (
        <SongFormDialog playlists={playlists}/>
    );
}