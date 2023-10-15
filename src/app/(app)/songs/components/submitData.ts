import { api } from '@/lib/axios';

export async function submitData(name: string, playlist_id: string) {
    if (!name || !playlist_id) return;

    await api.post('/songs', { name, playlist_id }).then(() => {
        window.location.reload();
    })
}