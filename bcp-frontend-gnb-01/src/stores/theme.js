import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: true,
  setTheme: (data) => set(() => ({ theme: data })),
  changeTheme: () => set((state) => ({ theme: !state.theme })),
}));

export default useThemeStore;
