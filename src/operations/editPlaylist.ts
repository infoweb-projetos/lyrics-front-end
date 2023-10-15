import { api } from "@/lib/axios"

export async function editPlaylist(id: string, name: string, description: string){
    window.alert(`Função edit id: ${id}`)
    // api.post(`/playlists/${id}`,{
    //     name,description
    // })
}