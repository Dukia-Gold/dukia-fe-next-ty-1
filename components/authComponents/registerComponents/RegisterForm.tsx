import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const RegisterForm = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-center text-white font-semibold">
        <div
          onClick={() => {
            setTab(1);
          }}
          className={`${
            tab === 1 ? "bg-dukiaBlue" : ""
          } border-2 border-dukiaGold py-2.5 px-5 rounded-[50%] cursor-pointer`}
        >
          1
        </div>
        <div className="bg-dukiaBlue h-0.5 w-11"></div>
        <div
          className={`${
            tab === 2 ? "bg-dukiaBlue text-white" : " text-dukiaBlue"
          } border-2 border-dukiaGold py-2.5 px-5 rounded-[50%]`}
        >
          2
        </div>
      </div>

      <div className="text-dukiaBlue text-sm font-semibold">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Account Type</label>
            <Select>
              <SelectTrigger className="w-full focus:ring-transparent focus:ring-offset-0 border border-dukiaBlue/[15%] px-6 py-4 text-dukiaBlue/[50%] font-normal">
                <SelectValue placeholder="Choose one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual Account</SelectItem>
                <SelectItem value="joint">Joint Account</SelectItem>
                <SelectItem value="corporate">Corporate Account</SelectItem>
              </SelectContent>
            </Select>
          </div>

		  <div className="h-52 flex justify-center items-center">
			<p className="text-xl max-w-[80%] text-center">Select an Account Type to continue</p>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
