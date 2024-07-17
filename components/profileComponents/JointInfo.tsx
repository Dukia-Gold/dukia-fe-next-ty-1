import { capitalizeFirstLetter } from "@/lib/formatText";
import { userStore } from "@/store/user";
import { Info } from "lucide-react";

const JointInfo = () => {
  const user = userStore((state: any) => state.user);

  let formattedDate = new Date(user.updated_at).toISOString().split("T")[0];

  return (
    <div className="bg-white p-3 md:p-6 rounded-lg space-y-10 text-dukiaBlue">
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="font-bold text-lg/6">Joint Details</p>
          <p>Here are your joint details</p>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <p className="font-bold text-base/5">Primary Account</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="font-semibold">
                  First Name
                </label>
                <input
                  name="first_name"
                  disabled
                  type="text"
                  placeholder={capitalizeFirstLetter(user.first_name)}
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Middle Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="middle_name" className="font-semibold">
                  Middle Name
                </label>
                <input
                  name="middle_name"
                  disabled
                  type="text"
                  placeholder={capitalizeFirstLetter(user.middle_name)}
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="last_name" className="font-semibold">
                  Last Name
                </label>
                <input
                  name="last_name"
                  disabled
                  type="text"
                  placeholder={capitalizeFirstLetter(user.last_name)}
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  name="email"
                  disabled
                  type="email"
                  placeholder={user.email}
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number
                </label>
                <input
                  name="tel"
                  disabled
                  type="phone"
                  placeholder={user.phone}
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
                <label htmlFor="bank_name" className="font-semibold">
                  Address
                </label>
                <textarea
                  name="address"
                  disabled
                  placeholder={
                    user.address_line_1 || user.address_line_2
                      ? (user.address_line_1, user.address_line_2)
                      : "N/A"
                  }
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-bold text-base/5">Applicant Two</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="font-semibold">
                  First Name
                </label>
                <input
                  name="first_name"
                  disabled
                  type="text"
                  placeholder={capitalizeFirstLetter(user.first_name2)}
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Middle Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="middle_name" className="font-semibold">
                  Middle Name
                </label>
                <input
                  name="middle_name"
                  disabled
                  type="text"
                  placeholder={capitalizeFirstLetter(user.middle_name2)}
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="last_name" className="font-semibold">
                  Last Name
                </label>
                <input
                  name="last_name"
                  disabled
                  type="text"
                  placeholder={capitalizeFirstLetter(user.last_name2)}
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  name="email"
                  disabled
                  type="email"
                  placeholder={user.email2}
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number
                </label>
                <input
                  name="tel"
                  disabled
                  type="phone"
                  placeholder={user.phone2}
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                />
              </div>

              {/* Verified On */}
              <div className="flex flex-col gap-2">
                <label htmlFor="verified_on" className="font-semibold">
                  Verified On
                </label>
                <input
                  name="verified_on"
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
                  placeholder={user.is_verified2 === 1 ? "Verified" : "Not Verified"}
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
                  placeholder={
                    user.address_line_1 || user.address_line_2
                      ? (user.address_line_1, user.address_line_2)
                      : "N/A"
                  }
                  className="px-6 py-4 border rounded-lg border-dukiaBlue/[15%] placeholder:text-dukiaBlue placeholder:text-font-medium"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Bank Information */}
          <div className="space-y-6">
            <p className="font-bold text-lg/6">Bank Information</p>

            {/* Bank Information */}
            <div className="grid md:grid-cols-3 gap-4 text-sm">
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

export default JointInfo;
