'use client'

import Image from 'next/image';
import plus from '../assets/plus.svg';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { FormEvent, useState } from 'react';
import { api } from '@/lib/axios';
import { X } from 'lucide-react'

export function PlaylistCreate() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  async function postData(event: FormEvent<HTMLFormElement>) {
    const alertText = document.getElementById('alertText')

    event.preventDefault()

    if (!name) return

    await api.post('/playlists', {
      name, description
    }).then(() => {
      window.location.reload();
    })
    alertText!.innerHTML = 'Playlist criada com sucesso'
    setName('')
    setDescription('')
  }

  return (
    <div className="flex justify-between mt-20 border-b-2 border-gray-500 pb-3">
      <span className="text-4xl font-semibold">Playlist</span>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button className='flex items-center'>
            <Image src={plus} alt='plus' className='relative left-8' />
            <span className='bg-darkBlue p-3 pl-11 text-white rounded-lg'>Adicionar playlist</span>
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Overlay className='fixed inset-0 bg-black bg-opacity-60' />
        <AlertDialog.Content className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-80 p-4 rounded-lg'>
          <AlertDialog.Title className='text-black font-medium text-lg text-center mb-3'>
            Criar nova playlist
            <AlertDialog.Cancel className='float-right'>
              <X className='w-6 h-6' />
            </AlertDialog.Cancel>
          </AlertDialog.Title>

          <form onSubmit={postData} className='w-full h-full'>
            <div>
              <label>Nome da playlist</label>
              <input type='text' onChange={e => setName(e.target.value)} className='bg-black/50 p-2 w-full mb-7 rounded-md' />
            </div>
            <div>
              <label>Descrição</label>
              <input type='text' onChange={e => setDescription(e.target.value)} className='bg-black/50 p-2 w-full mb-7 rounded-md' />
            </div>
            <button type='submit' className='text-white bg-darkBlue p-2 w-full rounded-md text-center'>Salvar</button>
            <p id='alertText' ></p>
          </form>

        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
}
