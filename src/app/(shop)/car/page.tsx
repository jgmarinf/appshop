"use client";
import { Title } from "@/components";
import Empty from "@/components/ui/empty/Empty";
import { useAuthStore } from "@/store";
import { useCartStore } from "@/store/carrito-list/car-store";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const products = useCartStore((state) => state.products);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const auth = useAuthStore((state) => state.auth);

  if (products.length === 0) {
    return <Empty />;
  }

  const totalItems = products.reduce(
    (acc, product) => acc + product.cantidad,
    0
  );
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.cantidad,
    0
  );
  const taxes = subtotal * 0.15;
  const total = subtotal + taxes;

  return (
    <div className="flex items-center justify-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas items</span>
            <Link href="/" className="underline mb-5">
              Continua comprando
            </Link>

            {/* Items */}
            {products.map((product) => (
              <div
                key={product.id}
                className="flex mb-5 bg-white rounded text-black p-2 shadow-xl "
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
                  <p className="font-semibold">{product.title}</p>
                  <p>$ {product.price}</p>
                  <p>Cantidad: X{product.cantidad}</p>
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="underline mt-3 cursor-pointer"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout */}
          <div className="bg-white text-black rounded-xl shadow-xl p-7 h-[300px]">
            <h2 className="text-2xl mb-2">Resumen de compra</h2>
            <div className="grid grid-cols-2">
              <span>No. de items</span>
              <span className="text-right">{totalItems} articulos</span>
              <span>Subtotal:</span>
              <span className="text-right">${subtotal.toFixed(2)}</span>
              <span>Impuestos 15%</span>
              <span className="text-right">${taxes.toFixed(2)}</span>
              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <Link
                href={auth ? "/finish" : "/auth/login"}
                className="flex btn-primary justify-center"
              >
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
