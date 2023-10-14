import Link from "next/link";

export default function services() {
  return <main style={{flex: 1,  padding: '6rem'}}>
    <h1>Our Services</h1>
    <p>Get started by editing <code>app/foo/page.tsx</code></p>
    <Link href="/"><span>&lt;-</span> Home</Link>
  </main>
}
