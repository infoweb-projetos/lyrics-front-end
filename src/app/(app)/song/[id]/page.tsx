import { api } from "@/lib/axios";
import { songProps } from "@/types/songProps";
import Board from "../components/Board";
import ControlledSwitches from "../components/Switch";

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
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold">{song.name}</h1>
                <div className="flex items-center">
                    <p>Modo de Edição</p>
                    <ControlledSwitches />
                </div>
            </div>
            <Board lyrics={song.lyric} />
        </div>
    )
}