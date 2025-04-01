import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}


export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  if (id === "kids") {
    notFound()
  }

    return (
      <div>
        <h1 className="font-bold">Category Page {id}</h1>
      </div>
    );
  }
  