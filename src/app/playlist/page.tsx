import { Button } from "@/components/Button";
import { PlaylistCard } from "@/components/PlaylistCards";
import cardImage from '../../assets/card.jpeg'
import {api} from '../../lib/axios'
import { playlistCardProps } from "@/types/playlistProps";

export default async function playlist(){

    const response = await api.get('/playlists')
    const data: playlistCardProps[] = response.data


    return(
        <div className="flex flex-col h-full">
            <Button add='Adicionar playlist' text='Playlist'/>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {data.map((card) => {
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