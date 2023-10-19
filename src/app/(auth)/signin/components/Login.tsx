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
                setError('Email ou senha incorreto')
            } else {
                setError('Tente novamente mais tarde')
            }
        })
        setTimeout(() => {
            setError('')
        }, 5000)
    }

    return (
        <div className='border-white/40 border-2 max-w-lg m-auto rounded-lg'>
            <form onSubmit={submit}>
                <div className='my-7'>
                    <div className='flex flex-col max-w-full mx-10'>
                        <label className='font-medium text-lg my-5'>Username</label>
                        <input
                        placeholder='Username'
                        type='text'
                        onChange={e => setUsername(e.target.value)} 
                        className='border-[1px] border-offWhite w-full p-3 rounded-lg text-black'/>
                    </div>
                    <div className='flex flex-col max-w-full mx-10'>
                        <label className='font-medium text-lg my-5'>Senha</label>
                        <input
                        placeholder='Senha'
                        onChange={e => setPassword(e.target.value)} 
                        type='password' className='border-[1px] border-offWhite w-full p-3 rounded-lg text-black'/>
                    </div>
                    <div className='flex items-center justify-center my-5'>
                        <button type='submit' className='text-black font-medium bg-sky-300 rounded-lg p-3 w-full mx-10'>
                            Entrar
                        </button>
                    </div>
                    <ErrorText error={error}/>
                    <p className='flex justify-center items-center mt-5'>Não tem uma conta?
                        <Link href='/signup' className='ml-1 text-sky-300'>Cadastre-se</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}