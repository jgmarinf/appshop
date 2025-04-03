import { useQuery } from '@tanstack/react-query';
import { Product } from '@/interfaces';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Error fetching products');
      const data = await response.json();

      // Data normalization for consistent structure
      return data.map((product: Product) => ({
        ...product,
        category: product.category || 'uncategorized',
        image: product.image.startsWith('http') 
          ? product.image 
          : `/images/products/${product.image}`
      }));
    },
    staleTime: 60 * 1000
  });
};