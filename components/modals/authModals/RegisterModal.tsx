"use client";

import RegisterAuth from "@/api/auth/registerAuth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { accountType, formFieldsArray } from "@/config/landing_page/auth";
import useModalsStore from "@/store/modalsStore";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { ArrowRight, Eye, EyeOff, X } from "lucide-react";
import { useEffect, useState } from "react";
import { RiUser3Fill } from "react-icons/ri";

// Define the interface for formData
interface FormData {
  [key: string]: any; // Adjust 'any' to a more specific type if possible
}

const RegisterModal = () => {
  const { registerCorporate, registerIndividual, registerJoint } =
    RegisterAuth();
  const [formData, setFormData] = useState<FormData>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [accountTypeSelected, setAccountTypeSelected] = useState<string>("");
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const register = useModalsStore((state: any) => state.register);

  // Add state to manage password visibility
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //   const togglePasswordVisibility = () => {
  //     setShowPassword(!showPassword);
  //   };

  //   const toggleConfirmPasswordVisibility = () => {
  //     setShowConfirmPassword(!showConfirmPassword);
  //   };

  const handleInputChange = (event: {
    target: { name: string; value: string | string[] };
  }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const validateRequiredFields = (fields: any) => {
    let valid = true;

    fields.slice(currentIndex, currentIndex + 4).forEach((field: any) => {
      if (field.required && !formData[field.name]) {
        valid = false;
      }
    });

    return valid;
  };

  const handleRegister = async () => {
    try {
      let success;
      switch (accountTypeSelected) {
        case "individual":
          success = await registerIndividual(formData);
          break;
        case "joint":
          success = await registerJoint(formData);
          break;
        case "corporate":
          success = await registerCorporate(formData);
          break;
        default:
          console.error("Unsupported account type for registration.");
      }

      if (success) {
        closeModal();
        updateModals({ login: true });
      }
    } catch (error) {
      console.error("Error registering account:", error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  const closeModal = () => {
    setAccountTypeSelected("");
    setCurrentIndex(0);
    // setShowPassword(false);
    // setShowConfirmPassword(false);
    setFormData({});
    updateModals({ register: false });
  };

  if (register === false || register === undefined) {
    return null;
  }

  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out text-dukiaBlue rounded-lg w-[95%] h-[75%] md:h-[40rem] max-h-[95vh] xl:h-auto md:w-[38.3125rem] xl:w-[1280px] flex justify-center relative">
        <div
          onClick={closeModal}
          className="cursor-pointer xl:hidden absolute top-5 md:top-5 right-5 md:right-5 bg-[#E8E9ED] rounded-[50%] p-2.5 z-10"
        >
          <X width={24} height={24} />
        </div>

        <div className="bg-[url(https://res.cloudinary.com/dvcw253zw/image/upload/v1729590576/register-img_pbvrfn.png)] bg-no-repeat bg-cover bg-center bg-[#FFFBF1] w-[37.9375rem] h-[51.1875rem] max-h-[90vh] hidden xl:flex rounded-l-lg text pt-[5.375rem] justify-center">
          <div className="space-y-3 font-extrabold">
            <p className="text-[2rem]">Begin Your Journey To</p>
            <p className="text-dukiaGold text-5xl">Financial Freedom</p>
            <p className="font-semibold text-[#676D88] max-w-[421px]">
              Your gateway to secure and profitable gold and precious metals
              trading.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center relative xl:w-[calc(100%-37.9375rem)]">
          <div
            onClick={closeModal}
            className="cursor-pointer hidden xl:block absolute top-11 right-10 bg-[#E8E9ED] rounded-[50%] p-2.5"
          >
            <X width={24} height={24} />
          </div>

          <div className="space-y-[26px] xl:space-y-[52px]">
            <div className="space-y-8 cl:space-y-16">
              <div className="space-y-3">
                <p className="font-extrabold text-xl">
                  Welcome to Dukia Gold !
                </p>
                <p className="font-semibold text-[#676D88]">
                  Let&apos;s get you started.
                </p>
              </div>

              {accountTypeSelected === "" && (
                <div className="space-y-6">
                  <p className="text-sm font-semibold">
                    Select Account Type To Continue 👇
                  </p>

                  <div className="space-y-3">
                    {accountType.map((type) => (
                      <div
                        key={type.id}
                        className="border-2 border-[#E8E9ED] hover:border-dukiaGold rounded-lg p-3 flex items-center justify-between w-[357px] cursor-pointer group hover:bg-dukiaGold/[5%]"
                        onClick={() => setAccountTypeSelected(type.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-[#FBF7EB] group-hover:bg-white w-9 h-9 flex items-center justify-center text-dukiaGold">
                            {type.id === "individual" && (
                              <RiUser3Fill size={24} />
                            )}

                            {type.id === "joint" && (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.5 21C10.5 21 9 21 9 19.5C9 18 10.5 13.5 16.5 13.5C22.5 13.5 24 18 24 19.5C24 21 22.5 21 22.5 21H10.5ZM16.5 12C17.6935 12 18.8381 11.5259 19.682 10.682C20.5259 9.83807 21 8.69347 21 7.5C21 6.30653 20.5259 5.16193 19.682 4.31802C18.8381 3.47411 17.6935 3 16.5 3C15.3065 3 14.1619 3.47411 13.318 4.31802C12.4741 5.16193 12 6.30653 12 7.5C12 8.69347 12.4741 9.83807 13.318 10.682C14.1619 11.5259 15.3065 12 16.5 12ZM7.824 21C7.60174 20.5317 7.49084 20.0183 7.5 19.5C7.5 17.4675 8.52 15.375 10.404 13.92C9.46377 13.6297 8.48396 13.4879 7.5 13.5C1.5 13.5 0 18 0 19.5C0 21 1.5 21 1.5 21H7.824ZM6.75 12C7.74456 12 8.69839 11.6049 9.40165 10.9017C10.1049 10.1984 10.5 9.24456 10.5 8.25C10.5 7.25544 10.1049 6.30161 9.40165 5.59835C8.69839 4.89509 7.74456 4.5 6.75 4.5C5.75544 4.5 4.80161 4.89509 4.09835 5.59835C3.39509 6.30161 3 7.25544 3 8.25C3 9.24456 3.39509 10.1984 4.09835 10.9017C4.80161 11.6049 5.75544 12 6.75 12Z"
                                  fill="#D4A418"
                                />
                              </svg>
                            )}

                            {type.id === "corporate" && (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M22 13.478V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21H5C4.20435 21 3.44129 20.6839 2.87868 20.1213C2.31607 19.5587 2 18.7956 2 18V13.478L2.553 13.755C5.48393 15.2312 8.72004 16 12.0017 15.9996C15.2834 15.9993 18.5194 15.2298 21.45 13.753L22 13.478ZM14 2C14.7956 2 15.5587 2.31607 16.1213 2.87868C16.6839 3.44129 17 4.20435 17 5V6H19C19.7956 6 20.5587 6.31607 21.1213 6.87868C21.6839 7.44129 22 8.20435 22 9V11.242L20.553 11.966C17.964 13.2711 15.1107 13.9664 12.2116 13.9986C9.31243 14.0309 6.44435 13.3992 3.827 12.152L3.18 11.832L2 11.242V9C2 8.20435 2.31607 7.44129 2.87868 6.87868C3.44129 6.31607 4.20435 6 5 6H7V5C7 4.20435 7.31607 3.44129 7.87868 2.87868C8.44129 2.31607 9.20435 2 10 2H14ZM12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11C10.9993 11.1313 11.0246 11.2615 11.0742 11.3831C11.1239 11.5046 11.197 11.6152 11.2894 11.7086C11.3818 11.8019 11.4916 11.8761 11.6127 11.927C11.7338 11.9778 11.8637 12.0043 11.995 12.005C12.1263 12.0057 12.2565 11.9804 12.3781 11.9308C12.4996 11.8811 12.6102 11.808 12.7036 11.7156C12.7969 11.6232 12.8711 11.5134 12.922 11.3923C12.9728 11.2712 12.9993 11.1413 13 11.01C13 10.448 12.552 10 12 10ZM14 4H10C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V6H15V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4Z"
                                  fill="#D4A418"
                                />
                              </svg>
                            )}
                          </div>

                          <div className="text-xs">
                            <p className="font-semibold">{type.name}</p>
                            <p>{type.text}</p>
                          </div>
                        </div>

                        <ArrowRight className="group-hover:block hidden" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {accountTypeSelected !== "" &&
                (() => {
                  const selectedField = formFieldsArray.find(
                    (field) => field.accountType === accountTypeSelected
                  );
                  const fields = selectedField ? selectedField.fields : [];

                  const handleNext = () => {
                    setCurrentIndex((prevIndex) =>
                      prevIndex + 4 >= fields.length ? 0 : prevIndex + 4
                    );
                  };

                  const handlePrevious = () => {
                    if (currentIndex > 0) {
                      setCurrentIndex((prevIndex) =>
                        prevIndex - 4 < 0 ? fields.length - 4 : prevIndex - 4
                      );
                    } else {
                      setAccountTypeSelected("");
                      setFormData({});
                    }
                  };

                  return (
                    <div className="grid-cols-2 grid gap-5">
                      {fields
                        .slice(currentIndex, currentIndex + 8)
                        .map((field, index) => (
                          <div key={index} className="relative font-semibold">
                            <label
                              htmlFor={field.name}
                              className="block mb-2 text-[#676D88]"
                            >
                              {field.label}{" "}
                              {field.required && (
                                <span className="text-red-600">*</span>
                              )}
                            </label>

                            {field.type !== "select" &&
                            field.type !== "date" ? (
                              <>
                                <input
                                  key={index}
                                  value={formData[field.name] || ""}
                                  onChange={(e) => {
                                    handleInputChange(e);
                                  }}
                                  {...field}
                                  className="border-[1.5px] border-[#979BAE] focus:border-dukiaBlue rounded-lg py-3 px-4 placeholder:text-[#979BAE] w-[275px] outline-none"
                                />

                                {/* {field.type === "password" &&
                                  (field.name === "password" && showPassword ? (
                                    <EyeOff
                                      className="h-5 w-5 text-gray-500 absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                      onClick={togglePasswordVisibility}
                                    />
                                  ) : field.name === "confirmPassword" &&
                                    showConfirmPassword ? (
                                    <EyeOff
                                      className="h-5 w-5 text-gray-500 absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                      onClick={toggleConfirmPasswordVisibility}
                                    />
                                  ) : (
                                    <Eye
                                      className="h-5 w-5 text-gray-500 absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                      onClick={
                                        field.name === "password"
                                          ? togglePasswordVisibility
                                          : toggleConfirmPasswordVisibility
                                      }
                                    />
                                  ))} */}
                              </>
                            ) : field.type === "select" ? (
                              <Select
                                name={field.name}
                                required
                                onValueChange={(value) =>
                                  handleInputChange({
                                    target: { name: field.name, value },
                                  })
                                }
                              >
                                <SelectTrigger className="w-full focus:ring-transparent focus:ring-offset-0 border border-[#979BAE] focus:border-dukiaBlue px-6 py-6">
                                  <SelectValue
                                    placeholder={`Select ${field.label}`}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  {field.options &&
                                    field.options.map((option, index) => (
                                      <SelectItem
                                        key={index}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                </SelectContent>
                              </Select>
                            ) : field.type === "date" ? (
                              <DatePicker
                                name={field.name}
                                format={field.dateFormat}
                                maxDate={dayjs(field.valid, field.dateFormat)}
                                required
                                // value={formData[field.name]}
                                onChange={(date, dateString) =>
                                  handleInputChange({
                                    target: {
                                      name: field.name,
                                      value: dateString?.toString(), // Ensure value is a string
                                    },
                                  })
                                }
                                className="px-6 py-3.5 custom-ant-picker-focus w-full border border-[#979BAE]"
                              />
                            ) : null}
                          </div>
                        ))}

                      {/* Next and previous buttons */}
                      <div className="grid grid-cols-2 col-span-2 gap-6 font-semibold">
                        {/* Previous button */}
                        <button
                          type="button"
                          onClick={handlePrevious}
                          className="rounded-lg px-4 py-3 bg-[#E8E9ED]"
                        >
                          Back
                        </button>

                        {/* Next and submit button */}
                        <button
                          onClick={
                            currentIndex + 4 >= fields.length
                              ? handleRegister
                              : handleNext
                          }
                          disabled={!validateRequiredFields(fields)}
                          className="rounded-lg px-4 py-3 bg-dukiaBlue text-white disabled:opacity-50"
                        >
                          {currentIndex + 4 >= fields.length
                            ? "Submit"
                            : "Next"}
                        </button>
                      </div>
                    </div>
                  );
                })()}
            </div>

            <div className="font-semibold flex justify-between">
              <p>Already Have An Account?</p>
              <p
                onClick={() => updateModals({ register: false, login: true })}
                className="text-dukiaGold hover:underline cursor-pointer"
              >
                Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
