'use client'

import { api } from '@/lib/axios';
import { MoreVertical } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface DropdownUDProps {
    id: string
}

export function DropdownUD({id}: DropdownUDProps) {

    function deleteSong() {
        api.delete(`/songs/${id}`)
    }

    function updateSong() {}

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <MoreVertical />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal className='m-w-[100px]'>
                <DropdownMenu.Content className="bg-slate-300" sideOffset={5}>
                    <DropdownMenu.Item className="p-2" onClick={updateSong}>
                        Editar
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className="p-2" onClick={deleteSong}>
                        Excluir
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}