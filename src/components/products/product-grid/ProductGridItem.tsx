import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg">
      <div className="h-80 w-full overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            priority={true}
            width={300}
            height={200}
            className="w-full scale-90 h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>
      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-700" href={`/product/${product.id}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
    // <div className="rounded-b-lg overflow-hidden fade-in bg-amber-600">
    //   <Image
    //     src={product.image}
    //     priority={true}
    //     alt={product.title}
    //     className="w-full object-cover hover:scale-110 transition-transform duration-300"
    //     width={300}
    //     height={300}
    //   />

    // </div>
  );
};
