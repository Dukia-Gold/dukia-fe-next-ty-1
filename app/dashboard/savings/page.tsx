"use client";

import React from "react";
import SavingsCard from "@/components/savingsComponents/SavingsCard";
import SavingsList from "@/components/savingsComponents/SavingsList";
import TransactionHistory from "@/components/savingsComponents/TransactionHistory";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { RiInformation2Fill, RiInformationFill } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SavingsPage = () => {
  const [createNew, setCreateNew] = React.useState<number>(0);
  const [selectedGateway, setSelectedGateway] = React.useState<string>("");
  const [formData, setFormData] = React.useState({
    title: "",
    amount: "",
    plan_code: "",
    frequency: "Monthly", // Assuming this is a fixed value as per the UI
  });

  return (
    <main className="flex justify-between px-4 py-7 bg-white rounded-2xl">
      <div className="space-y-11 w-[40%]">
        <SavingsCard />
        <TransactionHistory />
      </div>

      <SavingsList setCreateNew={setCreateNew} />

      {createNew === 1 && (
        <Step1
          setCreateNew={setCreateNew}
          setSelectedGateway={setSelectedGateway}
        />
      )}

      {createNew === 2 && (
        <Step2
          setCreateNew={setCreateNew}
          selectedGateway={selectedGateway}
          setSelectedGateway={setSelectedGateway}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {createNew === 3 && (
        <Step3
          setCreateNew={setCreateNew}
          selectedGateway={selectedGateway}
          setSelectedGateway={setSelectedGateway}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </main>
  );
};

export default SavingsPage;

const Step1: React.FC<{
  setCreateNew: (value: number) => void;
  setSelectedGateway: (gateway: string) => void;
}> = ({ setCreateNew, setSelectedGateway }) => {
  const gateways = [
    {
      id: 1,
      name: "Paystack",
      active: true,
    },
    {
      id: 2,
      name: "PayThru",
      active: false,
    },
    {
      id: 3,
      name: "Flutterwave",
      active: false,
    },
  ];
  const [error, setError] = React.useState<string>("");

  const checkGateway = (gatewayName: string) => {
    const foundGateway = gateways.find(
      (gateway) => gateway.name === gatewayName
    );
    if (foundGateway && !foundGateway.active) {
      setError("Please select another payment gateway.");
      setSelectedGateway("");
    } else if (foundGateway && foundGateway.active) {
      setError("");
      setSelectedGateway(gatewayName);
      setCreateNew(2);
    }
  };

  const closeModal = () => {
    setCreateNew(0);
    setSelectedGateway("");
    setError("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out rounded-2xl py-3 md:py-6 px-5 md:px-6 w-[95%] md:w-[37.5rem] space-y-6">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Select Payment Gateway</p>

          <button
            onClick={closeModal}
            className="p-2.5 bg-dukiaBlue/[5%] rounded-[50%]"
          >
            <X width={18} height={18} />
          </button>
        </div>

        <div className="">
          <div className="font-semibold space-y-4">
            <p className="text-center text-sm">Continue with:</p>

            <div className="grid grid-cols-2 gap-4">
              {gateways.map((gateway, index) => (
                <button
                  key={gateway.id}
                  onClick={() => checkGateway(gateway.name)}
                  className={`rounded-lg py-3 px-2.5 ${
                    gateway.active ? "bg-[#E8E9ED]" : "bg-[#FFEBEB]"
                  } ${
                    gateways.length % 2 !== 0 && index === gateways.length - 1
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  {gateway.name}
                </button>
              ))}
            </div>

            {error && (
              <div className="text-xs text-red-600 flex items-center gap-2">
                <div className="bg-red-600 rounded-full text-white">
                  <X size={12} />
                </div>
                <p>{error}</p>
              </div>
            )}
          </div>

          <Separator className="mt-10 mb-5" />

          {/* Text */}
          <div className="text-xs flex items-center gap-2">
            <RiInformation2Fill />
            <p>
              These are the payment gateways we partner with for processing your
              payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Step2: React.FC<{
  setCreateNew: (value: number) => void;
  selectedGateway: string;
  setSelectedGateway: (gateway: string) => void;
  formData: any;
  setFormData: (formData: any) => void;
}> = ({ setCreateNew, setSelectedGateway, formData, setFormData }) => {
  const amount = [
    "5000",
    "10000",
    "25000",
    "50000",
    "80000",
    "100000",
    "150000",
    "200000",
    "250000",
    "300000",
  ];
  const [plans, setPlans] = React.useState<Array<any> | null>(null);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          "https://api.dukiapreciousmetals.co/api/v2/paystack-plans"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        setError("Failed to fetch plans");
      }
    };

    fetchPlans();
  }, []);

  const handleInputChange = (value: string, name: string) => {
    console.log(value);
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  const closeModal = () => {
    setCreateNew(0);
    setSelectedGateway("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out rounded-2xl py-3 md:py-6 px-5 md:px-6 w-[95%] md:w-[37.5rem] space-y-7">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Create New Savings Plan</p>

          <button
            onClick={closeModal}
            className="p-2.5 bg-dukiaBlue/[5%] rounded-[50%]"
          >
            <X width={18} height={18} />
          </button>
        </div>

        <form action="" className="space-y-7">
          <div className="space-y-6">
            <div className="space-y-3">
              {/* Title */}
              <div className="font-semibold">
                <label htmlFor="title" className="block mb-2 text-[#676D88]">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    handleInputChange(e.target.value, e.target.name)
                  } // Updated to match expected signature
                  placeholder="e.g. retirement plan"
                  className="outline-none rounded-lg h-[50px] p-4 disabled:bg-[#E8E9ED] border-[1.5px] border-[#676D88] disabled:border-none w-full placeholder:text-[#676D88]"
                />
              </div>

              {/* Amount */}
              <div className="font-semibold">
                <label htmlFor="amount" className="block mb-2 text-[#676D88]">
                  Amount / month
                </label>
                <Select
                  name="amount"
                  value={formData.amount}
                  onValueChange={(value) => handleInputChange(value, "amount")}
                >
                  <SelectTrigger className="outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 h-[50px] rounded-lg p-4 disabled:bg-[#E8E9ED] border-[1.5px] border-[#676D88] disabled:border-none w-full placeholder:text-[#676D88]">
                    <SelectValue placeholder="Select Amount" />
                  </SelectTrigger>
                  <SelectContent className="max-h-48 overflow-y-auto">
                    {plans &&
                      Array.from(new Set(plans.map((plan) => plan.amount))).map(
                        (amount) => (
                          <SelectItem key={amount} value={amount.toString()}>
                            {amount}
                          </SelectItem>
                        )
                      )}
                  </SelectContent>
                </Select>
              </div>

              {/* Duration */}
              <div className="font-semibold">
                <label htmlFor="duration" className="block mb-2 text-[#676D88]">
                  Duration
                </label>
                <Select
                  name="duration"
                  disabled={formData.amount === ""}
                  value={formData.plan_code}
                  onValueChange={(value) =>
                    handleInputChange(value, "plan_code")
                  }
                >
                  <SelectTrigger className="outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 h-[50px] rounded-lg p-4 disabled:bg-[#E8E9ED] border-[1.5px] border-[#676D88] disabled:border-none w-full placeholder:text-[#676D88]">
                    <SelectValue placeholder="Select Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {plans &&
                      plans
                        .filter(
                          (plan) => plan.amount === Number(formData.amount)
                        )
                        .map((plan) => (
                          <SelectItem
                            key={plan.plan_code}
                            value={plan.plan_code}
                          >
                            {plan.duration} months
                          </SelectItem>
                        ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Frequency */}
            <div className="font-semibold">
              <label htmlFor="frequency" className="block mb-2 text-[#676D88]">
                Frequency
              </label>
              <input
                disabled
                type="text"
                name="frequency"
                id="frequency"
                value="Monthly"
                className="outline-none rounded-lg h-[50px] p-4 disabled:bg-[#E8E9ED] disabled:border-none w-full"
              />
            </div>
          </div>

          {/* NEXT button */}
          <button
            onClick={() => setCreateNew(3)}
            className="rounded-lg py-3 px-4 text-white bg-dukiaBlue w-full font-semibold"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

const Step3: React.FC<{
  setCreateNew: (value: number) => void;
  selectedGateway: string;
  setSelectedGateway: (gateway: string) => void;
  formData: any;
  setFormData: (formData: any) => void;
}> = ({
  setCreateNew,
  selectedGateway,
  setSelectedGateway,
  formData,
  setFormData,
}) => {
  const closeModal = () => {
    setCreateNew(0);
    setSelectedGateway("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out rounded-2xl py-3 md:py-6 px-5 md:px-6 w-[95%] md:w-[37.5rem] space-y-7">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Authorise Savings Plan</p>

          <button
            onClick={closeModal}
            className="p-2.5 bg-dukiaBlue/[5%] rounded-[50%]"
          >
            <X width={18} height={18} />
          </button>
        </div>

        <div className="space-y-7">
          <div className="space-y-5">
            <div className="border-[0.5px] border-[#B9BBC8] bg-white p-3 space-y-5 rounded-lg text-sm">
              <p className="text-[#676D88]">
                <span className="font-semibold text-dukiaGold">Sign to authorise</span>
                <br /> <br />
                <span className="font-semibold text-dukiaBlue">Authorization for Direct Debit On My Bank Account</span>
                <br /> <br />
                I, Boluwatife Eze ,with the account number 2038741832, hereby
                authorize Dukia Gold to initiate a direct debit to automatically
                debit my bank account at your bank.
              </p>

              <div className="flex items-center gap-3">
                <input type="checkbox" name="" id="" className="w-7 h-7 outline-none" />
                <p>by check this box, you have signed the standing order</p>
              </div>
            </div>

            <div className="border-[0.5px] border-dukiaGold bg-[#FBF7EB] rounded-lg p-3 space-y-5 text-sm">
              <div className="flex items-center gap-3">
                <RiInformationFill size={24} />
                <p className="font-semibold">Important Notice</p>
              </div>

              <p>
                Please note that, autodebit is initiated by our partner payment
                gateway, {selectedGateway}. Your first autosave will be
                initiated as soon as you create a saving plan with us. Next
                autodebit is on 30th of September, 2024. <br /> <br />{" "}
                Transaction charges: 1% on ₦100,000; 1.5% on amount over
                ₦100,000.
              </p>
            </div>
          </div>

          <button
            onClick={() => setCreateNew(4)}
            className="rounded-lg py-3 px-4 text-white bg-dukiaBlue w-full font-semibold"
          >
            Create Plan
          </button>
        </div>
      </div>
    </div>
  );
};
