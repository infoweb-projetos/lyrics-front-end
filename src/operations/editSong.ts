import { api } from "@/lib/axios"

export async function editSong(id: string, name: string, playlist_id: string){
    await api.put(`/songs/${id}`,{ name, playlist_id }).then(() => {
        window.location.reload();
    })
}