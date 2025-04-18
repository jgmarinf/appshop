"use client";
import { Title } from "@/components";
import EmptyFavorites from "@/components/ui/empty/EmptyFavorites";
import { useFavoritesStore } from "@/store";
import Image from "next/image";
import Link from "next/link";

export default function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);

  if (favorites && favorites.length === 0) {
    return <EmptyFavorites />;
  }
  return (
    <div className="flex w-full  mb-72 px-10 sm:px-0">
      <div className="flex flex-col items-center justify-center w-[1000px]">
        <Title title="Favoritos" />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas Favoritos</span>
            <Link href="/" className="underline mb-5">
              Volver a la Tienda
            </Link>

            {favorites.map((product) => (
              <div
                key={product.id}
                className="flex mb-5 bg-white rounded text-black p-3 shadow-xl "
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  priority
                  className="mr-5 rounded object-contain"
                />
                <div>
                  <p className="font-bold sm:text-3xl">{product.title}</p>
                  <p className="font-normal sm:text-2xl">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
