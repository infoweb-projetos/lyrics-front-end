import logo from '../../../assets/logo.png'
import Image from 'next/image'
import Login from './components/Login'

export default function Signin() {

    return (
        <div>
            <div className='flex items-center justify-center gap-5'>
                <Image src={logo} alt='logo'/>
                <p className='font-semibold text-xl'>Lyrics Lab</p>
            </div>

            <p className='text-center font-semibold text-3xl my-10'>Entrar</p>
            <Login />

        </div>
    )
}
