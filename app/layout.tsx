import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import { ButtonScrollUp, Footer, Header } from '@/components';
import '@radix-ui/themes/styles.css';
import './globals.css';

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
      <body className={inter.className} id="body">
        <Theme accentColor="indigo" radius="full">
          <div className="container">
            <Header />
            <div className="content" style={{ position: 'relative', flex: 1 }}>
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
