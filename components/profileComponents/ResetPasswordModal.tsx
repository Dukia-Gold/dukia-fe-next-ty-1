import { userStore } from "@/store/user";
import { useEffect } from "react";

interface ResetPasswordModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ResetPasswordModal = ({
  isOpen,
  closeModal,
}: ResetPasswordModalProps) => {
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
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out rounded-lg py-3 md:py-6 px-5 md:px-10 w-[95%] md:w-[37.5rem]">
        <div className="text-right">
          <button onClick={closeModal} className="text-3xl">
            &times;
          </button>
        </div>

        <div className="py-5 px-4 space-y-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <div className="p-6 bg-dukiaBlue/[5%] rounded-[50%]">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5391 8H17.5391V6C17.5391 3.24 15.2991 1 12.5391 1C9.77906 1 7.53906 3.24 7.53906 6V8H6.53906C5.43906 8 4.53906 8.9 4.53906 10V20C4.53906 21.1 5.43906 22 6.53906 22H18.5391C19.6391 22 20.5391 21.1 20.5391 20V10C20.5391 8.9 19.6391 8 18.5391 8ZM12.5391 17C11.4391 17 10.5391 16.1 10.5391 15C10.5391 13.9 11.4391 13 12.5391 13C13.6391 13 14.5391 13.9 14.5391 15C14.5391 16.1 13.6391 17 12.5391 17ZM9.53906 8V6C9.53906 4.34 10.8791 3 12.5391 3C14.1991 3 15.5391 4.34 15.5391 6V8H9.53906Z"
                    fill="#111827"
                  />
                </svg>
              </div>
            </div>

            <div className="text-dukiaBlue text-center">
                <p className="font-bold text-lg">Reset Password</p>
                <p>We&apos;ll send you a link to reset your password</p>
            </div>
          </div>

          <div className="text-sm flex flex-col items-center space-y-6">
            <input
              type="email"
              disabled
              placeholder={user.email}
              className="border border-dukiaBlue/[15%] w-full md:w-[25rem] rounded-lg px-4 py-3.5 placeholder:text-dukiaBlue  font-medium"
            />

            <div>
              <button className="bg-dukiaBlue hover:bg-dukiaGold hover:text-black text-white py-3.5 px-6 rounded-lg">
                Send Reset Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
