import type { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Aurorawave Labs',
  description: 'Aurorawave Labs is a software development company that specializes in building web and mobile applications.',
  keywords: ['software development', 'web development', 'mobile development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <header>
            <Navbar />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </>
  )
}