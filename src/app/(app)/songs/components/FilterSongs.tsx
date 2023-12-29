'use client'

import {api} from '@/lib/axios'
import { SongCard } from "@/components/SongCard";
import { songProps } from "@/types/songProps";
import { useEffect,useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { DropdownUD } from '@/components/DropdownUD';
import { playlistProps } from '@/types/playlistProps';

export default function FilterSongs() {
    const [songs, setSongs] = useState<songProps[]>([]);
    const [playlists, setPlaylists] = useState<playlistProps[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        api.get('/songs').then(response => {
            setSongs(response.data);
        });
        api.get('/playlists').then(response => {
            setPlaylists(response.data);
        });
    }, []);

    return (
        <>
            <div className='flex gap-3 items-center'>
                <a href='/searchSongs'>
                    <SearchIcon sx={{ fontSize: '30px' }} />
                </a>
                <input
                    onChange={e => setSearch(e.target.value)}
                    className='placeholder-white dark:placeholder-black bg-transparent w-[150px] px-2 text-sm'
                    placeholder='Pesquisar Música'
                />
            </div>
            <div className="my-8 grid grid-cols-1 gap-3">
                {songs.map((song) => {
                    const matchingPlaylist = playlists.find((playlist) => playlist.id === song.playlist_id);

                    if (song && matchingPlaylist && song.name.toLowerCase().startsWith(search.toLowerCase())) {
                        return (
                            <div key={song.id} className="bg-gradient-to-b from-zinc-700/70 to-zinc-700/20 rounded-[10px] p-6 flex justify-between items-center dark:bg-gradient-to-b dark:from-white dark:to-white dark:border border-black">
                                <Link href={`song/${song.id}`}>
                                    <div className='w-[250px]'>
                                        <p className="font-medium text-xl truncate">{song.name}</p>
                                    </div>
                                </Link>
                                <div>
                                    <p>{matchingPlaylist.name}</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className="p-2">Tom: cm7</p>
                                    <DropdownUD id={song.id} />
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </>
    );
}
