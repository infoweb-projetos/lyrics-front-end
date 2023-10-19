import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className='m-10 bg-black text-white'>
        {children}
      </body>
    </html>
  )
}