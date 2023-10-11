'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/logo_wide.svg" width={320} height={80} alt={'nvts logo'} />
      <section style={{ display: 'flex', marginLeft: 'auto' }}>
        <nav
          style={{
            display: 'flex',
            gap: 20,
            marginRight: 25,
          }}
        >
          {pageLinks.map((pageLink) => (
            <NavItem key={pageLink.slug} {...pageLink} />
          ))}
        </nav>
        <button className={styles.button}>Contact us</button>
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
