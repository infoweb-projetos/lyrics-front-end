'use client'
import Image from 'next/image';
import cardImage from '../assets/card.jpeg';
import edit from '../assets/edit.svg';
import trashCan from '../assets/trashCan.svg';
import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import { useRouter } from '../../node_modules/next/router';
import Link from '../../node_modules/next/link';

type PlaylistcardProps = {
  playlist: {
    id: string;
    name: string;
    description?: string;
  },
  Songs: [];
};

type PlaylistDataProps = {
  id: string;
};

export function PlaylistData({ id }: PlaylistDataProps) {

  const [playlist, setPlaylist] = useState<PlaylistcardProps | null>(null);

  function removePlaylist(){
    api.delete(`/playlists/?id=${id}`)
}
  useEffect(() => {
    if (id !== '') {
      api.get(`/playlists/?id=${id}`).then(response => {
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
          <p className='text-4xl font-semibold'>{playlist.playlist.name}</p>
          <Image src={edit} alt=''/>
          <Link href='/playlist'>
            <Image src={trashCan} alt='' onClick={removePlaylist}/>
          </Link>
        </div>
        <p className='mb-6'>{`${playlist.Songs.length} Músicas`}</p>
        <p>{playlist.playlist.description}</p>
      </div>
    </div>
  );
}
