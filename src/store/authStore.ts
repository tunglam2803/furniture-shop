import { create } from 'zustand';

// ─── Auth Store ───────────────────────────────────────────────────────────────
// Dev A owns this store. Dev B / C use isAuthenticated to guard nav.

interface User {
  id:    string;
  name:  string;
  email: string;
}

interface AuthState {
  token:           string | null;
  user:            User | null;
  isAuthenticated: boolean;

  // Actions
  login:  (token: string, user: User) => void;
  logout: () => void;
  setUser:(user: User) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token:           null,
  user:            null,
  isAuthenticated: false,

  login: (token, user) => {
    // TODO: persist token → expo-secure-store
    // SecureStore.setItemAsync('auth_token', token);
    set({ token, user, isAuthenticated: true });
  },

  logout: () => {
    // SecureStore.deleteItemAsync('auth_token');
    set({ token: null, user: null, isAuthenticated: false });
  },

  setUser: (user) => set({ user }),
}));