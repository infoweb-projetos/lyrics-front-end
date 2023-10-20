import { api } from '@/lib/axios';
import { DropdownUD } from './DropdownUD';
import {songProps} from '../types/songProps'

export async function SongCard({id, name, playlist_id, cardWidth}: songProps) {
    if(cardWidth) {
        return(
                <div className="bg-gradient-to-b from-zinc-700/70 to-zinc-700/20 rounded-[10px] max-w-[450px] p-6 flex justify-between items-center"> 
                    <p className="font-medium text-xl max-w-[200px] truncate">{name}</p>
                    <div className='flex justify-center items-center'>
                        <p className="p-2">Tom: cm7</p>
                        <DropdownUD id={id}/>
                    </div>
                </div>
        )
    } else if(!playlist_id){
        return(
            <div className="bg-gradient-to-b from-zinc-700/70 to-zinc-700/20 rounded-[10px] p-6 flex justify-between items-center"> 
                <p className="font-medium text-xl max-w-[200px] truncate">{name}</p>
                <div className='flex justify-center items-center'>
                    <p className="p-2">Tom: cm7</p>
                    <DropdownUD id={id}/>
                </div>
            </div>
    )
    } else {
        const response = await api.get(`/playlists/${playlist_id}`)
        const playlistName = response.data.playlist.name
    
        return (
                <div className="bg-gradient-to-b from-zinc-700/70 to-zinc-700/20 rounded-[10px] p-6 flex justify-between items-center"> 
                    <div className='w-[250px]' >
                        <p className="font-medium text-xl truncate">{name}</p>       
                    </div>         
                    <div>
                        <p>{playlistName}</p>
                    </div>  
                    <div className='flex justify-center items-center'>
                        <p className="p-2">Tom: cm7</p>
                        <DropdownUD id={id}/>
                    </div>
                </div>
        )
    }
}