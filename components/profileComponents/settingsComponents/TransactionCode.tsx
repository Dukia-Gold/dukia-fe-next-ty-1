import useModalsStore from "@/store/modalsStore";
import React from "react";

const TransactionCode: React.FC<{ user: any }> = ({ user }) => {
  const { updateModals } = useModalsStore((state: any) => ({
    updateModals: state.updateModals,
  }));
  const [mode, setMode] = React.useState<"set" | "reset" | null>(null);
  const requirements = [
    "Middle Name",
    "Residential Address",
    "Employment Information",
    "Source of Funds",
    "Phone Number",
    "Bank Account Information",
    "ID Upload",
    "Utility Bill Document Upload",
    "Liveness Test",
  ];

  return (
    <div className="py-10 px-6">
      <div className="font-semibold flex gap-1">
        {!user.isTransactionCodeSet && (
          <button
            onClick={() => {
              setMode("set");
              updateModals({
                setTransactionCode: true,
              });
            }}
            className="py-3 px-4 cursor-pointer hover:underline"
          >
            Set up code
          </button>
        )}

        <button
          disabled={!user.isTransactionCodeSet}
          onClick={() => setMode(mode === "reset" ? null : "reset")}
          className="py-3 px-4 disabled:cursor-not-allowed bg-[#E8E9ED] rounded-lg"
        >
          Reset code
        </button>
      </div>

      {mode === "reset" && (
        <div className="space-y-10 mt-5">
          <div className="text-sm font-semibold space-y-6">
            <p>
              In order to protect your account, you must verify KYC. The
              following are the required information for your Tier:
            </p>

            <ol className="list-decimal list-inside text-[#676D88] space-y-3">
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="flex gap-10 text-white font-semibold">
            <button className="bg-dukiaBlue rounded-lg py-3 px-4">
              Continue KYC
            </button>
            <button className="bg-dukiaBlue rounded-lg py-3 px-4">
              Continue Liveness Test
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionCode;
