"use client";
import { useAuthStore } from "@/store";
import Link from "next/link";

export default function Login() {
  const loIng = useAuthStore((state) => state.logIn);
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className="text-4xl mb-5">Ingresar</h1>
      <div className="flex flex-col">
        <label htmlFor="email">Correo electronico</label>
        <input
          type="email"
          id="email"
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
        />
        <Link
          onClick={loIng}
          className="flex items-center justify-center btn-primary"
          href="/"
        >
          Ingresar
        </Link>
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-sm text-gray-800">0</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>
        <Link href="/auth/new-account" className="btn-secondary text-center">
          Crear una cuenta
        </Link>
      </div>
    </div>
  );
}
