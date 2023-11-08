import {create} from 'zustand';

interface RegModalStore {
    isOpen:boolean
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterModal = create<RegModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useRegisterModal;
