import { api } from '@/lib/axios';

export async function submitData(name: string, description: string) {
    if (!name) return;

    await api.post('/playlists', { name, description }).then(() => {
        window.location.reload();
    })
}