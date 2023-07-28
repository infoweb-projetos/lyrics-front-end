import Image from 'next/image';
import cardImage from '../assets/card.jpeg';
import edit from '../assets/edit.svg';
import trashCan from '../assets/trashCan.svg';
import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';

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

  useEffect(() => {
    if (id !== '') {
      api.get(`/playlists/?id=${id}`).then(response => {
        console.log('Response data:', response.data);
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
          <Image src={edit} alt='' />
          <Image src={trashCan} alt='' />
        </div>
        <p className='mb-6'>{`${playlist.Songs.length} Músicas`}</p>
        <p>{playlist.playlist.description}</p>
      </div>
    </div>
  );
}
