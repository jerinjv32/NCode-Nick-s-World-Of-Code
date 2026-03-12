import { create } from "zustand";

interface QuestionStoreType {
  question: string;
  setQuestion: (value: string) => void
}
const useQuestionStore = create<QuestionStoreType>((set) => ({
  question: '',
  setQuestion: (value) => set({ question: value })
}));

export default useQuestionStore
