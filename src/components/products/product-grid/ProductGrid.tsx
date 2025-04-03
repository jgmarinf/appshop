"use client";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/interfaces";
import { ProductGridItem } from "./ProductGridItem";

export const ProductGrid = () => {
  const { data: products, error, isPending } = useProducts();

  if (error) return <h3 className="text-red-500">{error.message}</h3>;
  if (isPending) return <h3>Cargando productos...</h3>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product: Product) => (
        <ProductGridItem key={product.id} product={product} />
      ))}
    </div>
  );
};
