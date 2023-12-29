'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'
import logoDark from '../assets/logoDark.png'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SwitchPallete from './SwitchPallete';
import { useState } from 'react';

export function Header(){

    const [theme,setTheme] = useState(true)

    function handle(){
        setTheme(!theme)
    }

    return(
        <div className='flex items-center justify-between mb-10'>
            {theme === false ? <Image src={logo} alt='logo'/> : <Image src={logoDark} alt='logo'/>}
            <div>
                <ul className='flex gap-10 font-semibold text-2xl'>
                    <Link href='/dashboard'>Inicio</Link>
                    <Link href='/songs'>Músicas</Link>
                    <Link href='/playlists'>Playlists</Link>
                </ul>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div onClick={handle}>
                    <SwitchPallete/>
                </div>
                <AccountCircleIcon sx={{
                    fontSize: '65px',
                }} />
            </div>

        </div>
    )
}