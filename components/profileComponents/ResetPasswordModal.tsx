import ResetPassword from "@/api/auth/resetPassword";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";
import { useEffect } from "react";
import { RiKeyFill } from "react-icons/ri";

const ResetPasswordModal = () => {
  const resetPassword = useModalsStore((state: any) => state.resetPassword);
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const resetUserPassword = ResetPassword();
  const user = userStore((state: any) => state.user);
  useEffect(() => {
    if (resetPassword === false || resetPassword === undefined) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  });

  if (resetPassword === false || resetPassword === undefined) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out rounded-2xl py-3 md:py-6 px-5 md:px-6 w-[95%] md:w-[37.5rem]">
        <div className="text-right">
          <button
            onClick={() => updateModals({ resetPassword: false })}
            className="text-3xl"
          >
            &times;
          </button>
        </div>

        <div className="py-5 px-4 space-y-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <div className="p-10 bg-[#FBF7EB] rounded-full">
                <RiKeyFill size={48}/>
              </div>
            </div>

            <div className="text-dukiaBlue text-center">
              <p className="font-semibold">Reset Login Password</p>
              <p className="text-[#676D88] text-xs">We&apos;ll send you a link to reset your password</p>
            </div>
          </div>

          <div className="text-sm flex flex-col items-center space-y-6">
            <input
              type="email"
              disabled
              placeholder={user.email}
              className="border border-dukiaBlue/[15%] w-full md:w-[25rem] rounded-lg px-4 py-3.5 placeholder:text-dukiaBlue disabled:cursor-not-allowed font-medium"
            />

            <div>
              <button
                onClick={resetUserPassword}
                className="bg-dukiaBlue hover:bg-dukiaGold hover:text-black text-white py-3.5 px-6 rounded-lg"
              >
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
