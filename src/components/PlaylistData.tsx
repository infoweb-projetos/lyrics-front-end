'use client'

import { api } from '@/lib/axios';
import { useEffect, useState } from 'react';
import Link from '../../node_modules/next/link';
import Image from 'next/image';
import edit from '../assets/edit.svg';
import cardImage from '../assets/card.jpeg';
import trashCan from '../assets/trashCan.svg';
import { playlistProps } from '@/types/playlistProps';

export function PlaylistData({ id }: playlistProps) {

  const [playlist, setPlaylist] = useState<playlistProps | null>(null);

  function removePlaylist(){
    api.delete(`/playlists/${id}`)
  }
  
  useEffect(() => {
    if (id !== '') {
      api.get(`/playlists/${id}`).then(response => {
        setPlaylist(response.data);
      });
    }
  }, [id]);

  if (!playlist) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='flex items-center mt-20'>
      <Image src={cardImage} alt='' className='rounded-lg' width={300} height={300} />
      <div className='ml-6'>
        <div className='flex items-center mb-1 gap-4'>
          <p className='text-4xl font-semibold'>{playlist.name}</p>
          <Image src={edit} alt='' />
          <Link href='/playlists'>
            <Image src={trashCan} alt='' onClick={removePlaylist}/>
          </Link>
        </div>
        <p className='mb-6'>{`${playlist.songs ? playlist.songs.length : 0} Músicas`}</p>
        <p>{playlist.description}</p>
      </div>
    </div>
  );
}