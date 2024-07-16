import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userStore } from "@/store/user";
import { Spin } from "antd";

const Others = () => {
  const user = userStore((state: any) => state.user);

  return (
    <>
      {user ? (
        <form className="rounded-lg p-3 md:p-6 bg-white space-y-10 text-dukiaBlue">
          {/* Personal Details */}
          <div className="space-y-6">
            {/* Texts */}
            <div className="space-y-1">
              <p className="font-bold text-lg">Personal Details</p>
              <p>Please enter your personal details here</p>
            </div>

            {/* Form */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  disabled
                  value={user.first_name}
                  className="py-4 px-6 border rounded-lg disabled:cursor-not-allowed"
                />
              </div>

              {/* Middle Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="middleName" className="font-semibold">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  disabled
                  value={user.middle_name}
                  className="py-4 px-6 border rounded-lg disabled:cursor-not-allowed"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  disabled
                  value={user.last_name}
                  className="py-4 px-6 border rounded-lg disabled:cursor-not-allowed"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  disabled
                  value={user.email}
                  className="py-4 px-6 border rounded-lg disabled:cursor-not-allowed"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  disabled
                  value={user.phone}
                  className="py-4 px-6 border rounded-lg disabled:cursor-not-allowed"
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col gap-2">
                <label htmlFor="gender" className="font-semibold">
                  Gender
                </label>
                <Select
                  name="gender"
                  value={user.gender === null ? undefined : user.gender}
                  disabled
                >
                  <SelectTrigger className="w-full focus:ring-transparent focus:ring-offset-0 border border-dukiaBlue/[15%] px-6 py-6 text-dukiaBlue/[50%] font-normal">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-6">
            {/* Texts */}
            <p className="font-bold text-lg">Address</p>

            {/* Address Line 1 */}
            <div className="flex flex-col gap-2 text-sm">
              <label htmlFor="addressLine1" className="font-semibold">
                Address Line 1
              </label>
              <input
                type="text"
                name="addressLine1"
                required
                value={user.address_line_1 === null ? undefined : user.address_line_1}
                className="py-4 px-6 border rounded-lg disabled:cursor-not-allowed outline-none"
              />
            </div>

            {/* Form */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {/* Residential Country */}
              <div className="flex flex-col gap-2">
                <label htmlFor="residentialCountry" className="font-semibold">
                  Residential Country
                </label>
                <Select
                  name="residentialCountry"
                  value={user.country === null ? undefined : user.country}
                  disabled
                >
                  <SelectTrigger className="w-full focus:ring-transparent focus:ring-offset-0 border border-dukiaBlue/[15%] px-6 py-6 text-dukiaBlue/[50%] font-normal">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Nigeria</SelectItem>
                    <SelectItem value="female">Ghana</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Residential State */}
              <div className="flex flex-col gap-2">
                <label htmlFor="gender" className="font-semibold">
                  Residential State
                </label>
                <Select
                  name="gender"
                  value={user.gender === null ? undefined : user.gender}
                  disabled
                >
                  <SelectTrigger className="w-full focus:ring-transparent focus:ring-offset-0 border border-dukiaBlue/[15%] px-6 py-6 text-dukiaBlue/[50%] font-normal">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Lagos</SelectItem>
                    <SelectItem value="female">Abuja</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Residential City */}
              <div className="flex flex-col gap-2">
                <label htmlFor="residentailCity" className="font-semibold">
                  Residential City
                </label>
                <input
                  type="text"
                  name="residentailCity"
                  className="py-4 px-6 border rounded-lg disabled:cursor-not-allowed outline-none"
                />
              </div>

              {/* Residential Zip Code */}
              <div className="flex flex-col gap-2">
                <label htmlFor="residentailZipCode" className="font-semibold">
                  Residential Zip Code
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  name="residentailZipCode"
                  className="py-4 px-6 border rounded-lg disabled:cursor-not-allowed outline-none"
                />
              </div>
            </div>
          </div>

          <button className="bg-dukiaBlue py-3.5 px-6 text-sm font-semibold text-white rounded-lg">
            Submit Details
          </button>
        </form>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Spin size="large" className="mt-4" />
        </div>
      )}
    </>
  );
};

export default Others;
