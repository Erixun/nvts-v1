'use client';
import { Cross2Icon } from '@radix-ui/react-icons';
import AnimatedLink from '../AnimatedLink/AnimatedLink';
// import AnimatedLink from 'next/AnimatedLink';

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
          <AnimatedLink href="/">
             {/* className="NavDrawerLink"> */}
            Home
          </AnimatedLink>
        </li>
        <li className="NavDrawerItem">
          <AnimatedLink href="/about">
             {/* className="NavDrawerLink"> */}
            About
          </AnimatedLink>
        </li>
        <li className="NavDrawerItem">
          <AnimatedLink href="/services">
             {/* className="NavDrawerLink"> */}
            Services
          </AnimatedLink>
        </li>
        <li className="NavDrawerItem">
          <AnimatedLink href="/contact">
             {/* className="NavDrawerLink"> */}
            Contact
          </AnimatedLink>
        </li>
      </ul>
    </nav>
  );
}
