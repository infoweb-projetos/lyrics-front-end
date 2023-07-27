import { Button } from "@/components/Button";
import { Playlistcard } from "@/components/Playlistcards";
import cardImage from '../../assets/card.jpeg'
import {api} from '../../lib/axios'
import {PlaylistcardProps} from '../../components/Playlistcards'

export default async function playlist(){

    const response = await api.get('/playlists')
    const data: PlaylistcardProps[] = response.data


    return(
        <div className="flex flex-col h-full">
            <Button add='Adicionar playlist' text='Playlist'/>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {data.map((card) => {
                    return(
                        <Playlistcard key={card.id} id={card.id} cardImage={cardImage} description={card.description} name={card.name}/>
                    )
                })}
            </div>
        </div>

    )
}