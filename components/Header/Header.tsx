'use client';
import styles from './Header.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { DialogContactUs } from '../DialogContactUs';
import { NavDrawer } from '../NavDrawer';
import { Button } from '@radix-ui/themes';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window?.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const [hasNavDrawer, setHasNavDrawer] = useState(false);
  const toggleDrawer = (e: any) => {
    e.nativeEvent.stopImmediatePropagation();
    setHasNavDrawer(!hasNavDrawer);
  };

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <header className={styles.header} style={{ position: 'relative' }}>
      <div
        style={{
          backgroundColor: isDarkMode ? 'var(--bgc-primary)' : 'inherit',
          borderRadius: 3,
          display: 'flex',
          flex: 1,
          gap: 20,
        }}
      >
        <Image
          src="/logo_wide.svg"
          priority
          width={280}
          height={80}
          alt={'nvts logo'}
        />
      </div>
      <section
        style={{
          display: 'flex',
          flex: 3,
          marginLeft: 'auto',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 25,
          paddingInlineStart: 30,
          paddingInlineEnd: 10,
          position: 'relative',
        }}
      >
        <Button variant="ghost" size="4" onClick={toggleColorMode}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
        <DialogContactUs />

        <Button variant="ghost" size="4" onClick={toggleDrawer}>
          {<HamburgerMenuIcon width={20} height={20} />}
        </Button>
        {hasNavDrawer && <NavDrawer />}
      </section>
    </header>
  );
}

export type PageLink = {
  name: string;
  slug: string | null;
  description: string;
};

export const pageLinks: PageLink[] = [
  {
    name: 'Home',
    slug: null,
    description: 'The home page',
  },
  {
    name: 'Foo',
    slug: 'foo',
    description: 'The foo page',
  },
];
