'use client'
import { api } from '@/lib/axios';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MoreVertical } from "lucide-react";
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
            <Link href={`verPlaylist/${id}`}>
                <div className="py-5">
                    <Image src={cardImage} alt="card" width={250} height={250} className="rounded-xl"/>
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