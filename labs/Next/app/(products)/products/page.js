import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

async function getProducts(limit, skip) {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, {
    next: {
      revalidate: 60
    }
  });
  return response.json();
}

export default async function ProductsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams.page) || 1;
  const limit = 12;
  const skip = (page - 1) * limit;

  const data = await getProducts(limit, skip);
  const products = data.products;
  const total = data.total;
  const totalPages = Math.ceil(total / limit);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Explore Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}
