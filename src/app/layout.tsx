import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { Toaster } from '@/components/ui/toaster';

// todo: latin-ext
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] });

// todo: make dynamic metadata
export const metadata: Metadata = {
  title: 'Dharti -Khet se jeb tak',
  description: 'Dharti',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${plus_jakarta_sans.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
