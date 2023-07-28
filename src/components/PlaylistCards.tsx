'use client'
import Image from "next/image";
import Link from "next/link";

export interface PlaylistcardProps{ 
    id?: string
    cardImage?: any
    name?: string
    description?: string
}


export function PlaylistCard({cardImage, name, description, id}: PlaylistcardProps){
    

    
    return(
        <>
            <Link className="max-h-[250px]" href={`verPlaylist/${id}`}>
                <div className="py-5 max-w-[250px]">
                    <Image src={cardImage} alt="card" width={250} height={250} className="rounded-[20px]"/>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className="font-medium text-2xl">{name}</p>
                            <span className='w-3'>{description}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}