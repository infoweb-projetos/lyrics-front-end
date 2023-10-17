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

    async function submit(e:any) {
        e.preventDefault()
        await createUser(username, name, email, password).catch((e) => {
            if(!username || !name || !email || !password) setError('Todos os campos devem estar preenchidos')
            else if(e.response.data.message.includes('body/email must match format "email')) setError('Email inválido')
            else if(e.response.data.message.includes('Invalid `prisma.user.create()`')) setError('Email ou username indisponível')
        })
    }

    return (
        <div className='border-black/50 border-[1px] max-w-lg m-auto rounded-lg'>
            <form onSubmit={submit}>
                <div className='my-10'>
                    <div className='flex flex-col max-w-full mx-10'>
                        <label className='font-medium text-lg my-5'>Username</label>
                        <input
                        type='text'
                        onChange={e => setUsername(e.target.value)} 
                        className='border-[1px] border-offWhite w-full p-3 rounded-lg'/>
                    </div>
                    <div className='flex flex-col max-w-full mx-10'>
                        <label className='font-medium text-lg my-5'>Nome Completo</label>
                        <input
                        type='text'
                        onChange={e => setName(e.target.value)} 
                        className='border-[1px] border-offWhite w-full p-3 rounded-lg'/>
                    </div>
                    <div className='flex flex-col max-w-full mx-10'>
                        <label className='font-medium text-lg my-5'>E-mail</label>
                        <input
                        onChange={e => setEmail(e.target.value)} 
                        type='text' className='border-[1px] border-offWhite w-full p-3 rounded-lg'/>
                    </div>
                    <div className='flex flex-col max-w-full mx-10'>
                        <label className='font-medium text-lg my-5'>Senha</label>
                        <input
                        onChange={e => setPassword(e.target.value)} 
                        type='password' className='border-[1px] border-offWhite w-full p-3 rounded-lg'/>
                    </div>
                    <div className='flex items-center justify-center my-5'>
                        <button type='submit' className='text-white font-medium bg-darkBlue rounded-lg p-3 w-full mx-10'>
                            <p>Cadastrar</p>
                        </button>
                    </div>
                    <ErrorText error={error} />
                    <p className='flex justify-center items-center'>Já tem uma conta? 
                        <Link href='/signin' className='text-darkBlue'>Acesse sua conta</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}