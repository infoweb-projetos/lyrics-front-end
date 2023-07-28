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
    
    function removePlaylist(){
        api.delete(`/playlists/?id=${id}`)
    }
    
    return(
        <>
            <Link href={`verPlaylist/${id}`}>
                <div className="max-w-[250px] max-h-[350px] mt-10">
                    <Image src={cardImage} alt="card" width={250} height={250} className="rounded-xl"/>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className="font-medium text-2xl">{name}</p>
                            <span>{description}</span>
                        </div>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <MoreVertical />
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Portal className='m-w-[100px]'>
                                <DropdownMenu.Content className="bg-slate-300" sideOffset={5}>
                                    <DropdownMenu.Item className="p-2">
                                            <Link href='/editPlaylist'>Editar</Link>
                                    </DropdownMenu.Item>

                                    <DropdownMenu.Item className="p-2" onClick={removePlaylist}>
                                        Excluir
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                </div>
            </Link>
        </>
    )
}