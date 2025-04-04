import Link from "next/link";
import { IoHeartDislike } from "react-icons/io5";

export default function EmptyFavorites() {
  return (
    <div className="flex items-center justify-center h-[800px]">
      <IoHeartDislike size={100} className="mx-5" />
      <div className="flex flex-col items-center ">
        <h1 className="sm:text-xl text-sm font-semibold">
          No tienes Favoritos
        </h1>
        <Link
          href={"/"}
          className="sm:text-4xl text-2xl mt-2 underline text-blue-800"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
