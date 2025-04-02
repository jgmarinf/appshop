import { ProductGrid, Title } from "@/components";
import { prefetchProducts } from "@/services/products.service";

export default async function Home() {
  await prefetchProducts();

  return (
    <div>
      <Title title="Tienda" subtitle="Todos los productos" />
      <ProductGrid />
    </div>
  );
}
