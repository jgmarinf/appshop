import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
        <div className="text-center px-5 mx-5">
            <h2 className="antialiased text-9xl">404</h2>
            <p className="font-semibold text-xl">Whooops! Lo sentimos mucho.</p>
            <p>
                <span>Puedes regresar al </span>
                <Link href="/" className="font-normal hover:underline transition-all" >inicio</Link>
            </p>
        </div>
        <div className="px-5 mx-5">
            <Image className="p-5 sm:p-0" src="/not-found.png" alt="404" width={300} height={300} />
        </div>

    </div>
  )
}

