import { cookies } from 'next/headers';
import { Header } from "@/components/Header"
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'

interface AppLayoutProps {
    children: ReactNode
}

export default function AppLayout({children}: AppLayoutProps) {
    const isAuthenticated = cookies().has('token')

    if (!isAuthenticated) {
        redirect('/signin')
    } 

    return (
        <div>
            <Header/>
            <div className='bg-[#141414] rounded-[10px] p-[40px]'>{children}</div>
        </div>
    )
}