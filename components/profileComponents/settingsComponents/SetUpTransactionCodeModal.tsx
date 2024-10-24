import { setTransactionCode } from "@/api/trading/setTransactionCode";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";
import useLoadingStore from "@/store/loadingStore";
import useModalsStore from "@/store/modalsStore";
import { useModalStore } from "@/store/modalStore";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { X } from "lucide-react";
import React from "react";
import { useCookies } from "react-cookie";

const SetTransactionCodeModal = () => {
  const [cookies] = useCookies(["xZ9qTn7p_K4wVd1Lm_jx8s2A"]);
  const [code, setCode] = React.useState<string>("");
  const [codeError, setCodeError] = React.useState<string>("");
  const [confirmCode, setConfirmCode] = React.useState<string>("");
  const [confirmCodeError, setConfirmCodeError] = React.useState<string>("");
  const { setTransactionCodeModal, updateModals } = useModalsStore(
    (state: any) => ({
      setTransactionCodeModal: state.setTransactionCode,
      updateModals: state.updateModals,
    })
  );
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const openModal = useModalStore((state) => state.openModal);

  const rules: string[] = [
    "up to 10 alphanumeric characters",
    "Numbers/Letters must not be in sequence",
  ];

  const handleInput = (value: any, type: string) => {
    if (type === "confirmCode") {
      setConfirmCode(value);
      setConfirmCodeError(code === value ? "" : "Code does not match");
    } else {
      setCode(value);
      setCodeError(
        value.length === 10 && /[0-9]/.test(value)
          ? ""
          : "Code must be 10 alphanumeric characters and contain at least one number"
      );
    }
  };

  const closeModal = () => {
    setCode("");
    setCodeError("");
    setConfirmCode("");
    setConfirmCodeError("");
    updateModals({
      setTransactionCode: false,
    });
  };

  const submitCode = () => {
    if (code.length !== 10 && /[0-9]/.test(code)) {
      setCodeError(
        "Code must be 10 alphanumeric characters and contain at least one number"
      );
    } else if (code.length !== 10 || !/[0-9]/.test(code)) {
      setCodeError(
        "Code must be 10 alphanumeric characters and contain at least one number"
      );
    } else if (code !== confirmCode) {
      setConfirmCodeError("Code does not match");
    } else {
      setTransactionCode(
        confirmCode,
        cookies,
        updateLoading,
        openModal,
        closeModal
      );
    }
  };

  if (
    setTransactionCodeModal === false ||
    setTransactionCodeModal === undefined
  ) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out rounded-2xl py-3 md:py-6 px-5 md:px-6 w-[95%] md:w-[37.5rem] space-y-7">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Set Transaction Code</p>

          <button
            onClick={closeModal}
            className="p-2.5 bg-dukiaBlue/[5%] rounded-[50%]"
          >
            <X width={18} height={18} />
          </button>
        </div>

        <div>
          <div className="text-sm space-y-4">
            <p>Code must be:</p>

            <ul className="list-disc list-inside font-semibold space-y-2">
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          <Separator className="mt-6 mb-3" />

          <div className="font-semibold">
            <div className="space-y-1">
              <p className="text-sm">Enter code</p>

              <InputOTP
                maxLength={10}
                name="otp"
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                value={code}
                onChange={(value) => handleInput(value, "code")}
                className="grid grid-cols-10 gap-4"
              >
                {[...Array(10)].map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="font-semibold placeholder:text-dukiaBlue py-3.5 px-2.5 w-11 h-[50px] rounded-lg border-[1.5px] bg-transparent outline-none disabled:cursor-not-allowed border-dukiaBlue disabled:border-[#B9BBC8] shadow-md disabled:shadow-none"
                  />
                ))}
              </InputOTP>

              {codeError && <p className="text-red-500 text-xs">{codeError}</p>}
            </div>

            <Separator className="mt-7 mb-3" />

            <div className="space-y-1">
              <p className="text-sm">Re-enter code</p>

              <InputOTP
                maxLength={10}
                disabled={code.length !== 10}
                name="confirmOtp"
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                value={confirmCode}
                onChange={(value) => handleInput(value, "confirmCode")}
                className="grid grid-cols-10 gap-4"
              >
                {[...Array(10)].map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="font-semibold placeholder:text-dukiaBlue py-3.5 px-2.5 w-11 h-[50px] rounded-lg border-[1.5px] bg-transparent outline-none disabled:cursor-not-allowed border-dukiaBlue disabled:border-[#B9BBC8] shadow-md disabled:shadow-none"
                  />
                ))}
              </InputOTP>

              {confirmCodeError && (
                <p className="text-red-500 text-xs">{confirmCodeError}</p>
              )}
            </div>
          </div>

          <button
            onClick={submitCode}
            className="bg-dukiaBlue text-white rounded-lg py-3 px-4 mt-6"
          >
            Set Transaction Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetTransactionCodeModal;
