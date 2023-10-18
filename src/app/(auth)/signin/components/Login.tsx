'use client'

import { useState } from 'react';
import { login } from '../../../../operations/login';
import Link from 'next/link';
import { ErrorText } from '@/components/ErrorText';
import { useRouter } from 'next/navigation';

export default function CreateUser() {

    const router = useRouter()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')


    function submit(e: any) {
        e.preventDefault()
        login(username, password).then(() => {
            router.push('/')
        }).catch((e) => {
            if(e.response.data.message.includes("Invalid username or password")){
                setError('email ou senha incorreto')
            } else {
                setError('tente novamente mais tarde')
            }
        })
    }

    return (
        <div className='border-black/50 border-[1px] max-w-lg m-auto rounded-lg'>
            <form onSubmit={submit}>
                <div className='my-7'>
                    <div className='flex flex-col max-w-full mx-10'>
                        <label className='font-medium text-lg my-5'>Username</label>
                        <input
                        type='text'
                        onChange={e => setUsername(e.target.value)} 
                        className='border-[1px] border-offWhite w-full p-3 rounded-lg'/>
                    </div>
                    <div className='flex flex-col max-w-full mx-10'>
                        <label className='font-medium text-lg my-5'>Senha</label>
                        <input
                        onChange={e => setPassword(e.target.value)} 
                        type='password' className='border-[1px] border-offWhite w-full p-3 rounded-lg'/>
                    </div>
                    <div className='flex items-center justify-center my-5'>
                        <button type='submit' className='text-white font-medium bg-darkBlue rounded-lg p-3 w-full mx-10'>
                            Entrar
                        </button>
                    </div>
                    <ErrorText error={error}/>
                </div>
            </form>
            <p className='flex justify-center items-center my-10'>Não tem uma conta?
                <Link href='/signup' className='text-darkBlue'> Cadastre-se</Link>
            </p>
        </div>
    );
}