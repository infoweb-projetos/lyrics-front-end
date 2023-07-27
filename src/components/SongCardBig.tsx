'use client'

import { MoreVertical } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { api } from '@/lib/axios';
import { useEffect, useState } from 'react';

interface SongcardBigProps {
    id: string
    name: string
    playlist_id: string
}

export function SongcardBig({ id, name, playlist_id }: SongcardBigProps) {
    const [playlistName, setPlaylistName] = useState('teste')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/playlists/?id=${playlist_id}`).then(response => {
            setPlaylistName(response.data.playlist.name);
            setLoading(false);
        })
    }, [])

    function deleteSong() {
        api.delete(`/songs/?id=${id}`)
    }

    return (
        <>
            {loading ? (<p>Carregando...</p>) : (
                <div className="border border-black rounded-lg p-6 flex justify-between items-center">
                    <a href="">
                        <p className="font-medium text-xl">{name}</p>
                    </a>
                    <div>
                        <p>{playlistName}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className="p-2">Tom: cm7</p>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <MoreVertical />
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Portal className='m-w-[100px]'>
                                <DropdownMenu.Content className="bg-slate-300" sideOffset={5}>
                                    <DropdownMenu.Item className="p-2">
                                        Editar
                                    </DropdownMenu.Item>

                                    <DropdownMenu.Item className="p-2" onClick={deleteSong}>
                                        Excluir
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                </div>
            )}
        </>
    )
}