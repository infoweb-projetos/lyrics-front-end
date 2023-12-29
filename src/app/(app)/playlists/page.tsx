import cardImage from '../../../assets/card.png';
import PlaylistFormDialog from './components/PlaylistFormDialog';
import { PlaylistCard } from '../../../components/PlaylistCard';
import { getPlaylists } from '@/operations/getPlaylists';

export default async function Playlists(){
    
    const playlists = await getPlaylists();

    return(
        <div className="flex flex-col h-full">
            <div className="flex justify-between pb-3
            dark:border-b-2 dark:border-gray-500">
                <span className="text-3xl font-semibold">Playlist</span>
                <PlaylistFormDialog />
            </div>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2 my-8" >
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