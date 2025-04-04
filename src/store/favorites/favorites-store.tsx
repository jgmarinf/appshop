import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface FavoriteProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface FavoritesState {
  favorites: FavoriteProduct[];
  addOrRemove: (product: FavoriteProduct) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addOrRemove: (product) => {
        const existing = get().favorites.some((item) => item.id === product.id);

        if (existing) {
          set((state) => ({
            favorites: state.favorites.filter((item) => item.id !== product.id),
          }));
        } else {
          set((state) => ({
            favorites: [...state.favorites, product],
          }));
        }
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);
