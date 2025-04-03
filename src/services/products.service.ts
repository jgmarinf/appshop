import { Product } from "@/interfaces";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export const prefetchProducts = async () => {
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (!response.ok) throw new Error("Error fetching products");
      const data = await response.json();

      const allowedDomains = ["https://i.imgur.com", "https://placehold.co"];
      return data
        .map((product: Product) => ({
          ...product,
          images: product.images.filter((img: string) =>
            allowedDomains.some((domain) => img.startsWith(domain))
          ),
          category: {
            ...product.category,
            image: allowedDomains.some((domain) =>
              product.category.image.startsWith(domain)
            )
              ? product.category.image
              : "",
          },
        }))
        .filter((p: Product) => p.images.length > 0);
    },
  });
};
