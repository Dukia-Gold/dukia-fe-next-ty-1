import useModalsStore from "@/store/modalsStore";
import React from "react";

const SellModal = () => {
  const sell = useModalsStore((state: any) => state.sell);
  const sellProductId = useModalsStore((state: any) => state.sellProductId);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleSell = () => {
    // Handle the sell action here
    console.log(`Selling ${quantity} items`);
    updateModals({ sell: false });
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

            <div className="space-y-1 mb-4 font-semibold">
              <label htmlFor="" className="text-[#676D88]">
                Asset
              </label>

              <input
                type="text"
                value={sellProductId}
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
