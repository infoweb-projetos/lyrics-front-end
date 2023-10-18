import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Header(){
    return(
        <div className='flex items-center justify-between mb-10 text-white'>
            <Image src={logo} alt='logo' className="h-60"/>
            <div>
                <ul className='flex gap-10 font-semibold text-2xl'>
                    <Link href='/dashboard'>Inicio</Link>
                    <Link href='/songs'>Músicas</Link>
                    <Link href='/playlists'>Playlists</Link>
                    <div className='flex gap-3'>
                        <SearchIcon sx={{
                            fontSize: '30px',
                        }}/>
                        <input 
                            className='placeholder-white bg-transparent w-120'
                            placeholder='Pesquisar'/>
                    </div>
                </ul>
            </div>
            <AccountCircleIcon sx={{
                fontSize: '60px',
            }} />
        </div>
    )
}