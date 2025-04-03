"use client";
import { Product } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import { ProductGridItem } from "../product-grid/ProductGridItem";

interface Props {
  slug: string;
}

export const ProductGridCategory = ({ slug }: Props) => {
  const {
    data: products,
    error,
    isPending,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Error fetching products");
      return await response.json();
    },
    staleTime: 60 * 1000,
  });

  if (error) return <h3 className="text-red-500">{error.message}</h3>;
  if (isPending) return <h3>Cargando productos...</h3>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products
        .filter((product: Product) => product.category === slug)
        .map((product: Product) => (
          <ProductGridItem key={product.id} product={product} />
        ))}
    </div>
  );
};
