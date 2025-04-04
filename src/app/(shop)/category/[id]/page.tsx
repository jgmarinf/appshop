import { ProductGridCategory, Title } from "@/components";
import { prefetchProducts } from "@/services/products.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CategoryPage(props: Props) {
  await prefetchProducts();
  const { id } = await props.params;

  const categoryMap: { [key: string]: string } = {
    Hombres: "men's clothing",
    Joyas: "jewelery",
    Electronica: "electronics",
    Mujeres: "women's clothing",
  };
  const slug = categoryMap[id];

  return (
    <div>
      <Title title={id} subtitle={`Productos de ${id}`} />
      <ProductGridCategory slug={slug} />
    </div>
  );
}
