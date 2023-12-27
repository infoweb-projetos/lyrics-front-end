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
            <Board songId={song.id} songName={song.name} lyrics={song.lyric} />
        </div>
    )
}