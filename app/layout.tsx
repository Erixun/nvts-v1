import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css';
import { ButtonScrollUp, Footer, Header } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nordic Vertitech Solutions',
  description: 'Website for Nordic Vertitech Solutions AB',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="indigo" radius="full">
          <div className="container">
            <Header />
            <div className="content" style={{ position: 'relative' }}>
              {children}
            </div>
            <ButtonScrollUp />
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
