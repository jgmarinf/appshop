"use client";

import { SkeletonProductDetails } from "@/components/ui/skeleton/SkeletonProductDetails";
import { useProduct } from "@/hooks/useProduct";
import { useCartStore } from "@/store/carrito-list/car-store";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import { QuantitySelector } from "./quantity-selector/QuantitySelector";

interface Props {
  id: string;
}

export const ProductDetails = ({ id }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { data: product, error, isPending } = useProduct(id);

  if (isPending) return <SkeletonProductDetails />;
  if (error) return notFound();

  return (
    <div className="flex items-center justify-center bg-white rounded">
      <div className="mt-5 mb-20 grid grid-cols-1 sm:w-[100vw] md:w-[78vw] xl:w-[60vw] sm:overflow-hidden sm:max-h-120 sm:grid-cols-3 gap-3 ">
        {/* Slideshow */}
        <div className="col-span-1  sm:col-span-2">
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
        <div className="col-span-1 p-5 text-black">
          <h1 className="antaliased mb-2 font-bold text-xl">{product.title}</h1>
          <p className="text-lg mb-2">${product.price}</p>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <div className="flex mb-2 items-center gap-2">
            <p className="text-lg mb-0">{product.rating.rate} de 5 estrellas</p>
            <IoStarOutline size={22} />
          </div>
          <p className="text-lg mb-2">
            quedan {product.rating.count} productos
          </p>
          <div className="w-full mt-4">
            <Link
              href="/car"
              className="btn-primary w-full text-xl sm:text-sm "
              onClick={() =>
                useCartStore.getState().addProduct(
                  {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  },
                  quantity
                )
              }
            >
              agregar al carrito
            </Link>
          </div>
          <h3 className="font-bold my-3 text-xl">Descripción</h3>
          <p className="font-light text-sm">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
