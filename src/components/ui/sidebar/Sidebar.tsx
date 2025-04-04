"use client";
import { useAuthStore, useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoHeartOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const auth = useAuthStore((state) => state.auth);
  const logOut = useAuthStore((state) => state.logOut);
  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-30"></div>
      )}
      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 z-10 w-screen h-screen backdrop-filter backdrop-blur"
        ></div>
      )}
      {/* SideMenu */}
      <nav
        className={clsx(
          "fixed p-3 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={25}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Menu */}
        <div className="flex flex-col mt-10 gap-3">
          {!auth ? (
            <Link
              onClick={closeMenu}
              href="/auth/login"
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoLogInOutline size={20} />
              <span className="ml-3 ">Ingresar</span>
            </Link>
          ) : (
            <Link
              onClick={() => {
                logOut();
                closeMenu();
              }}
              href="/"
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoLogOutOutline size={20} />
              <span className="ml-3 ">Salir</span>
            </Link>
          )}
          <Link
            onClick={closeMenu}
            href="/"
            className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoPersonOutline size={20} />
            <span className="ml-3 ">Mi cuenta</span>
          </Link>
          <Link
            onClick={closeMenu}
            href="/"
            className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoTicketOutline size={20} />
            <span className="ml-3 ">Ordenes</span>
          </Link>

          <Link
            onClick={closeMenu}
            href="/"
            className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoShirtOutline size={20} />
            <span className="ml-3 ">Productos</span>
          </Link>

          <Link
            onClick={closeMenu}
            href="/favorites"
            className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoHeartOutline size={20} />
            <span className="ml-3 ">Favoritos</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
