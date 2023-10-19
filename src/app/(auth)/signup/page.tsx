import logo from '../../../assets/logo.png'
import Image from 'next/image'
import CreateUser from './components/CreateUser'

export default function Signup() {
    return (
        <div>
            <div className='flex items-center justify-center gap-5'>
                <Image src={logo} alt='logo'/>
                <p className='font-semibold text-xl'>Lyrics Lab</p>
            </div>

            <p className='text-center font-semibold text-3xl my-10'>Cadastre-se</p>
            <CreateUser />
        </div>
    )
}