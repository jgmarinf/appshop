import { Title } from "@/components";

export default async function Home() {
  //const { data: products, error } = await getProducts();


  return (
    <div>
      <Title title="Tienda" subtitle="Todos los productos" />
      {/* {!products ? <h3>{error}</h3> : 
      <ProductGrid products={products} />
  } */}
    </div>
  );
}
