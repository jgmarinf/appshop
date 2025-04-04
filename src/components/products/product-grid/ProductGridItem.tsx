"use client";
import { Product } from "@/interfaces";
import { useFavoritesStore } from "@/store/favorites/favorites-store";
import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const addOrRemove = useFavoritesStore((state) => state.addOrRemove);

  const isFavorited = favorites.some((fav) => fav.id === product.id);

  const toggleFavorite = () => {
    addOrRemove({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="max-w-sm rounded-lg shadow-lg relative">
      <div className="h-80 w-full overflow-hidden ">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            loading="lazy"
            width={300}
            height={200}
            className="w-full h-full hover:scale-125 object-contain transition-transform duration-300"
          />
        </Link>
      </div>
      <div className="p-4 flex flex-col ">
        <Link className="hover:text-blue-700" href={`/product/${product.id}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
      <div
        className="absolute bottom-3 right-3 cursor-pointer"
        onClick={toggleFavorite}
      >
        {isFavorited ? (
          <IoHeartSharp size={30} color="black" />
        ) : (
          <IoHeartOutline size={30} color="black" />
        )}
      </div>
    </div>
  );
};
