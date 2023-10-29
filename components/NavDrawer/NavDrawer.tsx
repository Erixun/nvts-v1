'use client';
import { Cross2Icon } from '@radix-ui/react-icons';
import AnimatedLink from '../AnimatedLink/AnimatedLink';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import styles from './NavDrawer.module.css';

export const NavItems = [
  {
    href: '/',
    label: 'Välkommen',
  },
  {
    href: '/about',
    label: 'Om oss',
  },
  {
    href: '/services',
    label: 'Tjänster',
  },
  {
    href: '/contact',
    label: 'Kontakt',
  },
];

export function NavDrawer({ onClose: closeDrawer }: { onClose: () => void }) {
  const pathname = usePathname();

  return (
    <nav
      onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
      className={styles.NavDrawer}
    >
      <div className="NavDrawerHeader">
        <h2>Sidor</h2>
        <button className="IconButton" aria-label="Close" onClick={closeDrawer}>
          <Cross2Icon />
        </button>
      </div>
      <ul
        className={styles.NavDrawerList}
        style={{ listStyle: 'none', paddingLeft: 15 }}
      >
        {NavItems.map((item) => (
          <li
            className="NavDrawerItem"
            key={item.href}
            style={{ position: 'relative' }}
          >
            {pathname === item.href && (
              <span style={{ position: 'absolute', left: -15 }}>&gt;</span>
            )}
            <AnimatedLink href={item.href}>{item.label}</AnimatedLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
