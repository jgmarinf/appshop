import { QueryClient, useQuery } from "@tanstack/react-query";
import { Product } from "../interfaces/product.interface";

export const useProduct = (id: string) => {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) throw new Error("Error fetching product");
      const data = await response.json();
      return data;
    },
    staleTime: 60 * 1000, // 1 minute cache
  });
};

export const prefetchProduct = async (id: string) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) throw new Error("Error fetching product");
      const data = await response.json();
      return data;
    },
  });
  return queryClient;
};
