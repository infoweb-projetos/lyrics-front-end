import Link from 'next/link'
import logo from '../../../assets/logo.svg'
import Image from 'next/image'
import CreateUser from './components/CreateUser'

export default function SignUp() {
    return (
        <div>
            <div className='flex items-center justify-center gap-5'>
                <Image src={logo} alt='logo'/>
                <p className='font-semibold text-xl'>Lyrics Lab</p>
            </div>

            <p className='text-center font-semibold text-3xl my-10'>Cadastrar</p>
            <CreateUser />
            
        </div>
    )
}