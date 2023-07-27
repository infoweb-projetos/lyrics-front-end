import { MoreVertical } from 'lucide-react';

export interface SongcardProps{ 
    id?: string
    name?: string
}

export function Songcard({name}: SongcardProps){
    return(
        <>
            <div className="border border-black rounded-lg p-6 max-w-[450px] flex justify-between items-center">
                <p className="font-medium text-xl">{name}</p>
                <div className='flex justify-center items-center'>
                    <p className="p-2">Tom: cm7</p>
                    <MoreVertical />
                </div>
            </div>
        </>
        
    )
}
