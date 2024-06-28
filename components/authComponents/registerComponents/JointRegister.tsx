import { DatePicker, DatePickerProps } from "antd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useState } from "react";
import RegisterAuth from "@/api/auth/registerAuth";
import { Separator } from "@/components/ui/separator";

type RegisterProps = {
  tab: number;
  setTab: (tab: number) => void;
};

dayjs.extend(customParseFormat);

const dateFormat = "YYYY-MM-DD";

const JointRegister = ({ tab, setTab }: RegisterProps) => {
  const [first_name, setFirstName] = useState("");
  const [first_name2, setFirstName2] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [middle_name2, setMiddleName2] = useState("");
  const [last_name, setLastName] = useState("");
  const [last_name2, setLastName2] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [nationality, setNationality] = useState("");
  const [nationality2, setNationality2] = useState("");
  const [gender, setGender] = useState("");
  const [gender2, setGender2] = useState("");
  const [birthday, setBirthday] = useState<String | null>(null);
  const [birthday2, setBirthday2] = useState<String | null>(null);
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const { loading, registerJoint } = RegisterAuth();

  const adult = "2006-06-28";
  const dateFormat = "YYYY-MM-DD";

  const handleDOBChange: DatePickerProps["onChange"] = (date, dateString) => {
    setBirthday(dateString?.toString());
  };

  const handleDOBChange2: DatePickerProps["onChange"] = (date, dateString) => {
    setBirthday2(dateString?.toString());
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      first_name,
      first_name2,
      middle_name,
      middle_name2,
      last_name,
      last_name2,
      email,
      email2,
      phone,
      phone2,
      nationality,
      nationality2,
      gender,
      gender2,
      birthday,
      birthday2,
      password,
      password_confirmation,
    };

    try {
      await registerJoint(formData);
      setTab(1);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="space-y-4">
      {tab === 1 && (
        <form className="space-y-4" onSubmit={() => setTab(2)}>
          <p className="text-center font-bold py-2">APPLICANT ONE (PRIMARY ACCOUNT)</p>
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
              value={middle_name}
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
              Email Address <span className="text-red-500">*</span>
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
              onChange={handleDOBChange}
              maxDate={dayjs(adult, dateFormat)}
              className="px-6 py-3.5 font-normal custom-ant-picker-focus"
            />
          </div>

          <div className="pt-2">
            <button className="bg-dukiaBlue w-full text-white mt-2 rounded-lg py-3 text-base">
              Continue
            </button>
          </div>
        </form>
      )}

      {tab === 2 && (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <p className="text-center font-bold py-2">APPLICANT TWO</p>
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label>
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              name="first_name2"
              type="text"
              onChange={(e) => setFirstName2(e.target.value)}
              value={first_name2}
              required
              placeholder="John"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Middle Name */}
          <div className="flex flex-col gap-2">
            <label>Middle Name</label>
            <input
              type="text"
              name="middle_name2"
              onChange={(e) => setMiddleName2(e.target.value)}
              value={middle_name2}
              placeholder="Kennedy"
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
              name="last_name2"
              onChange={(e) => setLastName2(e.target.value)}
              value={last_name2}
              required
              placeholder="Doe"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email2"
              onChange={(e) => setEmail2(e.target.value)}
              value={email2}
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
              name="phone2"
              onChange={(e) => setPhone2(e.target.value)}
              value={phone2}
              required
              placeholder="+234**********"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Nationality */}
          <div className="flex flex-col gap-2">
            <label>
              Nationality <span className="text-red-500">*</span>
            </label>
            <input
              name="nationality2"
              type="text"
              onChange={(e) => setNationality2(e.target.value)}
              value={nationality2}
              required
              placeholder="Ghanian"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label>
              Gender <span className="text-red-500">*</span>
            </label>
            <Select name="gender2" value={gender2} onValueChange={(value) => setGender2(value)}>
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
              onChange={handleDOBChange2}
              maxDate={dayjs(adult, dateFormat)}
              className="px-6 py-3.5 font-normal custom-ant-picker-focus"
            />
          </div>

          <div className="py-4">
            <Separator className="my-4" color="#000000" />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label>
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="**********"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label>
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password_confirmation"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={password_confirmation}
              required
              placeholder="**********"
              className="rounded-lg border border-dukiaBlue/[15%] py-4 px-6 placeholder:text-dukiaBlue/[50%] font-normal outline-none"
            />
          </div>

          <div className="pt-2">
            <button className="bg-dukiaBlue w-full text-white mt-2 rounded-lg py-3 text-base">
              Create Joint Gold Account
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default JointRegister;
