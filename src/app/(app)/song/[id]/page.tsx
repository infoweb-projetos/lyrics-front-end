import { api } from "@/lib/axios";
import { songProps } from "@/types/songProps";
import Board from "../components/Board";

interface IdProps {
    params: {
        id: string
    }
}

export default async function Song({ params }: IdProps) {
    const response = await api.get(`/songs/${params.id}`)
    const song: songProps = response.data

    return (
        <div>
            <h1 className="text-3xl font-semibold">Música: {song.name}</h1>
            <Board lyrics={song.lyric}/>
        </div>
    )
}