'use client'

import { api } from '@/lib/axios';
import { MoreVertical } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {songProps} from '../types/songProps'

export function SongCard({ id, name }: songProps) {

    function deleteSong() {
        api.delete(`/song/${id}`)
    }

    return (
        <div className="border border-black rounded-lg p-6 max-w-[450px] flex justify-between items-center">
            <p className="font-medium text-xl">{name}</p>
            
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
    )
}