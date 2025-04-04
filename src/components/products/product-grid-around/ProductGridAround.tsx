"use client";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/interfaces";
import { ProductGridItem } from "../product-grid/ProductGridItem";

interface Props {
  id: string;
}

export const ProductGridAround = ({ id }: Props) => {
  const { data, error, isPending } = useProducts();
  const products = data || [];

  if (isPending) return <h3>Cargando productos...</h3>;
  if (error) return <h3 className="text-red-500">{error.message}</h3>;
  if (products.length === 0) return <h3>No hay productos disponibles</h3>;

  const productFound = products.find(
    (product: Product) => product.id === Number(id)
  );
  if (!productFound) return <h3>Producto no encontrado</h3>;
  const slug = productFound.category;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10">
      {products
        .filter((product: Product) => product.category === slug)
        .map((product: Product) => (
          <ProductGridItem key={product.id} product={product} />
        ))}
    </div>
  );
};
