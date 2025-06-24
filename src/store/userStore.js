import { create } from "zustand";

export const userStore = create((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,

  setUser: () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    set({ user, accessToken, refreshToken });
  },

  reset: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    set({ user: null, accessToken: null, refreshToken: null });
  },
}));
