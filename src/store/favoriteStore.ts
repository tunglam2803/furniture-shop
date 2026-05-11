import { create } from 'zustand';

interface FavouriteState {
  favorites: any[];
  toggleFavorite: (product: any) => void;
}

export const useFavouriteStore = create<FavouriteState>((set) => ({
  favorites: [],
  toggleFavorite: (product) => set((state) => {
    const isExist = state.favorites.find((item) => item.id === product.id);
    if (isExist) {
      return { favorites: state.favorites.filter((item) => item.id !== product.id) };
    }
    return { favorites: [...state.favorites, product] };
  }),
}));