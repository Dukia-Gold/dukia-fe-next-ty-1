import useSell from "@/api/trading/sell";
import { formatCurrency } from "@/lib/currencyformatter";
import { fetchNameByAccNum } from "@/lib/fetchNameByAccNum";
import useFind from "@/lib/findById";
import { capitalizeFirstLetter } from "@/lib/formatText";
import useModalsStore from "@/store/modalsStore";
import { useModalStore } from "@/store/modalStore";
import { Info, X } from "lucide-react";
import React from "react";

interface User {
  status: string;
  message?: string;
  data?: {
    account_number: string;
    first_name: string;
    middle_name: string;
    last_name: string;
  };
}

const GiftingModal = () => {
  const openModal = useModalStore((state) => state.openModal);
  const gifting = useModalsStore((state: any) => state.gifting);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const [accountNumber, setAccountNumber] = React.useState("");
  const [username, setUsername] = React.useState<User | null>(null);

  React.useEffect(() => {
    const fetchName = async () => {
      const digitCount = accountNumber.replace(/\D/g, "").length;
      if (digitCount === 11 && !username) {
        const user = await fetchNameByAccNum(accountNumber);
        setUsername(user ? user : "Network error. Please, try again later");
      } else if (digitCount < 11) {
        setUsername(null);
      }
    };

    fetchName();
  }, [accountNumber, username]);

  const [quantity, setQuantity] = React.useState(1);

  const [balance, setBalance] = React.useState<any>(null);
  const { findBalanceById } = useFind();
  React.useEffect(() => {
    const fetchBalance = async () => {
      const balanceData = await findBalanceById("pool-allocated-1g");
      setBalance(balanceData);
    };

    fetchBalance();
  }, [findBalanceById]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <>
      {gifting && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl border-[0.5px] shadow-lg py-5 px-6 w-full max-w-[613px] text-dukiaBlue">
            <button
              className="bg-[#E8E9ED] hover:bg-gray-700 hover:text-white float-right rounded-full p-2"
              onClick={() => {
                updateModals({ gifting: false });
              }}
            >
              <X width={16} height={16} />
            </button>

            <div className="mb-9 font-semibold">
              <h2>Gold Gifting</h2>
              <p className="text-xs text-[#676D88]">
                Transfer gold to another Dukia account holder.
              </p>
            </div>

            <div className="mb-9">
              <div className="mb-5 font-semibold space-y-5">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="" className="text-sm text-[#676D88]">
                    Recipient (account number)
                  </label>

                  <input
                    type="text"
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full border-2 p-4 rounded-lg border-[#E8E9ED] placeholder:text-[#979BAE]"
                    placeholder="SIP**********"
                  />

                  <p
                    className={`${
                      username?.status === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    } text-xs font-bold`}
                  >
                    {username?.data
                      ? `${capitalizeFirstLetter(
                          username.data.first_name
                        )} ${capitalizeFirstLetter(
                          username.data.middle_name
                        )} ${capitalizeFirstLetter(username.data.last_name)}`
                      : username?.message ||
                        (accountNumber && "Enter complete account number")}
                  </p>
                </div>

                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between text-sm">
                    <label htmlFor="" className="text-[#676D88]">
                      Amount in grams
                    </label>

                    <p>
                      Bal: {balance.total_weight}
                      {balance.total_weight_unit}
                    </p>
                  </div>

                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={0.0001}
                    step={0.0001}
                    pattern="[0-9]*.?[0-9]*"
                    placeholder="0.09"
                    className={`${
                      quantity > balance.total_weight &&
                      "outline-red-600 border-red-600"
                    } w-full border-2 p-4 rounded-lg border-[#E8E9ED] placeholder:text-[#979BAE]`}
                  />

                  <div className="flex text-xs justify-between">
                    <p>Fee: </p>

                    <p>Total:</p>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="" className="text-sm text-[#676D88]">
                    Description (optional)
                  </label>

                  <input
                    type="text"
                    className="w-full border-2 p-4 rounded-lg border-[#E8E9ED] placeholder:text-[#979BAE]"
                    placeholder="Write remark..."
                  />
                </div>
              </div>

              <button
                disabled={
                  quantity < 0.0001 ||
                  quantity > Number(balance.total_weight) ||
                  !username
                }
                className="w-full rounded-lg bg-dukiaBlue disabled:bg-dukiaBlue/[50%] disabled:cursor-not-allowed text-white font-semibold p-3"
              >
                Gift
              </button>
            </div>

            <div className="mb-9"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default GiftingModal;
