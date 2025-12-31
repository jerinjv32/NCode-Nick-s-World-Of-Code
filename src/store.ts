import { create } from "zustand";

type TypeOfMessage = {
    id: string,
    title: string,
    role: 'bot'|'user',
}

type Messages = {
    message: TypeOfMessage[],
    addBotMessage: (newBotMsg : string) => void,
    addUserMessage: (newUserMsg: string) => void
}

const useStoreMessages = create<Messages>((set) =>({
    message: [{
        id: Date.now().toString(),
        title: "How Can I help You",
        role: "bot"
    }],
    addBotMessage: (newBotMsg) => set((state) => ({
            message: [{
                id: Date.now().toString(),
                title: newBotMsg,
                role: "bot"
            }, ...state.message]
        })),
    addUserMessage: (newUserMsg) => set((state) => ({
            message: [{
                id: Date.now().toString(),
                title: newUserMsg,
                role: "user"
            }, ...state.message]
        })),
}));

export default useStoreMessages;