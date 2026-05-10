import Card from '../../components/Card';

async function getProducts() {
  const response = await fetch('https://dummyjson.com/products', {
    next: {
      revalidate: 60
    }
  });
  return response.json();
}

export default async function ProductsPage() {
  const data = await getProducts();
  const products = data.products;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Explore Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
