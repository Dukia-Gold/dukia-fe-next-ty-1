import useSell from "@/api/trading/sell";
import { formatCurrency } from "@/lib/currencyformatter";
import useFind from "@/lib/findById";
import { capitalizeFirstLetter } from "@/lib/formatText";
import useModalsStore from "@/store/modalsStore";
import { useModalStore } from "@/store/modalStore";
import { userStore } from "@/store/user";
import { Info, X } from "lucide-react";
import React from "react";

const GiftingModal = () => {
  const openModal = useModalStore((state) => state.openModal);
  const [itemDetails, setItemDetails] = React.useState<any>(null);
  const [balance, setBalance] = React.useState<any>(null);
  const user = userStore((state: any) => state.user);
  const gifting = useModalsStore((state: any) => state.gifting);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const [quantity, setQuantity] = React.useState(1);

  const { findItemById, findBalanceById } = useFind();

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleSell = () => {
    const cart = {
      quantity,
      total: itemDetails?.bid_price * quantity,
      unitPrice: itemDetails?.bid_price,
    };

    openModal({
      type: "confirm",
      title: "Confirm Payment",
      message: `Sure to continue with the withdrawal of ${formatCurrency(
        cart.total
      )} ?`,
      onConfirm: async () => {},
    });
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
                    Recipient (account number or email)
                  </label>

                  <input
                    type="text"
                    className="w-full border-2 p-4 rounded-lg border-[#E8E9ED] placeholder:text-[#979BAE]"
                    placeholder="SIP**********"
                  />
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

              <button className="w-full rounded-lg bg-dukiaBlue text-white font-semibold p-3">
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
