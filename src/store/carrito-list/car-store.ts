import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  cantidad: number;
}

interface CartState {
  products: CartProduct[];
  addProduct: (
    product: Omit<CartProduct, "cantidad">,
    cantidad: number
  ) => void;
  removeProduct: (id: number) => void;
}

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
      products: [],

      addProduct: (product, cantidad) => {
        set((state) => {
          const existingProduct = state.products.find(
            (p) => p.id === product.id
          );

          if (existingProduct) {
            return {
              products: state.products.map((p) =>
                p.id === product.id
                  ? { ...p, cantidad: p.cantidad + cantidad }
                  : p
              ),
            };
          }

          return {
            products: [...state.products, { ...product, cantidad }],
          };
        });
      },

      removeProduct: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        }));
      },
    }),
    {
      name: "car-storage",
    }
  )
);
