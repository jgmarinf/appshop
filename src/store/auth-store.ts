import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  auth: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      auth: false,
      logIn: () => set({ auth: true }),
      logOut: () => set({ auth: false })
    }),
    {
      name: 'auth-storage',
    }
  )
);