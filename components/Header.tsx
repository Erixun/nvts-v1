'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>NVTS</div>
      <nav
        style={{
          display: 'flex',
          gap: 20,
          marginLeft: 'auto',
          marginRight: 25,
        }}
      >
        {pageLinks.map((pageLink) => (
          <NavItem key={pageLink.slug} {...pageLink} />
        ))}
      </nav>
      <button
        style={{
          paddingInline: 20,
          paddingBlock: 10,
          borderRadius: 25,
          backgroundColor: '#156a13',
          fontSize: 14,
          border: 'none',
        }}
      >
        Contact
      </button>
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
