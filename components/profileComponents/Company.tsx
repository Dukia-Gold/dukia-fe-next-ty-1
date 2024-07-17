import { capitalizeFirstLetter } from "@/lib/formatText";
import { userStore } from "@/store/user";
import { Info } from "lucide-react";

const CompanyInfo = () => {
  const user = userStore((state: any) => state.user);

  let formattedDate = new Date(user.updated_at).toISOString().split("T")[0];

  return (
    <div className="bg-white p-6 rounded-lg space-y-10 text-dukiaBlue">
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="font-bold text-lg/6">Company Details</p>
          <p>Here are your company&apos;s details</p>
        </div>

        <div className="space-y-14">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {/* Company Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="company_name" className="font-semibold">
                Company Name
              </label>
              <input
                name="company_name"
                disabled
                type="text"
                placeholder={capitalizeFirstLetter(user.company_name)}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Company TIN */}
            <div className="flex flex-col gap-2">
              <label htmlFor="company_tin" className="font-semibold">
                Company TIN
              </label>
              <input
                name="company_tin"
                disabled
                type="text"
                placeholder={capitalizeFirstLetter(
                  user.company_tax_identification_number
                )}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Company Registration Number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="company_reg_no" className="font-semibold">
                Company Registration Number
              </label>
              <input
                name="company_reg_no"
                disabled
                type="text"
                placeholder={capitalizeFirstLetter(
                  user.company_registration_number
                )}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Company Type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="company_type" className="font-semibold">
                Company Type
              </label>
              <input
                name="company_type"
                disabled
                type="text"
                placeholder={user.company_type}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Country of Incorporation */}
            <div className="flex flex-col gap-2">
              <label htmlFor="country" className="font-semibold">
                Country of Incorporation
              </label>
              <input
                name="text"
                disabled
                type="country"
                placeholder={user.company_country_of_incorporation}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Date of Incorporation */}
            <div className="flex flex-col gap-2">
              <label htmlFor="dateOfIncorporation" className="font-semibold">
                Date of Incorporation
              </label>
              <input
                name="text"
                disabled
                type="dateOfIncorporation"
                placeholder={user.company_country_of_incorporation}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Company Email Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">
                Company Email Address
              </label>
              <input
                name="email"
                disabled
                type="email"
                placeholder={user.email}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Company Email Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">
                Company Email Address
              </label>
              <input
                name="email"
                disabled
                type="email"
                placeholder={user.email}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Company Phone Number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-semibold">
                Company Phone Number
              </label>
              <input
                name="phone"
                disabled
                type="tel"
                placeholder={user.phone}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Contact Person Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact_phone" className="font-semibold">
                Contact Person Phone
              </label>
              <input
                name="contact_phone"
                disabled
                type="tel"
                placeholder={user.company_contact_telephone}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Contact Person Email Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact_email" className="font-semibold">
                Contact Person Email
              </label>
              <input
                name="contact_email"
                disabled
                type="email"
                placeholder={user.company_contact_email}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Verified On */}
            <div className="flex flex-col gap-2">
              <label htmlFor="bank_name" className="font-semibold">
                Verified On
              </label>
              <input
                name="bank_name"
                disabled
                type="text"
                placeholder={formattedDate}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* KYC Verification */}
            <div className="flex flex-col gap-2">
              <label htmlFor="kyc_verification" className="font-semibold">
                KYC Verification
              </label>
              <input
                name="kyc_verification"
                disabled
                type="text"
                placeholder={user.is_verified === 1 ? "Verified" : "Not Verified"}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2 lg:col-span-2">
              <label htmlFor="address" className="font-semibold">
                Address
              </label>
              <textarea
                name="address"
                disabled
                placeholder={user.company_registered_address}
                className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
              ></textarea>
            </div>
          </div>

          {/* Bank Information */}
          <div className="space-y-6">
            <p className="font-bold text-lg/6">Bank Information</p>

            {/* Bank Information */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              {/* Bank Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="bank_name" className="font-semibold">
                  Bank Name
                </label>
                <input
                  name="bank_name"
                  disabled
                  type="text"
                  placeholder={
                    user.bank_account_bank_name
                      ? user.bank_account_bank_name
                      : "N/A"
                  }
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Account Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="bank_name" className="font-semibold">
                  Account Name
                </label>
                <input
                  name="bank_name"
                  disabled
                  type="text"
                  placeholder={
                    user.bank_account_name ? user.bank_account_name : "N/A"
                  }
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Account Number */}
              <div className="flex flex-col gap-2">
                <label htmlFor="bank_name" className="font-semibold">
                  Account Number
                </label>
                <input
                  name="bank_name"
                  disabled
                  type="text"
                  placeholder={
                    user.bank_account_number ? user.bank_account_number : "N/A"
                  }
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5 text-sm">
        <Info width={24} height={24} fill="#111247" stroke="#fff" />
        <p>
          To update your account information, please contact{" "}
          <span className="underline font-bold">SUPPORT</span>
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
