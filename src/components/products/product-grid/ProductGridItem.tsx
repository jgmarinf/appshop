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
            src={product.images[0]}
            alt={product.title}
            // priority={true}
            loading="lazy"
            width={300}
            height={200}
            className="w-full h-full hover:scale-125 object-cover transition-transform duration-300"
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
  );
};
