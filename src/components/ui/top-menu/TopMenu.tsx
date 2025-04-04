"use client";
import { useCartStore, useUIStore } from "@/store";
import Link from "next/link";
import { useState } from "react";
import { IoCartOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const products = useCartStore((state) => state.products);
  const [theme, setTheme] = useState(true);
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className="antialiased font-bold text-xl"> AppShop </span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/Hombres"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/Joyas"
        >
          Joyas
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/Electronica"
        >
          Electrónica
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/Mujeres"
        >
          Mujeres
        </Link>
      </div>
      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        {theme ? (
          <button
            onClick={() => setTheme(false)}
            className="mx-2 cursor-pointer"
          >
            <IoMoonOutline className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={() => setTheme(true)}
            className="mx-2 cursor-pointer"
          >
            <IoSunnyOutline className="w-5 h-5" />
          </button>
        )}
        <Link href="/car" className="mx-2">
          <div className="relative">
            {products.length > 0 && (
              <span className="absolute text-xs rounded-full px-1.5 font-bold -top-2 -right-2 bg-blue-700 text-white">
                {products.length}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openSideMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
