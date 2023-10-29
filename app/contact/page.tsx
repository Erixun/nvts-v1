import Link from 'next/link';

export default function contact() {
  return (
    <main style={{ flex: 1, padding: '6rem' }}>
      <h1>Kontakt</h1>
      <div className="presentation">
        <p>
          Get started by editing <code>app/foo/page.tsx</code>
        </p>
        <Link href="/">
          <span>&lt;-</span> Home
        </Link>
      </div>
    </main>
  );
}
