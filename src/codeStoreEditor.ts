import { create } from "zustand";

type Code = {
    code: string,
    output: string,
    setCode: (value:string) => void,
    setOutput: (value:string) => void
}

const useCodeStoreEditor = create<Code>((set) =>({
    code: '',
    output: '',
    setCode: (value) => set(() => ({
        code: value
    })),
    setOutput: (value) => set({
        output: value
    })
}))

export default useCodeStoreEditor;