import Link from "next/link";

export default function Finish() {
  return (
    <div className="flex flex-col  items-center justify-center h-[800px]">
      <h1 className="text-2xl sm:text-5xl font-bold">Gracias por comprar!</h1>
      <Link href="/" className="underline">
        Volver a la Tienda
      </Link>
    </div>
  );
}
