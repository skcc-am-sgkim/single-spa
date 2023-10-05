import { create } from "zustand";

const useMessageOpenStore = create((set) => ({
  messageOpen: false,
  setMessageOpen: (data) => set(() => ({ messageOpen: data })),
}));

export default useMessageOpenStore;
