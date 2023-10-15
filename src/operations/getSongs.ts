import { api } from "@/lib/axios";
import { songProps } from "@/types/songProps";

export async function getSongs(){
    const response = await api.get('/songs')
    const songs: songProps[] = response.data

    return songs;
}