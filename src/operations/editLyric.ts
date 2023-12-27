import { api } from "@/lib/axios"

export async function editLyric(id: string, lyric: string) {
    await api.put(`/lyric/${id}`, { lyric })
}