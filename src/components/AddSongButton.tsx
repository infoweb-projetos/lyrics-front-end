'use client'

import Image from 'next/image';
import plus from '../assets/plus.svg';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { FormEvent, useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import { X } from 'lucide-react'
import React from 'react';

type PlaylistcardProps = {
    id: string
    name: string
}[]

export function AddSongButton() {
    const [name, setName] = useState('');
    const [playlist_id, setIdPlaylist] = useState<string>('');
    const [playlists, setPlaylists] = useState<PlaylistcardProps>([]);

    useEffect(() => {
        api.get('/playlists').then(response => {
            setPlaylists(response.data)
        })
    }, [])

    async function postData(event: FormEvent<HTMLFormElement>) {
        const alertText = document.getElementById('alertText')

        event.preventDefault()

        if (!name) return;
        if (!playlist_id) return;

        await api.post('/songs', { name, playlist_id })

        alertText!.innerHTML = 'Música criada com sucesso'
        setName('');
        setIdPlaylist('');
    }

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <button className='flex items-center'>
                    <Image src={plus} alt='plus' className='relative left-8' />
                    <span className='bg-darkBlue p-3 pl-11 text-white rounded-lg'>Adicionar música</span>
                </button>
            </AlertDialog.Trigger>
            <AlertDialog.Overlay className='fixed inset-0 bg-black bg-opacity-60' />
            <AlertDialog.Content className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-80 p-4 rounded-lg'>
                <AlertDialog.Title className='text-black font-medium text-lg text-center mb-3'>
                    Criar nova música
                    <AlertDialog.Cancel className='float-right'>
                        <X className='w-6 h-6' />
                    </AlertDialog.Cancel>
                </AlertDialog.Title>

                <form onSubmit={postData} className='w-full h-full '>
                    <div>
                        <label>Nome da música</label>
                        <input type='text' onChange={e => setName(e.target.value)} className='bg-black/50 p-2 w-full mb-7 rounded-md' />
                    </div>
                    <div>
                        <label>Selecione uma playlist</label>
                        <br />
                        <select className='border-2 w-full my-2' onChange={(e) => setIdPlaylist(e.target.value)} value={playlist_id}>
                            <option disabled value="">Playlist</option>
                            {playlists.map((playlist) => {
                                return (
                                    <option key={playlist.id} value={playlist.id}>
                                        {playlist.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <button type='submit' className='text-white bg-darkBlue p-2 w-full rounded-md text-center'>Salvar</button>
                    <p id='alertText' ></p>
                </form>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}