import { create } from "zustand";

interface ModalStoreProps {
    activeModal: string, 
}

interface ModalFuntions {
    openModal: (value: string) => void,
    closeModal: () => void
}


const useModalVisible = create<ModalStoreProps & ModalFuntions>((set) => ({
    activeModal: '',
    openModal: (value) => set({activeModal: value}),
    closeModal: () => set({activeModal: ''})
}));

export default useModalVisible;