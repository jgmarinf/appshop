"use client";
import { Product } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";

export const ProductGrid = () => {
  const {
    data: products,
    error,
    isPending,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Error fetching products");
      return response.json();
    },
    staleTime: 60 * 1000,
  });

  if (error) return <h3 className="text-red-500">{error.message}</h3>;
  if (isPending) return <h3>Cargando productos...</h3>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product: Product) => (
        <span
          key={product.id}
          className="bg-gray-200 rounded-md p-5 text-center"
        >
          {product.title}
        </span>
      ))}
    </div>
  );
};
