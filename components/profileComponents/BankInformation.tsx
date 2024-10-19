import { capitalizeFirstLetter } from "@/lib/formatText";

const BankInformation = ({ user }: { user: any }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold">
        {/* Bank Name */}
        <div>
          <label className="block text-sm text-[#676D88] mb-1">Bank Name</label>
          <input
            type="text"
            disabled
            value={capitalizeFirstLetter(user.bank_account_bank_name) || "N/A"}
            className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
          />
        </div>

        {/* Account Number */}
        <div>
          <label className="block text-sm text-[#676D88] mb-1">
            Account Number
          </label>
          <input
            type="text"
            disabled
            value={user.bank_account_number ? user.bank_account_number.replace(/\d(?=\d{4})/g, '*') : "N/A"}
            className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
          />
        </div>

        {/* Account Name */}
        <div>
          <label className="block text-sm text-[#676D88] mb-1">
            Account Name
          </label>
          <input
            type="text"
            disabled
            value={capitalizeFirstLetter(user.bank_account_name) || "N/A"}
            className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BankInformation;
