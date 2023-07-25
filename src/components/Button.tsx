'use client'

import Image from 'next/image';
import plus from '../assets/plus.svg';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { FormEvent, useState } from 'react';
import { api } from '@/lib/axios';

interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {

  
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  async function postData(event:FormEvent<HTMLFormElement>){
    const alertText = document.getElementById('alertText')

    event.preventDefault()

    if(!name) return 

    await api.post('/playlists',{
        name, description
    })
    alertText!.innerHTML = 'playlist criada com sucesso'
    setName('')
    setDescription('')
    }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className='flex items-center'>
          <Image src={plus} alt='plus' className='relative left-8' />
          <span className='bg-darkBlue p-3 pl-11 text-white rounded-lg'>{text}</span>
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Overlay className='fixed inset-0 bg-black bg-opacity-50' />
      <AlertDialog.Content className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-64 p-4 rounded-lg'>
        <AlertDialog.Title className='text-white'>Criar nova playlist</AlertDialog.Title>
        <form onSubmit={postData}>
          <input type='text' placeholder='nome da playlist' onChange={e => setName(e.target.value)}/>
          <input type='text' placeholder='nome da playlist' onChange={e => setDescription(e.target.value)}/>
          <button type='submit' className='bg-white'>criar playlist</button>
        </form>
        <p id='alertText' className='text-white'></p>
        <AlertDialog.Cancel>
        <button className='bg-darkBlue p-2 mt-4 text-white rounded-lg'>
          Close
        </button>
        </AlertDialog.Cancel>

      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
