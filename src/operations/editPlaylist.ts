import { api } from "@/lib/axios"

export async function editPlaylist(id: string, name: string, description: string){
    await api.put(`/playlists/${id}`,{ name, description }).then(() => {
        window.location.reload();
    })
}