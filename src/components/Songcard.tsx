import { MoreVertical } from 'lucide-react';
import Image from 'next/image';

export interface SongcardProps{ 
    id?: string
    name?: string
    tom?: string
}

export function Songcard({name, tom}: SongcardProps){
    return(
        <>
            <div className="border border-black rounded-lg p-6 max-w-[450px] flex justify-between items-center">
                <p className="font-medium text-xl">Boate Azul</p>
                <div className='flex justify-center items-center'>
                    <p className="p-2">Tom: cm7</p>
                    <MoreVertical />
                </div>
            </div>
        </>
        
    )
}

//https://stackoverflow.com/questions/42374873/limit-items-in-a-map-loop