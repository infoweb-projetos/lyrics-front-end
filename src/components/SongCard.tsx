import { api } from '@/lib/axios';
import { DropdownUD } from './DropdownUD';
import {songProps} from '../types/songProps'

export async function SongCard({id, name, playlist_id, cardWidth}: songProps) {

    const response = await api.get(`/playlists/${playlist_id}`)
    const playlistName = response.data.playlist.name

    return (
        <>
            <div 
                className= {!cardWidth ? "border border-black rounded-lg p-6 flex justify-between items-center" : "border border-black rounded-lg max-w-[450px] p-6 flex justify-between items-center"} 
            > 
                <p className="font-medium text-xl">{name}</p>
                
                <div>
                    <p>{playlistName}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <p className="p-2">Tom: cm7</p>
                    <DropdownUD id={id}/>
                </div>
            </div>
        </>
    )
}