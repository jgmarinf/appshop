import { ProductDetails, ProductGridAround } from "@/components";

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Product(props: Props) {
  const { id } = await props.params;
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
