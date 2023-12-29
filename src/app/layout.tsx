'use client'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="pt-br" className='dark'>
      <body className='m-10 bg-black text-white dark:bg-white dark:text-black'>
        {children}
      </body>
    </html>
  )
}