import { api } from '@/lib/axios';

export async function deleteSong(id: string) {
    await api.delete(`/songs/${id}`).then(() => {
        window.location.reload();
    })
}