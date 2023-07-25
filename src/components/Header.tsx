import logo from '../assets/logo.svg'
import profile from '../assets/profile.svg'
import search from '../assets/search.svg'

import Image from 'next/image'
export function Header(){
    return(
        <div className='flex items-center justify-between mb-10'>
            <Image src={logo} alt='logo'/>
            <div className=''>
                <ul className='flex gap-10 font-semibold text-2xl'>
                    <a href=''>Inicio</a>
                    <a href=''>Músicas</a>
                    <a href=''>Playlsts</a>
                    <div className='flex gap-3'>
                        <Image src={search} alt='Pesquisar'/>
                        <input 
                            className='w-40 placeholder-black'
                            placeholder='Pesquisar'/>
                    </div>
                </ul>
            </div>
            <Image src={profile} alt='profile'/>
        </div>
    )
}