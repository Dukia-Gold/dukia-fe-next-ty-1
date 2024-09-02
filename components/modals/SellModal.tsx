import useSell from "@/api/trading/sell";
import { formatCurrency } from "@/lib/currencyformatter";
import useFind from "@/lib/findById";
import { capitalizeFirstLetter } from "@/lib/formatText";
import { fullProductsStore } from "@/store/fullProducts";
import useModalsStore from "@/store/modalsStore";
import { useModalStore } from "@/store/modalStore";
import { userStore } from "@/store/user";
import { Info } from "lucide-react";
import React from "react";

const SellModal = () => {
  const { sellDiscrete } = useSell();
  const openModal = useModalStore((state) => state.openModal);
  const [itemDetails, setItemDetails] = React.useState<any>(null);
  const user = userStore((state: any) => state.user);
  const sell = useModalsStore((state: any) => state.sell);
  const sellProductId = useModalsStore((state: any) => state.sellProductId);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const [quantity, setQuantity] = React.useState(1);

  const bankDetails = [
    {
      Bank: user?.bank_account_bank_name,
      Account_name: user?.bank_account_name,
      Account_number: user?.bank_account_number,
      Email_address: user?.email,
    },
  ];

  const { findItemById } = useFind();

  React.useEffect(() => {
    const details = findItemById(sellProductId);
    setItemDetails(details);
  }, [findItemById, sellProductId]); // Dependencies: update when fullProducts or id changes

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleSell = () => {
    openModal({
      type: "confirm",
      title: "Confirm Payment",
      message: `Sure to continue with the withdrawal of ${formatCurrency(
        itemDetails?.bid_price * quantity
      )} ?`,
      onConfirm: async () => {
        await sellDiscrete(sellProductId, quantity, itemDetails.bid_price);
        console.log(`Selling ${quantity} items`);
        updateModals({ sell: false });
      },
    });
  };

  return (
    <>
      {sell && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl border-[0.5px] shadow-lg py-5 px-6 w-full max-w-[613px] text-dukiaBlue">
            <button
              className="text-gray-500 hover:text-gray-700 float-right"
              onClick={() => {
                updateModals({ sell: false });
              }}
            >
              &times;
            </button>
            <div className="mb-4 font-semibold">
              <h2 className="text-xl">Sell (Withdraw)</h2>
              <p className="text-xs text-[#676D88]">
                To be sent into your registered bank account.
              </p>
            </div>

            <div className="p-2 rounded-xl border border-[#E8E9ED] mb-4">
              <div className="rounded-lg border-[0.5px] bg-[#FBF7EB] border-[#E8E9ED] pr-6 p-2 space-y-2">
                <div className="flex items-center justify-between font-semibold text-xs">
                  <div className="flex items-center space-x-2">
                    <Info width={18} height={18} fill="#1C254E" stroke="#fff" />
                    <p>Your bank information</p>
                  </div>

                  <p className="text-[#43BA64]">
                    Edit Details?{" "}
                    <span className="text-dukiaBlue underline">
                      Contact Support
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pl-6 text-[10px]">
                  {Object.entries(bankDetails[0]).map(([key, value], index) => (
                    <div
                      key={index}
                      className="col-span-1 bg-white rounded-lg border border-[#E8E9ED] py-3.5 px-1.5 space-y-1"
                    >
                      <p className="text-[#676D88]">{key.replace(/_/g, " ")}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-1 mb-4 font-semibold">
              <label htmlFor="" className="text-[#676D88]">
                Asset
              </label>

              <input
                type="text"
                value={
                  itemDetails?.name
                    ? itemDetails?.name
                    : capitalizeFirstLetter(sellProductId)
                }
                disabled
                className="w-full p-4 text-[#979BAE] mb-4 outline-none rounded-lg disabled:bg-[#E8E9ED]"
              />
            </div>

            <div className="space-y-1 mb-4 font-semibold">
              <label htmlFor="" className="text-[#676D88] text-sm">
                Quantity
              </label>

              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-full p-4 text-[#979BAE] border-[#E8E9ED] mb-4 outline-none rounded-lg border-[1.5px]"
              />
            </div>

            <p className="text-xs mb-4">
              {itemDetails?.name
                ? itemDetails?.name
                : capitalizeFirstLetter(sellProductId)}{" "}
              ~{" "}
              <span className="font-semibold">
                {formatCurrency(itemDetails?.bid_price)}
              </span>
            </p>

            <button
              onClick={handleSell}
              disabled={quantity === 0}
              className="w-full bg-dukiaBlue text-white p-3 rounded-lg disabled:cursor-not-allowed disabled:bg-dukiaBlue/[50%]"
            >
              Withdraw
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SellModal;
