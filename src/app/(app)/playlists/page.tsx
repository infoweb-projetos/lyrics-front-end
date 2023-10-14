import {api} from '../../../lib/axios';
import cardImage from '../../../assets/card.jpeg';
import { playlistProps } from "@/types/playlistProps";
import { PlaylistCard } from '../../../components/PlaylistCard';
import { PlaylistCreate } from "@/app/(app)/playlists/components/PlaylistCreate";

export default async function Playlists(){
    const ResponsePlaylists = await api.get('/playlists')
    const playlists: playlistProps[] = ResponsePlaylists.data

    return(
        <div className="flex flex-col h-full">
            <PlaylistCreate/>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {playlists.map((card) => {
                    return(
                        <div key={card.id}>
                            <PlaylistCard id={card.id} cardImage={cardImage} description={card.description} name={card.name}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}