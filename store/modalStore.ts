import { create } from "zustand";

type ModalOptions = {
  type?: "success" | "error" | "confirm";
  title?: string;
  message?: string;
  onConfirm?: () => void;
};

type ModalState = {
  isOpen: boolean;
  modalOptions: ModalOptions;
  openModal: (options: ModalOptions) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalOptions: {},
  openModal: (options) =>
    set({
      isOpen: true,
      modalOptions: options,
    }),
  closeModal: () => set({ isOpen: false }),
}));
