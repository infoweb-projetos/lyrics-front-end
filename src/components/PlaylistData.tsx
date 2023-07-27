'use client'
import Image from 'next/image';
import cardImage from '../assets/card.jpeg';
import { usePathname } from 'next/navigation'
import edit from '../assets/edit.svg'
import trashCan from '../assets/trashCan.svg'
import { api } from '@/lib/axios';
import { PlaylistcardProps } from './Playlistcards';
import { useEffect, useState } from 'react';

export function PlaylistData() {
  const [playlists, setPlaylists] = useState<PlaylistcardProps>([])
  const pathname = usePathname()
  const idPathname = pathname.slice(13)

  useEffect(() => {
    api.get('/playlists').then(response => {
        setPlaylists(response.data)
    })
}, [])


  return (
    <div className='flex items-center mt-20'>
      <Image src={cardImage} alt='' className='rounded-lg' width={300} height={300}/>
      <div className='ml-6'>
        <div className='flex items-center mb-1 gap-4'>
          <p className='text-4xl font-semibold'>Album boate</p>
          <Image src={edit} alt='' />
          <Image src={trashCan} alt='' />
        </div>
        <p className='mb-6'>15 músicas</p>
        <p>A descrição do que deveria ser a playlist</p>
      </div>
    </div>
  );
}