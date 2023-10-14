'use client';
import useAnimatedRouter from '@/hooks/useAnimatedRouter';
import styles from './Footer.module.css';
import { useState, useEffect } from 'react';

export function Footer() {
  const { viewTransitionsStatus } = useAnimatedRouter();
  const [transitionStatus, setTransitionStatus] = useState('');
  useEffect(() => {
    const status = viewTransitionsStatus();
    setTransitionStatus(status);
  }, [viewTransitionsStatus]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_primary}>
        <div className={styles.footer_primary_container}>
          <div>
            <section style={{ minWidth: 250 }}>
              <h2 style={{ fontSize: 16 }}>Nyheter och referenser</h2>
              <ul style={{ listStyle: 'none', padding: 20 }}>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </section>
          </div>
          <div>
            <section style={{ minWidth: 250 }}>
              <h2 style={{ fontSize: 16 }}>Verktyg och dokument</h2>
              <ul style={{ listStyle: 'none', padding: 20 }}>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </section>
          </div>
          <div>
            <section style={{ minWidth: 250 }}>
              <h2 style={{ fontSize: 16 }}>Om oss</h2>
              <ul style={{ listStyle: 'none', padding: 20 }}>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.footer_secondary}>
        <address style={{ textAlign: 'center', fontSize: 14 }}>
          Nordic Vertitech Solutions AB, Kungsgatan 8, 111 43 Stockholm, Sweden
        </address>
      </div>
      <div>{transitionStatus}</div>
    </footer>
  );
}
