import Link from 'next/link';
import { notFound } from 'next/navigation';



export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: {
      revalidate: 60
    }
  });
  const product = await res.json();

  if (!product || product.message) {
    notFound();
  }

  return (
    <div style={{ padding: '20px'  ,display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' ,border:'1px solid #ccc',borderRadius:'8px'}}>
      <div>
        <div>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div>
          <div>{product.category}</div>
          <h1>{product.title}</h1>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <Link href="/products">
            &larr; Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
