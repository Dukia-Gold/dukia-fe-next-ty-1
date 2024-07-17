import { userStore } from "@/store/user";
import { useEffect } from "react";

interface StatementOfAccountModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const StatementOfAccountModal = ({
  isOpen,
  closeModal,
}: StatementOfAccountModalProps) => {
  const user = userStore((state: any) => state.user);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white rounded-lg py-3 md:py-6 px-5 md:px-10 w-[95%] md:w-[37.5rem]">
        <div className="text-right">
          <button onClick={closeModal} className="text-3xl">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatementOfAccountModal;
