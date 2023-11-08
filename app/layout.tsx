import ClientOnly from './components/ClientOnly'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modal/RegistrationModal'
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
        <ClientOnly>
          <RegisterModal/>
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
