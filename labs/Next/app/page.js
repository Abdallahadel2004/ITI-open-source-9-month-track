import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>E-Commerce</h1>
      <p>Discover our products.</p>
      <Link href="/products">Explore Products</Link>
    </div>
  );
}
