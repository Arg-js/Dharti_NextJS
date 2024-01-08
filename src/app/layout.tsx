import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin-ext'] });

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
      <body className={`${plus_jakarta_sans.className}`}>{children}</body>
    </html>
  );
}
