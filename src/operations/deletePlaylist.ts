import { api } from '@/lib/axios';

export async function deletePlaylist(id: string) {
    await api.delete(`/playlists/${id}`).then(() => {
    })
}