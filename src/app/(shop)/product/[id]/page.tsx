import { ProductDetails, ProductGridAround } from "@/components";

interface Props {
  params: {
    id: string;
  };
}

export default async function Product({ params }: Props) {
  const { id } = await params;
  return (
    <div className="flex flex-col items-center justify-center">
      <ProductDetails id={id} />
      <div className=" flex flex-col w-full justify-center">
        <h2 className="text-3xl my-5 font-bold">Productos relacionados</h2>
        <ProductGridAround id={id} />
      </div>
    </div>
  );
}
