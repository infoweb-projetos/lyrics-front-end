import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'
import { Header } from "@/components/Header"
import { ReactNode } from 'react'

interface AppLayoutProps {
    children: ReactNode
}

export default async function AppLayout({children}: AppLayoutProps) {
    const isAuthenticated = await cookies().has('token')

    console.log(isAuthenticated)

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