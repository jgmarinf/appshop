"use client";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/interfaces";
import { ProductGridItem } from "../product-grid/ProductGridItem";

interface Props {
  slug: string;
}

export const ProductGridCategory = ({ slug }: Props) => {
  const { data: products, error, isPending } = useProducts();

  if (error) return <h3 className="text-red-500">{error.message}</h3>;
  if (isPending) return <h3>Cargando productos...</h3>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-10 mb-10">
      {products
        .filter((product: Product) => product.category === slug)
        .map((product: Product) => (
          <ProductGridItem key={product.id} product={product} />
        ))}
    </div>
  );
};
