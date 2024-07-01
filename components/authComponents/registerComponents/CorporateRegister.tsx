import RegisterAuth from "@/api/auth/registerAuth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type JointRegisterProps = {
  tab: number;
  setTab: (tab: number) => void;
};

const CorporateRegister = ({ tab, setTab }: JointRegisterProps) => {
  const [company_contact_email, setCompanyEmail] = useState("");
  const [company_contact_telephone, setCompanyTel] = useState("");
  const [company_country_of_incorporation, setCompanyCountry] = useState("");
  const [company_date_of_incorporation, setCompanyDate] =
    useState("");
  const [dateOfIncorporation, setDateOfIncorporation] = useState<Dayjs | null>(
    null
  );
  const [company_name, setCompanyName] = useState("");
  const [company_phone, setCompanyPhone] = useState("");
  const [company_registered_address, setCompanyAddress] = useState("");
  const [company_registration_number, setCompanyRegNumber] = useState("");
  const [company_tax_identification_number, setCompanyTaxID] = useState<
    string | number
  >("");
  const [company_type, setCompanyType] = useState("");
  const [other_type, setOtherType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [referral_code, setReferralCode] = useState("");

  const { loading, registerCorporate } = RegisterAuth();

  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewConfirmPassword, setViewConfirmPassword] =
    useState<boolean>(false);
  const [validationMessages, setValidationMessages] = useState({
    length: "Password must be at least 8 characters long.",
    uppercase: "Password must contain at least one uppercase letter.",
    lowercase: "Password must contain at least one lowercase letter.",
    number: "Password must contain at least one number.",
    special: "Password must contain at least one special character.",
  });

  const valid = "2024-07-01";
  const dateFormat = "YYYY-MM-DD";

  const handleTaxIDInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure that the value only contains numbers
    if (/^[0-9-]*$/.test(value)) {
      setCompanyTaxID(value);
    }
  };

  const handleIncorpDateChange: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    setCompanyDate(dateString?.toString());
    setDateOfIncorporation(date);
  };

  const validatePassword = (password: string) => {
    const messages = {
      length:
        password.length >= 8
          ? ""
          : "Password must be at least 8 characters long.",
      uppercase: /[A-Z]/.test(password)
        ? ""
        : "Password must contain at least one uppercase letter.",
      lowercase: /[a-z]/.test(password)
        ? ""
        : "Password must contain at least one lowercase letter.",
      number: /[0-9]/.test(password)
        ? ""
        : "Password must contain at least one number.",
      special: /[!@#$%^&*]/.test(password)
        ? ""
        : "Password must contain at least one special character.",
    };
    setValidationMessages(messages);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const isTabOneValid = () => {
    return (
      company_name.trim() &&
      company_type.trim() &&
      company_tax_identification_number &&
      company_registration_number.trim() &&
      company_date_of_incorporation.trim() &&
      company_country_of_incorporation.trim() &&
      company_registered_address.trim()
    );
  }

  const isFormValid = () => {
    return (
      company_name.trim() &&
      company_type.trim() &&
      company_tax_identification_number &&
      company_registration_number.trim() &&
      company_date_of_incorporation.trim() &&
      company_country_of_incorporation.trim() &&
      company_registered_address.trim() &&
      phone.trim() &&
      email.trim() &&
      company_contact_email.trim() &&
      company_contact_telephone.trim() &&
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password) &&
      password === password_confirmation
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const formData = {
      company_contact_email,
      company_contact_telephone,
      company_country_of_incorporation,
      company_date_of_incorporation,
      company_name,
      company_phone,
      company_registered_address,
      company_registration_number,
      company_tax_identification_number,
      company_type,
      other_type,
      email,
      password,
      password_confirmation,
      phone,
      referral_code,
    };

    try {
      await registerCorporate(formData);
      setTab(1);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {tab === 1 && (
        <form className="space-y-4" onSubmit={() => setTab(2)}>
          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <label>
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              name="company_name"
              type="text"
              onChange={(e) => setCompanyName(e.target.value)}
              value={company_name}
              required
              placeholder="Dukia"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Type */}
          <div className="flex flex-col gap-2">
            <label>
              Type <span className="text-red-500">*</span>
            </label>
            <Select
              name="company_type"
              value={company_type}
              required
              onValueChange={(value) => setCompanyType(value)}
            >
              <SelectTrigger className="w-full focus:ring-transparent focus:ring-offset-0 border border-dukiaBlue/[15%] px-6 py-6 text-dukiaBlue/[50%] font-normal">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public Listed</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="individual">
                  Individual/Sole Proprietor
                </SelectItem>
                <SelectItem value="cooperative">Co-operative</SelectItem>
                <SelectItem value="trust">Trust</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Company TIN */}
          <div className="flex flex-col gap-2">
            <label>
              Company TIN <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9\-]*"
              name="company_tax_identification_number"
              onChange={handleTaxIDInputChange}
              value={company_tax_identification_number}
              placeholder="**********-****"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Company Registration Number */}
          <div className="flex flex-col gap-2">
            <label>
              Company Registration Number{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company_registration_number"
              onChange={(e) => setCompanyRegNumber(e.target.value)}
              value={company_registration_number}
              required
              placeholder="RC178290"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Date of Incorporation */}
          <div className="flex flex-col gap-2">
            <label>
              Date of Incorporation <span className="text-red-500">*</span>
            </label>
            <DatePicker
              name="company_date_of_incorporation"
              format={dateFormat}
              required
              value={dateOfIncorporation}
              onChange={handleIncorpDateChange}
              maxDate={dayjs(valid, dateFormat)}
              className="px-6 py-3.5 font-normal custom-ant-picker-focus"
            />
          </div>

          {/* Country of Incorporation */}
          <div className="flex flex-col gap-2">
            <label>
              Country of Incorporation <span className="text-red-500">*</span>
            </label>
            <Select
              name="company_country_of_incorporation"
              value={company_country_of_incorporation}
              required
              onValueChange={(value) => setCompanyCountry(value)}
            >
              <SelectTrigger className="w-full focus:ring-transparent focus:ring-offset-0 border border-dukiaBlue/[15%] px-6 py-6 text-dukiaBlue/[50%] font-normal">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="ghana">Ghana</SelectItem>
                <SelectItem value="nigeria">Nigeria</SelectItem>
                <SelectItem value="south-africa">South Africa</SelectItem>
                <SelectItem value="UK">United Kingdom</SelectItem>
                <SelectItem value="USA">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Registered Address */}
          <div className="flex flex-col gap-2">
            <label>
              Registered Address <span className="text-red-500">*</span>
            </label>
            <input
              name="company_registered_address"
              type="text"
              onChange={(e) => setCompanyAddress(e.target.value)}
              value={company_registered_address}
              required
              placeholder="3B, Olusola Olude Close, Gbagada Phase 2, Lagos"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          <div className="pt-2">
            <button disabled={!isTabOneValid()} className="bg-dukiaBlue w-full text-white mt-2 rounded-lg py-3 text-base disabled:bg-dukiaBlue/40 disabled:cursor-not-allowed">
              Continue
            </button>
          </div>
        </form>
      )}

      {tab === 2 && (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Company Phone No. */}
          <div className="flex flex-col gap-2">
            <label>
              Company Phone No. <span className="text-red-500">*</span>
            </label>
            <input
              name="company_phone"
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
                setCompanyPhone(e.target.value);
              }}
              value={company_phone}
              required
              placeholder="+234********"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Company Email */}
          <div className="flex flex-col gap-2">
            <label>
              Company Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="****@****.com"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label>
              Password <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center pr-6 bg-white border border-dukiaBlue/[15%] rounded-lg">
              <input
                className="py-4 px-6 outline-none font-normal placeholder:text-dukiaBlue/[50%] rounded-lg w-full"
                required
                onChange={handleChange}
                value={password}
                type={viewPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="*********"
              />

              {viewPassword ? (
                <EyeOff
                  className="text-dukiaBlue/[50%] cursor-pointer"
                  size={20}
                  onClick={() => setViewPassword(false)}
                />
              ) : (
                <Eye
                  className="text-dukiaBlue/[50%] cursor-pointer"
                  size={20}
                  onClick={() => setViewPassword(true)}
                />
              )}
            </div>

            {password && (
              <div className="text-red-500 text-xs mt-2 space-y-1 pl-6">
                {Object.values(validationMessages).map(
                  (msg, index) => msg && <p key={index}>{msg}</p>
                )}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label>
              Confirm Password <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center pr-6 bg-white border border-dukiaBlue/[15%] rounded-lg">
              <input
                className="py-4 px-6 outline-none font-normal placeholder:text-dukiaBlue/[50%] rounded-lg w-full"
                required
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                value={password_confirmation}
                type={viewConfirmPassword ? "text" : "password"}
                name="password_confirmation"
                id="password_confirmation"
                placeholder="*********"
              />

              {!viewConfirmPassword && (
                <Eye
                  className="text-dukiaBlue/[50%] cursor-pointer"
                  size={20}
                  onClick={() => {
                    setViewConfirmPassword(true);
                  }}
                />
              )}

              {viewConfirmPassword && (
                <EyeOff
                  className="text-dukiaBlue/[50%] cursor-pointer"
                  size={20}
                  onClick={() => {
                    setViewConfirmPassword(false);
                  }}
                />
              )}
            </div>

            {/* {password_confirmation && } */}

            {password_confirmation && password !== password_confirmation && (
              <p className="text-red-600 mt-2">
                The passwords don&apos;t match
              </p>
            )}
          </div>

          {/* Company's Contact Person Email */}
          <div className="flex flex-col gap-2">
            <label>
              Company Contact Person Email Address{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="company_contact_email"
              onChange={(e) => setCompanyEmail(e.target.value)}
              value={company_contact_email}
              required
              placeholder="****@****.com"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Company's Contact Person Telephone No. */}
          <div className="flex flex-col gap-2">
            <label>
              Company&apos;s Contact Person Telephone No.{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="company_contact_telephone"
              onChange={(e) => setCompanyTel(e.target.value)}
              value={company_contact_telephone}
              required
              placeholder="+234**********"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Referral Code */}
          <div className="flex flex-col gap-2">
            <label>Referral Code (Optional)</label>
            <input
              type="text"
              inputMode="numeric"
              name="referral_code"
              disabled
              onChange={(e) => setReferralCode(e.target.value)}
              value={referral_code}
              placeholder="123232455"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          <div className="pt-2">
            <button disabled={!isFormValid()} className="bg-dukiaBlue w-full text-white mt-2 rounded-lg py-3 text-base disabled:bg-dukiaBlue/40 disabled:cursor-not-allowed">
              Create Corporate Gold Account
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default CorporateRegister;
