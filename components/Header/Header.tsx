'use client';
import { useSelectedLayoutSegment } from 'next/navigation';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { DialogContactUs } from '../DialogContactUs';
import { NavDrawer } from '../NavDrawer';

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

  const toggleDrawer = (e: any) => {
    e.nativeEvent.stopImmediatePropagation();
    document.body.classList.toggle('drawer-open');
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
          gap: 20,
          paddingInlineStart: 30,
          position: 'relative',
        }}
      >
        <button
          onClick={toggleColorMode}
          style={{
            display: 'flex',
            cursor: 'pointer',
            width: 48,
            aspectRatio: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <DialogContactUs />
        <button
          style={{
            display: 'flex',
            cursor: 'pointer',
            width: 48,
            aspectRatio: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={toggleDrawer}
        >
          {<HamburgerMenuIcon width={20} height={20} />}
        </button>
        <NavDrawer />
      </section>
    </header>
  );
}

const NavItem = ({ name, slug, description }: PageLink) => {
  const segment = useSelectedLayoutSegment();
  const isActive = segment === slug;
  console.log({ segment, slug, isActive });
  return (
    <Link
      href={`/${slug ?? ''}`}
      // style={isActive ? { textDecoration: 'underline', color: 'red' } : {}}
    >
      {name}
    </Link>
  );
};

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
