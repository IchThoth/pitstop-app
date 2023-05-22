import Navbar from './components/Navbar/Navbar'
import './globals.css'
import {Nunito} from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: ' Pitstop',
  description: 'App for creating rental spots and properties for students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
