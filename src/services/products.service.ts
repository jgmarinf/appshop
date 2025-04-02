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
      return response.json();
    },
  });
};
