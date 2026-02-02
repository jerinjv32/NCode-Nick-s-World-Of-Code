import { create } from "zustand";

interface NextLesson {
    userId : string
    setUserId : (value: string) => void
}
const useIdStore = create<NextLesson>((set) => ({
    userId: '',
    setUserId: (value) => set({userId: value})
}));

export default useIdStore;