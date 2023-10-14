'use client';
import { Cross2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function NavDrawer() {
  const closeDrawer = () => {
    document.body.classList.remove('drawer-open');
  };
  return (
    <nav
      className="NavDrawer"
      style={{ display: 'grid', paddingBlock: 10, paddingInline: 20 }}
    >
      <div className="NavDrawerHeader">
        <h2>Sections</h2>
        {/* <Image src="/logo_wide.svg" width={280} height={80} alt={'nvts logo'} /> */}
        <button className="IconButton" aria-label="Close" onClick={closeDrawer}>
          <Cross2Icon />
        </button>
      </div>
      <ul className="NavDrawerList" style={{ listStyle: 'none' }}>
        <li className="NavDrawerItem">
          <Link href="/" className="NavDrawerLink">
            Home
          </Link>
        </li>
        <li className="NavDrawerItem">
          <Link href="/about" className="NavDrawerLink">
            About
          </Link>
        </li>
        <li className="NavDrawerItem">
          <Link href="/services" className="NavDrawerLink">
            Services
          </Link>
        </li>
        <li className="NavDrawerItem">
          <Link href="/contact" className="NavDrawerLink">
            Contact
          </Link>
        </li>
        <li className="NavDrawerItem">
          <Link href="/foo" className="NavDrawerLink">
            Foo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
