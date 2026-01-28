import { create } from "zustand";

type Code = {
    code: string,
    output: string,
    setCode: (value:string) => void,
    setOutput: (value:string) => void
}

const useCodeStore = create<Code>((set) =>({
    code: '',
    output: '',
    setCode: (value) => set(() => ({
        code: value
    })),
    setOutput: (value) => set({
        output: value
    })
}))

export default useCodeStore;