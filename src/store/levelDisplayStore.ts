import { create } from "zustand";

type Lesson = {
    lesson: string,
    title: string,
}

type LessonDetails = Lesson & {
    setLesson: (value: Partial<Lesson>) => void
}

const useLevelDisplay = create<LessonDetails>((set) => ({
    lesson: null,
    title: null,
    setLesson: (value) => set(value)
}));

export default useLevelDisplay;