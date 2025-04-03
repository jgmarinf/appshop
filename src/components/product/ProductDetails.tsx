"use client";

import { useProduct } from "@/hooks/useProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoStarOutline } from "react-icons/io5";
import { QuantitySelector } from "./quantity-selector/QuantitySelector";

interface Props {
  id: string;
}

export const ProductDetails = ({ id }: Props) => {
  const { data: product, error, isPending } = useProduct(id);

  if (isPending) return <h3>Cargando producto...</h3>;
  if (error) return notFound();

  return (
    <div className="flex items-center justify-center">
      <div className="mt-5 mb-20 grid grid-cols-1 md:w-[70vw] xl:w-[60vw] sm:overflow-hidden sm:max-h-120 sm:grid-cols-3 gap-3 ">
        {/* Slideshow */}
        <div className="col-span-1 sm:col-span-2">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              className="object-contain "
            />
          </div>
        </div>
        {/* Details */}
        <div className="col-span-1 p-5 bg-white rounded-lg shadow-md">
          <h1 className="antaliased mb-2 font-bold text-xl">{product.title}</h1>
          <p className="text-lg mb-2">${product.price}</p>
          <QuantitySelector quantity={1} />
          <div className="flex items-center gap-2">
            <p className="text-lg mb-0">{product.rating.rate} de 5 estrellas</p>
            <IoStarOutline size={22} />
          </div>
          <p className="text-lg mb-2">
            quedan {product.rating.count} productos
          </p>
          <button className="btn-primary my-3 w-full">
            agregar al carrito
          </button>
          <h3 className="font-bold text-xl">Descripción</h3>
          <p className="font-light text-sm">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
