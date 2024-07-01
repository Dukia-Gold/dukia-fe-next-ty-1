import { DatePicker, DatePickerProps } from "antd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import RegisterAuth from "@/api/auth/registerAuth";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type RegisterProps = {
  tab: number;
  setTab: (tab: number) => void;
};

dayjs.extend(customParseFormat);

const IndividualRegister = ({ tab, setTab }: RegisterProps) => {
  const [first_name, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [birthdayVal, setBirthdayVal] = useState<Dayjs | null>(null);
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const { registerIndividual } = RegisterAuth();

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

  const adult = "2006-07-01";
  const dateFormat = "YYYY-MM-DD";

  const handleDOBChange: DatePickerProps["onChange"] = (date, dateString) => {
    setBirthdayVal(date);
    setBirthday(dateString?.toString());
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
      first_name.trim() &&
      last_name.trim() &&
      email.trim() &&
      phone.trim()
    );
  }

  const isFormValid = () => {
    return (
      first_name.trim() &&
      last_name.trim() &&
      email.trim() &&
      phone.trim() &&
      nationality.trim() &&
      gender.trim() &&
      birthday.trim() &&
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
      first_name,
      middleName,
      last_name,
      email,
      phone,
      nationality,
      gender,
      birthday,
      password,
      password_confirmation,
    };

    try {
      await registerIndividual(formData);
      setTab(1);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {tab === 1 && (
        <form className="space-y-4" onSubmit={() => setTab(2)}>
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label>
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              name="first_name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={first_name}
              required
              placeholder="Dukia"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Middle Name */}
          <div className="flex flex-col gap-2">
            <label>Middle Name</label>
            <input
              type="text"
              name="middle_name"
              onChange={(e) => setMiddleName(e.target.value)}
              value={middleName}
              placeholder="Precious"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <label>
              Last Name (Surname) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              onChange={(e) => setLastName(e.target.value)}
              value={last_name}
              required
              placeholder="Metals"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label>
              Email <span className="text-red-500">*</span>
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

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label>
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
              placeholder="+234**********"
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
          {/* Nationality */}
          <div className="flex flex-col gap-2">
            <label>
              Nationality <span className="text-red-500">*</span>
            </label>
            <input
              name="nationality"
              type="text"
              onChange={(e) => setNationality(e.target.value)}
              value={nationality}
              required
              placeholder="Dukia"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label>
              Gender <span className="text-red-500">*</span>
            </label>
            <Select name="gender" onValueChange={(value) => setGender(value)}>
              <SelectTrigger className="w-full focus:ring-transparent focus:ring-offset-0 border border-dukiaBlue/[15%] px-6 py-6 text-dukiaBlue/[50%] font-normal">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col gap-2">
            <label>
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <DatePicker
              name="birthday"
              format={dateFormat}
              value={birthdayVal}
              onChange={handleDOBChange}
              maxDate={dayjs(adult, dateFormat)}
              className="px-6 py-3.5 font-normal custom-ant-picker-focus"
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
                onChange={(e) => setConfirmPassword(e.target.value)}
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

          <div className="pt-2">
            <button disabled={!isFormValid()} className="bg-dukiaBlue w-full text-white mt-2 rounded-lg py-3 text-base disabled:bg-dukiaBlue/40 disabled:cursor-not-allowed">
              Create My Account
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default IndividualRegister;
