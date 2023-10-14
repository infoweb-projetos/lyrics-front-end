import { api } from '@/lib/axios';
import Image from 'next/image';
import cardImage from '../../../assets/card.jpeg';
import { playlistProps } from '@/types/playlistProps';
import { PlaylistEdit } from './PlaylistEdit';
import { PlaylistDelete } from './PlaylistDelete';

export async function PlaylistView({ id }: playlistProps) {

  const ResponsePlaylist = await api.get(`/playlists/${id}`)
  const playlist: playlistProps = ResponsePlaylist.data

  return (
    <div className='flex items-center mt-20'>
            <Image src={cardImage} alt='' className='rounded-lg' width={300} height={300} />
            <div className='ml-6'>
                <div className='flex items-center mb-1 gap-4'>
                    <p className='text-4xl font-semibold'>{playlist.name}</p>
                    <PlaylistEdit />
                    <PlaylistDelete />
                </div>
                <p className='mb-6'>{`${playlist.songs ? playlist.songs.length : 0} Músicas`}</p>
                <p>{playlist.description}</p>
            </div>
        </div>
  )
}