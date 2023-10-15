import { api } from "@/lib/axios";
import { playlistProps } from "@/types/playlistProps"

export async function getPlaylists(){
    const response = await api.get('/playlists')
    const playlists: playlistProps[] = response.data

    return playlists;
}