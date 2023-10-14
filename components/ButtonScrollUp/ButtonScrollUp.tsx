'use client';
import { ArrowUpIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import { CSSProperties, useEffect, useRef, useState } from 'react';

export function ButtonScrollUp() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setShowButton(false);
    }, 330);
  };
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <Button
      ref={btnRef}
      className="ButtonScrollUp"
      onClick={handleClick}
      style={{ ...$style, opacity: showButton ? 1 : 0 }}
    >
      <ArrowUpIcon width={50} height={50} />
    </Button>
  );
}

const $style: CSSProperties = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  borderRadius: '50%',
  width: 50,
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.5s',
  cursor: 'pointer',
  zIndex: 100,
};
