import { create } from "zustand";

type Auth = {
    loggedIn : boolean;
    logIn: () => void;
    logOut: () => void;
}

export const UseAuthStore = create<Auth>((set) => ({
    loggedIn: false,
    logIn: () => set((state) => {
        return {
            ...state,
            loggedIn: true
        }
    }),
    logOut: () => set((state) => {
        return {
            ...state,
            loggedIn: false
        }
    }),
})) 