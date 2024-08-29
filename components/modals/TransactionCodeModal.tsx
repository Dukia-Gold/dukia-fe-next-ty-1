import { capitalizeFirstLetter } from "@/lib/formatText";
import useLoadingStore from "@/store/loadingStore";
import useModalsStore from "@/store/modalsStore";
import { useModalStore } from "@/store/modalStore";
import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";

const TransactionCodeModal = () => {
  const [error, setError] = useState<string>("");
  const transactionCode = useModalsStore((state: any) => state.transactionCode);
  const message = useModalsStore((state: any) => state.message);
  const token = useModalsStore((state: any) => state.token);
  const payload = useModalsStore((state: any) => state.payload);
  const attemptsLeft = useModalsStore((state: any) => state.attemptsLeft);
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const openModal = useModalStore((state) => state.openModal);

  const extractPositions = (message: string) => {
    const match = message.match(/\d+/g);
    return match ? match.map((pos) => parseInt(pos, 10)) : [];
  };

  // Extracted positions (Convert them to zero-indexed)
  const positionsToEnable = extractPositions(message).map((pos) => pos - 1);

  // Initialize state for all inputs
  const [inputValues, setInputValues] = useState<string[]>(Array(10).fill(""));

  // Initialize disabled state based on extracted positions
  const inputs = Array(10)
    .fill({ disabled: true })
    .map((_, index) => ({
      id: `input${index + 1}`,
      disabled: !positionsToEnable.includes(index),
    }));

  // Handle input change
  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value.length <= 1 && /^[a-zA-Z0-9]?$/.test(value)) {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
      }
    };

  // Merge values of enabled inputs
  const mergedValues = inputValues
    .filter((_, index: any) => !inputs[index].disabled) // Only take enabled inputs
    .join(""); // Merge them into a single string

  const updatedPayload = {
    ...payload, // Spread the original payload object to keep existing values
    missing_digits: mergedValues, // Add or update the key-value pair
  };

  const handleSubmit = async () => {
    if (mergedValues.length === 4) {
      updateLoading(true);
      try {
        const response = await axios({
          url: "https://api.dukiapreciousmetals.co/api/v2/sell-order",
          method: "POST",
          data: updatedPayload,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        });
        if (response.status === 200 && response.data.response_data) {
          setInputValues(Array(10).fill("")); // Reset all inputs to empty strings
          setError(""); // Reset error message
          updateModals({
            transactionCode: false,
            payload: {},
            token: "",
            message: "",
            attemptsLeft: "",
          });
          openModal({
            type: "success",
            title: "Transaction Successful!",
            message: `${response.data.response_data}. You'll receive your funds in your bank account shortly. Please check your account balance for the updated amount.`,
          });
          updateLoading(false);
        }
      } catch (error: any) {
        if (error.response) {
          const { status, data } = error.response;

          if (status === 401) {
            setError(data.message);
            updateModals({ attemptsLeft: data.attempts_left });
          } else if (
            data.message ===
            "Your account has been suspended. Please contact support."
          ) {
            openModal({
              type: "error",
              title: "Account suspended!",
              message:
                "Your account has been suspended. Please contact support.",
            });

            setInputValues(Array(10).fill("")); // Reset all inputs to empty strings
            setError(""); // Reset error message
            updateModals({
              transactionCode: false,
              payload: {},
              token: "",
              message: "",
              attemptsLeft: "",
            });
          } else {
            openModal({
              type: "error",
              title: "Error!",
              message: `${error.response.data.message}`,
            });

            setInputValues(Array(10).fill("")); // Reset all inputs to empty strings
            setError(""); // Reset error message
            updateModals({
              transactionCode: false,
              payload: {},
              token: "",
              message: "",
              attemptsLeft: "",
            });
          }
        } else {
          openModal({
            type: "error",
            title: "Network Error!",
            message:
              "Error connecting to the server. Please check your internet connection and try again.",
          });

          setInputValues(Array(10).fill("")); // Reset all inputs to empty strings
          setError(""); // Reset error message
          updateModals({
            transactionCode: false,
            payload: {},
            token: "",
            message: "",
            attemptsLeft: "",
          });
        }

        updateLoading(false);
      }
    } else {
      alert("Please enter a valid transaction code");
    }
  };

  if (transactionCode === false || transactionCode === undefined) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out text-dukiaBlue rounded-lg py-5 w-[95%] md:w-[38.3125rem] px-6">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Transaction Code</p>

          <button
            onClick={() => {
              setInputValues(Array(10).fill("")); // Reset all inputs to empty strings
              setError(""); // Reset error message
              updateModals({
                transactionCode: false,
                payload: {},
                token: "",
                message: "",
                attemptsLeft: "",
              });
            }}
            className="p-2.5 bg-dukiaBlue/[5%] rounded-[50%]"
          >
            <X width={18} height={18} />
          </button>
        </div>

        <div className="mt-2 pt-10 space-y-4 flex flex-col items-center">
          <div className="space-y-7">
            <div className="flex items-center justify-center gap-1">
              {inputs.map((input, index) => (
                <input
                  key={input.id}
                  type="password"
                  id={input.id}
                  disabled={input.disabled}
                  placeholder={input.disabled ? "*" : "_"}
                  maxLength={1}
                  value={inputValues[index]}
                  onChange={handleChange(index)}
                  className="font-semibold placeholder:text-dukiaBlue py-3.5 px-2.5 w-8 h-12 rounded-lg border-[1.5px] bg-transparent outline-none disabled:cursor-not-allowed border-dukiaBlue disabled:border-[#B9BBC8] shadow-md disabled:shadow-none"
                />
              ))}
            </div>

            <div className="font-semibold space-y-1 text-center">
              <p>Enter missing transaction characters</p>
              {error && <p className="text-xs text-red-600">{error}</p>}
              <p className="text-xs text-red-600">
                {capitalizeFirstLetter(attemptsLeft)}
              </p>
              <p className="text-xs text-[#676D88] hover:underline">
                Forgot code?
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!mergedValues || mergedValues.length < 4}
            className="bg-dukiaBlue rounded-lg py-3 px-11 text-white disabled:bg-dukiaBlue/[50%] disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCodeModal;
