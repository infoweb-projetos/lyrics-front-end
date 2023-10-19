'use client'

import { useState } from 'react';
import { createUser } from '../../../../operations/createUser';
import { ErrorText } from '@/components/ErrorText';
import Link from 'next/link';

export default function CreateUser() {

    const [username,setUsername] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')

    function submit(e: any) {
        e.preventDefault()
        createUser(username, name, email, password).catch((e) => {
            if(!username || !name || !email || !password) setError('Todos os campos devem estar preenchidos')
            else if(e.response.data.message.includes('body/email must match format "email')) setError('Email inválido')
            else if(e.response.data.message.includes('Invalid `prisma.user.create()`')) setError('Email ou username já utilizados')
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
                        <label className='font-medium text-lg my-5'>Nome Completo</label>
                        <input
                        placeholder='Nome Completo'
                        type='text'
                        onChange={e => setName(e.target.value)} 
                        className='border-[1px] border-offWhite w-full p-3 rounded-lg text-black'/>
                    </div>
                    <div className='flex flex-col max-w-full mx-10'>
                        <label className='font-medium text-lg my-5'>E-mail</label>
                        <input
                        placeholder='E-mail'
                        onChange={e => setEmail(e.target.value)} 
                        type='text' className='border-[1px] border-offWhite w-full p-3 rounded-lg text-black'/>
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
                            <p>Cadastrar</p>
                        </button>
                    </div>
                    <ErrorText error={error} />
                    <p className='flex justify-center items-center mt-5'>Já tem uma conta? 
                        <Link href='/signin' className='ml-1 text-sky-300'>Acesse sua conta</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}