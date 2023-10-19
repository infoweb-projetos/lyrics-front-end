import { api } from "@/lib/axios";
import Image from 'next/image';
import cardImage from '../../../../assets/card.png';
import { playlistProps } from "@/types/playlistProps";
import { songProps } from "@/types/songProps";
import { SongCard } from "@/components/SongCard";
import { PlaylistEdit } from "../components/PlaylistEdit";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteConfirmation from "@/components/DeleteConfirmation";

interface IdProps {
  params: {
    id: string
  }
}

export default async function Playlist({params}: IdProps) {
  const ResponsePlaylist = await api.get(`/playlists/${params.id}`)
  const playlist: playlistProps = ResponsePlaylist.data.playlist
  const songs: songProps[] = ResponsePlaylist.data.Songs

  return (
    <div >
        <div className='flex items-center'>
            <Image src={cardImage} alt='' className='rounded-lg' width={300} height={300} />
            <div className='ml-6'>
                <div className='flex items-center justify-between mb-1 gap-16'>
                    <p className='text-4xl font-semibold max-w-[450px] break-words'>{playlist.name}</p>
                    <div className="flex items-center justify-center">
                      <PlaylistEdit playlist={playlist}/>
                      <DeleteConfirmation id={playlist.id} direction='playlist'>
                          <IconButton aria-label="delete">
                              <DeleteIcon sx={{color: 'white'}}/>
                          </IconButton>
                      </DeleteConfirmation>
                    </div>
                </div>
                <p className='mb-6'>{`${songs.length} Músicas`}</p>
                <p>{playlist.description}</p>
            </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 gap-3">
            {songs.map((song) => {
                return (
                  <SongCard key={song.id} id={song.id} name={song.name} playlist_id={song.playlist_id} cardWidth={false}/>
                )
            })}
        </div>
    </div>
  );
}