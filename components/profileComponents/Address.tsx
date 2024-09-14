import { capitalizeFirstLetter } from "@/lib/formatText";

const Address = ({ user }: { user: any }) => {
  return (
    <div className="px-6 py-10 border-t">
      <div className="grid grid-cols-2 gap-6 font-semibold">
        <div className="col-span-2">
          <label htmlFor="street" className="block text-sm text-[#676D88] mb-1">
            Address Line 1
          </label>
          <input
            type="text"
            id="address_line_1"
            name="address_line_1"
            disabled
            value={user.address_line_1 || "N/A"}
            className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
          />
        </div>

        {/* Address Line 2  */}
        <div className="col-span-2">
          <label htmlFor="city" className="block text-sm text-[#676D88] mb-1">
            Address Line 2
          </label>
          <input
            type="text"
            id="address_line_2"
            name="address_line_2"
            disabled
            value={user.address_line_2 || "N/A"}
            className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
          />
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm text-[#676D88] mb-1"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={
              capitalizeFirstLetter(user.type) === "Individual" ||
              capitalizeFirstLetter(user.type) === "Joint"
                ? user.country
                : user.company_country_of_incorporation || "N/A"
            }
            disabled
            className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
          />
        </div>

        {/* State/Province */}
        <div>
          <label htmlFor="state" className="block text-sm text-[#676D88] mb-1">
            State/Province
          </label>
          <input
            type="text"
            id="state"
            name="state"
            disabled
            value={user.state || "N/A"}
            className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm text-[#676D88] mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            disabled
            value={user.city || "N/A"}
            className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
          />
        </div>

        {/* Zip/Postal Code */}
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm text-[#676D88] mb-1"
          >
            Zip/Postal Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            disabled
            value={user.zip_code || "N/A"}
            className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
