import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { deleteItemAsync, setItemAsync, getItemAsync, setItem, getItem } from "expo-secure-store";


type Auth = {
    loggedIn: boolean;
    _hasHydrated: boolean;
    setHasHydrated: (state: any) => void;
    logIn: () => void;
    logOut: () => void;
}

export const UseAuthStore = create<Auth>()(
    persist(
        (set) => ({
            loggedIn: false,
            _hasHydrated: false,
            setHasHydrated: (state) => {
                set({
                    _hasHydrated: state
                })
            },
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
        }),
        {
            onRehydrateStorage: (state) => {
                return () => state.setHasHydrated(true)
            },
            name: "login-storage",
            storage: createJSONStorage(() => ({
                // setItem: setItemAsync,
                // getItem: getItemAsync,
                setItem,
                getItem,
                removeItem: deleteItemAsync
            })),
        }
    ),
)