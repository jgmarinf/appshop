"use client";
import { useCartStore, useUIStore } from "@/store";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const products = useCartStore((state) => state.products);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar problemas de hidratación montando el componente solo del lado del cliente
  useEffect(() => {
    setMounted(true);
    toggleTheme();
  }, []);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className="antialiased font-bold text-xl "> AppShop </span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all   "
          href="/category/Hombres"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all   "
          href="/category/Joyas"
        >
          Joyas
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all   "
          href="/category/Electronica"
        >
          Electrónica
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all   "
          href="/category/Mujeres"
        >
          Mujeres
        </Link>
      </div>
      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        {/* Solo renderizar los botones de tema cuando el componente está montado */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="mx-2 cursor-pointer animate-fade-in"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <IoMoonOutline className="w-5 h-5" />
            ) : (
              <IoSunnyOutline className="w-5 h-5 text-white" />
            )}
          </button>
        )}
        <Link href="/car" className="mx-2">
          <div className="relative">
            {products.length > 0 && (
              <span className="absolute text-xs rounded-full px-1.5 font-bold -top-2 -right-2 bg-blue-700 text-white">
                {products.length}
              </span>
            )}
            <IoCartOutline className="w-5 h-5 " />
          </div>
        </Link>
        <button
          className="m-2 p-2 rounded-md transition-all cursor-pointer"
          onClick={openSideMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
