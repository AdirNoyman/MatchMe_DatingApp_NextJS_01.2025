import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import TopNavBar from '@/components/navbar/TopNavBar';

export const metadata: Metadata = {
  title: 'MatchMe',
  description: 'All rights reserved',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNavBar />
          <main className='container mx-auto'> {children}</main>
         
        </Providers>
      </body>
    </html>
  );
}
