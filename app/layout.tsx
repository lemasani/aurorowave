import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Aurorawave Labs',
  description: 'Aurorawave Labs is a software development company that specializes in building web and mobile applications.',
  keywords: ['software development', 'web development', 'mobile development'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
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
  );
}