import { ProductDetails } from "@/components";

interface Props {
  params: {
    id: string;
  };
}

export default async function Product({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  );
}
