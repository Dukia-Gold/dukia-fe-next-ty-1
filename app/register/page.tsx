"use client";

import RegisterAuth from "@/api/auth/registerAuth";
import { useState } from "react";

interface FormData {
  [key: string]: string;
}

const RegisterPage = () => {
  const { registerIndividual, registerJoint, registerCorporate } =
    RegisterAuth();
  const [tab, setTab] = useState("0");

  const handleRegisterIndividual = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);

    try {
      await registerIndividual(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterJoint = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);

    try {
      await registerJoint(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#f1f5f9] py-48 lg:py-24 flex flex-col justify-center items-center">
      <div className="w-[75%] min-h-[50%] flex flex-col items-center gap-3 shadow-lg bg-white">
        {/* <div className="max-w-sm mx-auto"> */}
        <select
          id="underline_select"
          className="block py-2.5 px-0 w-[15rem] text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          defaultValue="Select an account type"
          onChange={(e) => setTab(e.target.value)}
        >
          <option>Select an account type</option>
          <option value="1">INDIVIDUAL ACCOUNT</option>
          <option value="2">JOINT ACCOUNT</option>
          <option value="3">CORPORATE ACCOUNT</option>
        </select>
        {/* </div> */}

        <form
          id="get-started-form"
          onSubmit={handleRegisterIndividual}
          action=""
          className={`${
            tab === "1" ? "" : "hidden"
          } flex h-[100%] content-center flex-col`}
        >
          <div className="h-[fit-content] px-8 w-[100%] grid gap-5 py-10">
            <div className="grid text-center">
              <div
                id="reg-error-alert"
                className="hidden mb-2 mt-2 pb-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Oops!</strong>
                <span id="reg-error-msg" className="block sm:inline">
                  Something went wrong.
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
                  </svg>
                </span>
              </div>
              <div
                id="reg-success-alert"
                className="hidden mb-2 mt-2 pb-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Congratulations!</strong>
                <span id="reg-success-msg" className="block sm:inline">
                  Your Gold Account has been created successfully.
                  <br />
                  Please complete your email verification by clicking the
                  verification link sent to your email inbox.
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
                  </svg>
                </span>
              </div>
              <p className="pb-2">Register now to start buying gold.</p>
              {/* <hr class="w-[4vw] h-1.5 mx-auto rounded-full bg-blue" /> */}
            </div>
            <label className="grid gap-3">
              <strong>First Name*</strong>
              <input
                name="first_name"
                required
                type="text"
                placeholder="First Name"
                className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
              />
            </label>
            <label className="grid gap-3">
              <strong>Middle Name</strong>
              <input
                name="middle_name"
                type="text"
                placeholder="Middle Name"
                className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
              />
            </label>
            <label className="grid gap-3">
              <strong>Last Name*</strong>
              <input
                name="last_name"
                required
                type="text"
                placeholder="Last name"
                className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
              />
            </label>
            <label htmlFor="" className="gird gap-3">
              <select name="nationality" id="">
                <option value="NGA">Nigeria</option>
              </select>
            </label>
            <label className="grid gap-3">
              <strong>Nationality *</strong>
              <div id="select-wrapper-133827" data-te-select-wrapper-ref="">
                <div data-te-select-form-outline-ref="" className="relative">
                  {/* <input
                    data-te-select-input-ref=""
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&amp;:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600 py-[0.32rem] px-3 leading-[1.6]"
                    type="text"
                    role="combobox"
                    aria-multiselectable="false"
                    aria-disabled="false"
                    aria-haspopup="true"
                    aria-expanded="false"
                    readOnly
                    data-te-input-placeholder-active=""
                    data-te-input-state-active=""
                  /> */}
                  <span className="absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5 top-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </span>
                  <div
                    className="group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none"
                    data-te-input-notch-ref=""
                    data-te-input-state-active=""
                  >
                    <div
                      className="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                      data-te-input-notch-leading-ref=""
                    ></div>
                    <div
                      className="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                      data-te-input-notch-middle-ref=""
                    ></div>
                    <div
                      className="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                      data-te-input-notch-trailing-ref=""
                    ></div>
                  </div>
                  <div className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200 data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary transform-none hidden data-[te-input-state-active]:block">
                    Nigerian
                  </div>
                </div>
                <select
                  id="nationality"
                  required
                  data-te-select-init=""
                  data-te-select-filter="true"
                  className="focus:shadow-md border rounded-lg outline-none px-2 p-2 hidden"
                  defaultValue="NGA"
                >
                  <option value="AFG">Afghan</option>
                  <option value="ALA">Åland Island</option>
                  <option value="ALB">Albanian</option>
                  <option value="DZA">Algerian</option>
                  <option value="ASM">American Samoan</option>
                  <option value="AND">Andorran</option>
                  <option value="AGO">Angolan </option>
                  <option value="AIA">Anguillan </option>
                  <option value="ATA">Antarctic </option>
                  <option value="ATG">Antiguan or Barbudan </option>
                  <option value="ARG">Argentine </option>
                  <option value="ARM">Armenian </option>
                  <option value="ABW">Aruban </option>
                  <option value="AUS">Australian </option>
                  <option value="AUT">Austrian </option>
                  <option value="AZE">Azerbaijani, Azeri </option>
                  <option value="BHS">Bahamian </option>
                  <option value="BHR">Bahraini </option>
                  <option value="BGD">Bangladeshi </option>
                  <option value="BRB">Barbadian </option>
                  <option value="BLR">Belarusian </option>
                  <option value="BEL">Belgian </option>
                  <option value="BLZ">Belizean </option>
                  <option value="BEN">Beninese, Beninois </option>
                  <option value="BMU">Bermudian, Bermudan </option>
                  <option value="BTN">Bhutanese </option>
                  <option value="BOL">Bolivian </option>
                  <option value="BES">Bonaire </option>
                  <option value="BIH">Bosnian or Herzegovinian </option>
                  <option value="BWA">Motswana, Botswanan </option>
                  <option value="BVT">Bouvet Island </option>
                  <option value="BRA">Brazilian </option>
                  <option value="IOT">BIOT </option>
                  <option value="BRN">Bruneian </option>
                  <option value="BGR">Bulgarian </option>
                  <option value="BFA">Burkinabé </option>
                  <option value="BDI">Burundian </option>
                  <option value="CPV">Cabo Verdean </option>
                  <option value="KHM">Cambodian </option>
                  <option value="CMR">Cameroonian </option>
                  <option value="CAN">Canadian </option>
                  <option value="CYM">Caymanian </option>
                  <option value="CAF">Central African </option>
                  <option value="TCD">Chadian </option>
                  <option value="CHL">Chilean </option>
                  <option value="CHN">Chinese </option>
                  <option value="CXR">Christmas Island </option>
                  <option value="CCK">Cocos Island </option>
                  <option value="COL">Colombian </option>
                  <option value="COM">Comoran, Comorian </option>
                  <option value="COG">Congolese </option>
                  <option value="COD">Congolese </option>
                  <option value="COK">Cook Island </option>
                  <option value="CRI">Costa Rican </option>
                  <option value="CIV">Ivorian </option>
                  <option value="HRV">Croatian </option>
                  <option value="CUB">Cuban </option>
                  <option value="CUW">Curaçaoan </option>
                  <option value="CYP">Cypriot </option>
                  <option value="CZE">Czech </option>
                  <option value="DNK">Danish </option>
                  <option value="DJI">Djiboutian </option>
                  <option value="DMA">Dominican </option>
                  <option value="DOM">Dominican </option>
                  <option value="ECU">Ecuadorian </option>
                  <option value="EGY">Egyptian </option>
                  <option value="SLV">Salvadoran </option>
                  <option value="GNQ">
                    Equatorial Guinean, Equatoguinean{" "}
                  </option>
                  <option value="ERI">Eritrean </option>
                  <option value="EST">Estonian </option>
                  <option value="ETH">Ethiopian </option>
                  <option value="FLK">Falkland Island </option>
                  <option value="FRO">Faroese </option>
                  <option value="FJI">Fijian </option>
                  <option value="FIN">Finnish </option>
                  <option value="FRA">French </option>
                  <option value="GUF">French Guianese </option>
                  <option value="PYF">French Polynesian </option>
                  <option value="ATF">French Southern Territories </option>
                  <option value="GAB">Gabonese </option>
                  <option value="GMB">Gambian </option>
                  <option value="GEO">Georgian </option>
                  <option value="DEU">German </option>
                  <option value="GHA">Ghanaian </option>
                  <option value="GIB">Gibraltar </option>
                  <option value="GRC">Greek, Hellenic </option>
                  <option value="GRL">Greenlandic </option>
                  <option value="GRD">Grenadian </option>
                  <option value="GLP">Guadeloupe </option>
                  <option value="GUM">Guamanian, Guambat </option>
                  <option value="GTM">Guatemalan </option>
                  <option value="GGY">Channel Island </option>
                  <option value="GIN">Guinean </option>
                  <option value="GNB">Bissau-Guinean </option>
                  <option value="GUY">Guyanese </option>
                  <option value="HTI">Haitian </option>
                  <option value="HMD">Heard Island or McDonald Islands </option>
                  <option value="VAT">Vatican </option>
                  <option value="HND">Honduran </option>
                  <option value="HKG">Hong Kong, Hong Kongese </option>
                  <option value="HUN">Hungarian, Magyar </option>
                  <option value="ISL">Icelandic </option>
                  <option value="IND">Indian </option>
                  <option value="IDN">Indonesian </option>
                  <option value="IRN">Iranian, Persian </option>
                  <option value="IRQ">Iraqi </option>
                  <option value="IRL">Irish </option>
                  <option value="IMN">Manx </option>
                  <option value="ISR">Israeli </option>
                  <option value="ITA">Italian </option>
                  <option value="JAM">Jamaican </option>
                  <option value="JPN">Japanese </option>
                  <option value="JEY">Channel Island </option>
                  <option value="JOR">Jordanian </option>
                  <option value="KAZ">Kazakhstani, Kazakh </option>
                  <option value="KEN">Kenyan </option>
                  <option value="KIR">I-Kiribati </option>
                  <option value="PRK">North Korean </option>
                  <option value="KOR">South Korean </option>
                  <option value="KWT">Kuwaiti </option>
                  <option value="KGZ">
                    Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz{" "}
                  </option>
                  <option value="LAO">Lao, Laotian </option>
                  <option value="LVA">Latvian </option>
                  <option value="LBN">Lebanese </option>
                  <option value="LSO">Basotho </option>
                  <option value="LBR">Liberian </option>
                  <option value="LBY">Libyan </option>
                  <option value="LIE">Liechtenstein </option>
                  <option value="LTU">Lithuanian </option>
                  <option value="LUX">Luxembourg, Luxembourgish </option>
                  <option value="MAC">Macanese, Chinese </option>
                  <option value="MKD">Macedonian </option>
                  <option value="MDG">Malagasy </option>
                  <option value="MWI">Malawian </option>
                  <option value="MYS">Malaysian </option>
                  <option value="MDV">Maldivian </option>
                  <option value="MLI">Malian, Malinese </option>
                  <option value="MLT">Maltese </option>
                  <option value="MHL">Marshallese </option>
                  <option value="MTQ">Martiniquais, Martinican </option>
                  <option value="MRT">Mauritanian </option>
                  <option value="MUS">Mauritian </option>
                  <option value="MYT">Mahoran </option>
                  <option value="MEX">Mexican </option>
                  <option value="FSM">Micronesian </option>
                  <option value="MDA">Moldovan </option>
                  <option value="MCO">Monégasque, Monacan </option>
                  <option value="MNG">Mongolian </option>
                  <option value="MNE">Montenegrin </option>
                  <option value="MSR">Montserratian </option>
                  <option value="MAR">Moroccan </option>
                  <option value="MOZ">Mozambican </option>
                  <option value="MMR">Burmese </option>
                  <option value="NAM">Namibian </option>
                  <option value="NRU">Nauruan </option>
                  <option value="NPL">Nepali, Nepalese </option>
                  <option value="NLD">Dutch, Netherlandic </option>
                  <option value="NCL">New Caledonian </option>
                  <option value="NZL">New Zealand, NZ </option>
                  <option value="NIC">Nicaraguan </option>
                  <option value="NER">Nigerien </option>
                  <option value="NGA">Nigerian </option>
                  <option value="NIU">Niuean </option>
                  <option value="NFK">Norfolk Island </option>
                  <option value="MNP">Northern Marianan </option>
                  <option value="NOR">Norwegian </option>
                  <option value="OMN">Omani </option>
                  <option value="PAK">Pakistani </option>
                  <option value="PLW">Palauan </option>
                  <option value="PSE">Palestinian </option>
                  <option value="PAN">Panamanian </option>
                  <option value="PNG">Papua New Guinean, Papuan </option>
                  <option value="PRY">Paraguayan </option>
                  <option value="PER">Peruvian </option>
                  <option value="PHL">Philippine, Filipino </option>
                  <option value="PCN">Pitcairn Island </option>
                  <option value="POL">Polish </option>
                  <option value="PRT">Portuguese </option>
                  <option value="PRI">Puerto Rican </option>
                  <option value="QAT">Qatari </option>
                  <option value="REU">Réunionese, Réunionnais </option>
                  <option value="ROU">Romanian </option>
                  <option value="RUS">Russian </option>
                  <option value="RWA">Rwandan </option>
                  <option value="BLM">Barthélemois </option>
                  <option value="SHN">Saint Helenian </option>
                  <option value="KNA">Kittitian or Nevisian </option>
                  <option value="LCA">Saint Lucian </option>
                  <option value="MAF">Saint-Martinoise </option>
                  <option value="SPM">Saint-Pierrais or Miquelonnais </option>
                  <option value="VCT">Saint Vincentian, Vincentian </option>
                  <option value="WSM">Samoan </option>
                  <option value="SMR">Sammarinese </option>
                  <option value="STP">São Toméan </option>
                  <option value="SAU">Saudi, Saudi Arabian </option>
                  <option value="SEN">Senegalese </option>
                  <option value="SRB">Serbian </option>
                  <option value="SYC">Seychellois </option>
                  <option value="SLE">Sierra Leonean </option>
                  <option value="SGP">Singaporean </option>
                  <option value="SXM">Sint Maarten </option>
                  <option value="SVK">Slovak </option>
                  <option value="SVN">Slovenian, Slovene </option>
                  <option value="SLB">Solomon Island </option>
                  <option value="SOM">Somali, Somalian </option>
                  <option value="ZAF">South African </option>
                  <option value="SGS">
                    South Georgia or South Sandwich Islands{" "}
                  </option>
                  <option value="SSD">South Sudanese </option>
                  <option value="ESP">Spanish </option>
                  <option value="LKA">Sri Lankan </option>
                  <option value="SDN">Sudanese </option>
                  <option value="SUR">Surinamese </option>
                  <option value="SJM">Svalbard </option>
                  <option value="SWZ">Swazi </option>
                  <option value="SWE">Swedish </option>
                  <option value="CHE">Swiss </option>
                  <option value="SYR">Syrian </option>
                  <option value="TWN">Chinese, Taiwanese </option>
                  <option value="TJK">Tajikistani </option>
                  <option value="TZA">Tanzanian </option>
                  <option value="THA">Thai </option>
                  <option value="TLS">Timorese </option>
                  <option value="TGO">Togolese </option>
                  <option value="TKL">Tokelauan</option>
                  <option value="TON">Tongan</option>
                  <option value="TTO">Trinidadian or Tobagonian</option>
                  <option value="TUN">Tunisian</option>
                  <option value="TUR">Turkish</option>
                  <option value="TKM">Turkmen</option>
                  <option value="TCA">Turks and Caicos Island</option>
                  <option value="TUV">Tuvaluan</option>
                  <option value="UGA">Ugandan</option>
                  <option value="UKR">Ukrainian</option>
                  <option value="ARE">Emirati, Emirian, Emiri</option>
                  <option value="GBR">British, UK</option>
                  <option value="UMI">American</option>
                  <option value="USA">American</option>
                  <option value="URY">Uruguayan</option>
                  <option value="UZB">Uzbekistani, Uzbek</option>
                  <option value="VUT">Ni-Vanuatu, Vanuatuan</option>
                  <option value="VEN">Venezuelan</option>
                  <option value="VNM">Vietnamese</option>
                  <option value="VGB">British Virgin Island</option>
                  <option value="VIR">U.S. Virgin Island</option>
                  <option value="WLF">
                    Wallis and Futuna, Wallisian or Futunan
                  </option>
                  <option value="ESH">Sahrawi, Sahrawian, Sahraouian</option>
                  <option value="YEM">Yemeni</option>
                  <option value="ZMB">Zambian</option>
                  <option value="ZWE">Zimbabwean</option>
                </select>
              </div>

              {/* <input type="nationality" required placeholder=""  /> */}
            </label>
            <label className="grid gap-3">
              <strong>Email*</strong>
              <input
                name="email"
                type="email"
                required
                placeholder="example@maildomain.com"
                className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
              />
            </label>
            <label className="grid gap-3">
              <strong>Phone*</strong>
              <input
                name="phone"
                required
                type="text"
                placeholder="+2348020000000"
                className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
              />
            </label>
            <label className="grid gap-3">
              <strong>Gender*</strong>
              <select
                name="gender"
                required
                className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                defaultValue="0"
              >
                <option value="0"> Select one </option>
                <option value="male"> Male </option>
                <option value="female"> Female </option>
              </select>
            </label>
            {/* <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Floating outlined
              </label>
            </div> */}
            <label className="grid gap-3">
              <strong>Date of Birth*</strong>
              {/* <input id="birthday" type="date" required className="focus:shadow-md border rounded-lg outline-none px-2 p-2" /> */}
              <div
                className="relative mb-3"
                id="datepicker-with-limits"
                data-te-input-wrapper-init=""
              >
                <input
                  type="date"
                  required
                  name="birthday"
                  className="peer block min-h-[auto] w-full border rounded-lg  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&amp;:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Select a date"
                />
                <label
                  htmlFor="floatingInput"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Select a date
                </label>
              </div>
            </label>

            <label className="grid gap-3">
              <strong>Password*</strong>
              <input
                name="password"
                type="password"
                required
                placeholder="Your Password"
                className="focus:shadow-md border rounded-lg outline-none px-2 p-2"
              />
            </label>
            <label className="grid gap-3">
              <strong>Confirm Password*</strong>
              <input
                name="password_confirmation"
                type="password"
                required
                placeholder="Your Password"
                className="focus:shadow-md border rounded-lg outline-none px-2 p-2"
              />
            </label>
            <p id="passwordMismatch" className="text-red my-2.5"></p>
            <label className="grid gap-3">
              <strong>Referal Code (Optional)</strong>
              <input
                name="referral_code"
                type="text"
                placeholder=""
                className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
              />
            </label>

            <span>
              {/* <input type="checkbox" required id="register-accept-terms" className="mr-2" /> I have read and
                    agreed with the <a className="text-blue  underline" target="_blank"
                      href="https://dukiapreciousmetals.co/privacy-policy">Privacy Policy</a> and <a className=" text-blue underline"
                      target="_blank" href="https://dukiapreciousmetals.co/terms-and-conditions">Terms and Condition</a> */}
              By clicking the “Create My Gold Account” button, you agree to the
              Dukia Gold’s
              <a
                className="underline text-blue"
                target="_blank"
                href="https://www.dukiapreciousmetals.co/terms-and-conditions"
              >
                Terms and Condition
              </a>
              and
              <a
                className="underline text-blue"
                target="_blank"
                href="https://www.dukiapreciousmetals.co/privacy-policy"
              >
                Privacy Policy
              </a>
              .
            </span>
            <button
              type="submit"
              className="flex items-center justify-center btn-primary important bg-dukia-500 text-white hover:font-bold hover:w-3\.5  px-7 py-3.5 mx-auto hover:bg-white hover:border-blue-500 hover:outline hover:outline-[1px] hover:text-blue-500 w-[fit-content] p-1 bg-blue-500 rounded-md"
            >
              <div id="reg-status" className="hidden" role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  ></path>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              <strong>Create My Gold Account</strong>
            </button>
          </div>
        </form>

        <form
          onSubmit={handleRegisterJoint}
          action=""
          className={`${tab === "2" ? "" : "hidden"} `}
        >
          <div className="h-[fit-content] px-8 w-[100%] grid gap-5 py-10">
            <div className="grid text-center">
              <div
                id="reg-success-alert"
                className="hidden mb-2 mt-2 pb-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Congratulations!</strong>
                <span id="reg-success-msg" className="block sm:inline">
                  Your Gold Account has been created successfully.
                  <br />
                  Please complete your email verification by clicking the
                  verification link sent to your email inbox.
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
                  </svg>
                </span>
              </div>
              <p className="pb-2">Register (Joint) now to start buying gold.</p>
              {/* <hr class="w-[4vw] h-1.5 mx-auto rounded-full bg-blue" /> */}
            </div>
            <p className="text-2xl">Applicant 1</p>
            <div className="flex flex-col gap-5">
              <label className="grid gap-3">
                <strong>First Name*</strong>
                <input
                  name="first_name"
                  required
                  type="text"
                  placeholder="First Name"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label className="grid gap-3">
                <strong>Middle Name</strong>
                <input
                  name="middle_name"
                  type="text"
                  placeholder="Middle Name"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label className="grid gap-3">
                <strong>Last Name*</strong>
                <input
                  name="last_name"
                  required
                  type="text"
                  placeholder="Last name"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label htmlFor="" className="gird gap-3">
                <select name="nationality" id="">
                  <option value="NGA">Nigeria</option>
                </select>
              </label>
              <label className="grid gap-3">
                <strong>Nationality *</strong>
                <div id="select-wrapper-133827" data-te-select-wrapper-ref="">
                  <div data-te-select-form-outline-ref="" className="relative">
                    {/* <input
                    data-te-select-input-ref=""
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&amp;:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600 py-[0.32rem] px-3 leading-[1.6]"
                    type="text"
                    role="combobox"
                    aria-multiselectable="false"
                    aria-disabled="false"
                    aria-haspopup="true"
                    aria-expanded="false"
                    readOnly
                    data-te-input-placeholder-active=""
                    data-te-input-state-active=""
                  /> */}
                    <span className="absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5 top-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                    <div
                      className="group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none"
                      data-te-input-notch-ref=""
                      data-te-input-state-active=""
                    >
                      <div
                        className="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                        data-te-input-notch-leading-ref=""
                      ></div>
                      <div
                        className="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                        data-te-input-notch-middle-ref=""
                      ></div>
                      <div
                        className="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                        data-te-input-notch-trailing-ref=""
                      ></div>
                    </div>
                    <div className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200 data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary transform-none hidden data-[te-input-state-active]:block">
                      Nigerian
                    </div>
                  </div>
                  <select
                    id="nationality"
                    required
                    data-te-select-init=""
                    data-te-select-filter="true"
                    className="focus:shadow-md border rounded-lg outline-none px-2 p-2 hidden"
                    defaultValue="NGA"
                  >
                    <option value="AFG">Afghan</option>
                    <option value="ALA">Åland Island</option>
                    <option value="ALB">Albanian</option>
                    <option value="DZA">Algerian</option>
                    <option value="ASM">American Samoan</option>
                    <option value="AND">Andorran</option>
                    <option value="AGO">Angolan </option>
                    <option value="AIA">Anguillan </option>
                    <option value="ATA">Antarctic </option>
                    <option value="ATG">Antiguan or Barbudan </option>
                    <option value="ARG">Argentine </option>
                    <option value="ARM">Armenian </option>
                    <option value="ABW">Aruban </option>
                    <option value="AUS">Australian </option>
                    <option value="AUT">Austrian </option>
                    <option value="AZE">Azerbaijani, Azeri </option>
                    <option value="BHS">Bahamian </option>
                    <option value="BHR">Bahraini </option>
                    <option value="BGD">Bangladeshi </option>
                    <option value="BRB">Barbadian </option>
                    <option value="BLR">Belarusian </option>
                    <option value="BEL">Belgian </option>
                    <option value="BLZ">Belizean </option>
                    <option value="BEN">Beninese, Beninois </option>
                    <option value="BMU">Bermudian, Bermudan </option>
                    <option value="BTN">Bhutanese </option>
                    <option value="BOL">Bolivian </option>
                    <option value="BES">Bonaire </option>
                    <option value="BIH">Bosnian or Herzegovinian </option>
                    <option value="BWA">Motswana, Botswanan </option>
                    <option value="BVT">Bouvet Island </option>
                    <option value="BRA">Brazilian </option>
                    <option value="IOT">BIOT </option>
                    <option value="BRN">Bruneian </option>
                    <option value="BGR">Bulgarian </option>
                    <option value="BFA">Burkinabé </option>
                    <option value="BDI">Burundian </option>
                    <option value="CPV">Cabo Verdean </option>
                    <option value="KHM">Cambodian </option>
                    <option value="CMR">Cameroonian </option>
                    <option value="CAN">Canadian </option>
                    <option value="CYM">Caymanian </option>
                    <option value="CAF">Central African </option>
                    <option value="TCD">Chadian </option>
                    <option value="CHL">Chilean </option>
                    <option value="CHN">Chinese </option>
                    <option value="CXR">Christmas Island </option>
                    <option value="CCK">Cocos Island </option>
                    <option value="COL">Colombian </option>
                    <option value="COM">Comoran, Comorian </option>
                    <option value="COG">Congolese </option>
                    <option value="COD">Congolese </option>
                    <option value="COK">Cook Island </option>
                    <option value="CRI">Costa Rican </option>
                    <option value="CIV">Ivorian </option>
                    <option value="HRV">Croatian </option>
                    <option value="CUB">Cuban </option>
                    <option value="CUW">Curaçaoan </option>
                    <option value="CYP">Cypriot </option>
                    <option value="CZE">Czech </option>
                    <option value="DNK">Danish </option>
                    <option value="DJI">Djiboutian </option>
                    <option value="DMA">Dominican </option>
                    <option value="DOM">Dominican </option>
                    <option value="ECU">Ecuadorian </option>
                    <option value="EGY">Egyptian </option>
                    <option value="SLV">Salvadoran </option>
                    <option value="GNQ">
                      Equatorial Guinean, Equatoguinean{" "}
                    </option>
                    <option value="ERI">Eritrean </option>
                    <option value="EST">Estonian </option>
                    <option value="ETH">Ethiopian </option>
                    <option value="FLK">Falkland Island </option>
                    <option value="FRO">Faroese </option>
                    <option value="FJI">Fijian </option>
                    <option value="FIN">Finnish </option>
                    <option value="FRA">French </option>
                    <option value="GUF">French Guianese </option>
                    <option value="PYF">French Polynesian </option>
                    <option value="ATF">French Southern Territories </option>
                    <option value="GAB">Gabonese </option>
                    <option value="GMB">Gambian </option>
                    <option value="GEO">Georgian </option>
                    <option value="DEU">German </option>
                    <option value="GHA">Ghanaian </option>
                    <option value="GIB">Gibraltar </option>
                    <option value="GRC">Greek, Hellenic </option>
                    <option value="GRL">Greenlandic </option>
                    <option value="GRD">Grenadian </option>
                    <option value="GLP">Guadeloupe </option>
                    <option value="GUM">Guamanian, Guambat </option>
                    <option value="GTM">Guatemalan </option>
                    <option value="GGY">Channel Island </option>
                    <option value="GIN">Guinean </option>
                    <option value="GNB">Bissau-Guinean </option>
                    <option value="GUY">Guyanese </option>
                    <option value="HTI">Haitian </option>
                    <option value="HMD">
                      Heard Island or McDonald Islands{" "}
                    </option>
                    <option value="VAT">Vatican </option>
                    <option value="HND">Honduran </option>
                    <option value="HKG">Hong Kong, Hong Kongese </option>
                    <option value="HUN">Hungarian, Magyar </option>
                    <option value="ISL">Icelandic </option>
                    <option value="IND">Indian </option>
                    <option value="IDN">Indonesian </option>
                    <option value="IRN">Iranian, Persian </option>
                    <option value="IRQ">Iraqi </option>
                    <option value="IRL">Irish </option>
                    <option value="IMN">Manx </option>
                    <option value="ISR">Israeli </option>
                    <option value="ITA">Italian </option>
                    <option value="JAM">Jamaican </option>
                    <option value="JPN">Japanese </option>
                    <option value="JEY">Channel Island </option>
                    <option value="JOR">Jordanian </option>
                    <option value="KAZ">Kazakhstani, Kazakh </option>
                    <option value="KEN">Kenyan </option>
                    <option value="KIR">I-Kiribati </option>
                    <option value="PRK">North Korean </option>
                    <option value="KOR">South Korean </option>
                    <option value="KWT">Kuwaiti </option>
                    <option value="KGZ">
                      Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz{" "}
                    </option>
                    <option value="LAO">Lao, Laotian </option>
                    <option value="LVA">Latvian </option>
                    <option value="LBN">Lebanese </option>
                    <option value="LSO">Basotho </option>
                    <option value="LBR">Liberian </option>
                    <option value="LBY">Libyan </option>
                    <option value="LIE">Liechtenstein </option>
                    <option value="LTU">Lithuanian </option>
                    <option value="LUX">Luxembourg, Luxembourgish </option>
                    <option value="MAC">Macanese, Chinese </option>
                    <option value="MKD">Macedonian </option>
                    <option value="MDG">Malagasy </option>
                    <option value="MWI">Malawian </option>
                    <option value="MYS">Malaysian </option>
                    <option value="MDV">Maldivian </option>
                    <option value="MLI">Malian, Malinese </option>
                    <option value="MLT">Maltese </option>
                    <option value="MHL">Marshallese </option>
                    <option value="MTQ">Martiniquais, Martinican </option>
                    <option value="MRT">Mauritanian </option>
                    <option value="MUS">Mauritian </option>
                    <option value="MYT">Mahoran </option>
                    <option value="MEX">Mexican </option>
                    <option value="FSM">Micronesian </option>
                    <option value="MDA">Moldovan </option>
                    <option value="MCO">Monégasque, Monacan </option>
                    <option value="MNG">Mongolian </option>
                    <option value="MNE">Montenegrin </option>
                    <option value="MSR">Montserratian </option>
                    <option value="MAR">Moroccan </option>
                    <option value="MOZ">Mozambican </option>
                    <option value="MMR">Burmese </option>
                    <option value="NAM">Namibian </option>
                    <option value="NRU">Nauruan </option>
                    <option value="NPL">Nepali, Nepalese </option>
                    <option value="NLD">Dutch, Netherlandic </option>
                    <option value="NCL">New Caledonian </option>
                    <option value="NZL">New Zealand, NZ </option>
                    <option value="NIC">Nicaraguan </option>
                    <option value="NER">Nigerien </option>
                    <option value="NGA">Nigerian </option>
                    <option value="NIU">Niuean </option>
                    <option value="NFK">Norfolk Island </option>
                    <option value="MNP">Northern Marianan </option>
                    <option value="NOR">Norwegian </option>
                    <option value="OMN">Omani </option>
                    <option value="PAK">Pakistani </option>
                    <option value="PLW">Palauan </option>
                    <option value="PSE">Palestinian </option>
                    <option value="PAN">Panamanian </option>
                    <option value="PNG">Papua New Guinean, Papuan </option>
                    <option value="PRY">Paraguayan </option>
                    <option value="PER">Peruvian </option>
                    <option value="PHL">Philippine, Filipino </option>
                    <option value="PCN">Pitcairn Island </option>
                    <option value="POL">Polish </option>
                    <option value="PRT">Portuguese </option>
                    <option value="PRI">Puerto Rican </option>
                    <option value="QAT">Qatari </option>
                    <option value="REU">Réunionese, Réunionnais </option>
                    <option value="ROU">Romanian </option>
                    <option value="RUS">Russian </option>
                    <option value="RWA">Rwandan </option>
                    <option value="BLM">Barthélemois </option>
                    <option value="SHN">Saint Helenian </option>
                    <option value="KNA">Kittitian or Nevisian </option>
                    <option value="LCA">Saint Lucian </option>
                    <option value="MAF">Saint-Martinoise </option>
                    <option value="SPM">Saint-Pierrais or Miquelonnais </option>
                    <option value="VCT">Saint Vincentian, Vincentian </option>
                    <option value="WSM">Samoan </option>
                    <option value="SMR">Sammarinese </option>
                    <option value="STP">São Toméan </option>
                    <option value="SAU">Saudi, Saudi Arabian </option>
                    <option value="SEN">Senegalese </option>
                    <option value="SRB">Serbian </option>
                    <option value="SYC">Seychellois </option>
                    <option value="SLE">Sierra Leonean </option>
                    <option value="SGP">Singaporean </option>
                    <option value="SXM">Sint Maarten </option>
                    <option value="SVK">Slovak </option>
                    <option value="SVN">Slovenian, Slovene </option>
                    <option value="SLB">Solomon Island </option>
                    <option value="SOM">Somali, Somalian </option>
                    <option value="ZAF">South African </option>
                    <option value="SGS">
                      South Georgia or South Sandwich Islands{" "}
                    </option>
                    <option value="SSD">South Sudanese </option>
                    <option value="ESP">Spanish </option>
                    <option value="LKA">Sri Lankan </option>
                    <option value="SDN">Sudanese </option>
                    <option value="SUR">Surinamese </option>
                    <option value="SJM">Svalbard </option>
                    <option value="SWZ">Swazi </option>
                    <option value="SWE">Swedish </option>
                    <option value="CHE">Swiss </option>
                    <option value="SYR">Syrian </option>
                    <option value="TWN">Chinese, Taiwanese </option>
                    <option value="TJK">Tajikistani </option>
                    <option value="TZA">Tanzanian </option>
                    <option value="THA">Thai </option>
                    <option value="TLS">Timorese </option>
                    <option value="TGO">Togolese </option>
                    <option value="TKL">Tokelauan</option>
                    <option value="TON">Tongan</option>
                    <option value="TTO">Trinidadian or Tobagonian</option>
                    <option value="TUN">Tunisian</option>
                    <option value="TUR">Turkish</option>
                    <option value="TKM">Turkmen</option>
                    <option value="TCA">Turks and Caicos Island</option>
                    <option value="TUV">Tuvaluan</option>
                    <option value="UGA">Ugandan</option>
                    <option value="UKR">Ukrainian</option>
                    <option value="ARE">Emirati, Emirian, Emiri</option>
                    <option value="GBR">British, UK</option>
                    <option value="UMI">American</option>
                    <option value="USA">American</option>
                    <option value="URY">Uruguayan</option>
                    <option value="UZB">Uzbekistani, Uzbek</option>
                    <option value="VUT">Ni-Vanuatu, Vanuatuan</option>
                    <option value="VEN">Venezuelan</option>
                    <option value="VNM">Vietnamese</option>
                    <option value="VGB">British Virgin Island</option>
                    <option value="VIR">U.S. Virgin Island</option>
                    <option value="WLF">
                      Wallis and Futuna, Wallisian or Futunan
                    </option>
                    <option value="ESH">Sahrawi, Sahrawian, Sahraouian</option>
                    <option value="YEM">Yemeni</option>
                    <option value="ZMB">Zambian</option>
                    <option value="ZWE">Zimbabwean</option>
                  </select>
                </div>

                {/* <input type="nationality" required placeholder=""  /> */}
              </label>
              <label className="grid gap-3">
                <strong>Email*</strong>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="example@maildomain.com"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label className="grid gap-3">
                <strong>Phone*</strong>
                <input
                  name="phone"
                  required
                  type="text"
                  placeholder="+2348020000000"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label className="grid gap-3">
                <strong>Gender*</strong>
                <select
                  name="gender"
                  required
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                  defaultValue="0"
                >
                  <option value="0"> Select one </option>
                  <option value="male"> Male </option>
                  <option value="female"> Female </option>
                </select>
              </label>
              <label className="grid gap-3">
                <strong>Date of Birth*</strong>
                {/* <input id="birthday" type="date" required className="focus:shadow-md border rounded-lg outline-none px-2 p-2" /> */}
                <div
                  className="relative mb-3"
                  id="datepicker-with-limits"
                  data-te-input-wrapper-init=""
                >
                  <input
                    type="date"
                    required
                    name="birthday"
                    className="peer block min-h-[auto] w-full border rounded-lg  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&amp;:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Select a date"
                  />
                  <label
                    htmlFor="floatingInput"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Select a date
                  </label>
                </div>
              </label>
            </div>

            <p className="text-2xl">Applicant 2</p>
            <div className="flex flex-col gap-5">
              <label className="grid gap-3">
                <strong>First Name*</strong>
                <input
                  name="first_name"
                  required
                  type="text"
                  placeholder="First Name"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label className="grid gap-3">
                <strong>Middle Name</strong>
                <input
                  name="middle_name"
                  type="text"
                  placeholder="Middle Name"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label className="grid gap-3">
                <strong>Last Name*</strong>
                <input
                  name="last_name"
                  required
                  type="text"
                  placeholder="Last name"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label htmlFor="" className="gird gap-3">
                <select name="nationality" id="">
                  <option value="NGA">Nigeria</option>
                </select>
              </label>
              <label className="grid gap-3">
                <strong>Nationality *</strong>
                <div id="select-wrapper-133827" data-te-select-wrapper-ref="">
                  <div data-te-select-form-outline-ref="" className="relative">
                    {/* <input
                    data-te-select-input-ref=""
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&amp;:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600 py-[0.32rem] px-3 leading-[1.6]"
                    type="text"
                    role="combobox"
                    aria-multiselectable="false"
                    aria-disabled="false"
                    aria-haspopup="true"
                    aria-expanded="false"
                    readOnly
                    data-te-input-placeholder-active=""
                    data-te-input-state-active=""
                  /> */}
                    <span className="absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5 top-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                    <div
                      className="group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none"
                      data-te-input-notch-ref=""
                      data-te-input-state-active=""
                    >
                      <div
                        className="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                        data-te-input-notch-leading-ref=""
                      ></div>
                      <div
                        className="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                        data-te-input-notch-middle-ref=""
                      ></div>
                      <div
                        className="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                        data-te-input-notch-trailing-ref=""
                      ></div>
                    </div>
                    <div className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200 data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary transform-none hidden data-[te-input-state-active]:block">
                      Nigerian
                    </div>
                  </div>
                  <select
                    id="nationality"
                    required
                    data-te-select-init=""
                    data-te-select-filter="true"
                    className="focus:shadow-md border rounded-lg outline-none px-2 p-2 hidden"
                    defaultValue="NGA"
                  >
                    <option value="AFG">Afghan</option>
                    <option value="ALA">Åland Island</option>
                    <option value="ALB">Albanian</option>
                    <option value="DZA">Algerian</option>
                    <option value="ASM">American Samoan</option>
                    <option value="AND">Andorran</option>
                    <option value="AGO">Angolan </option>
                    <option value="AIA">Anguillan </option>
                    <option value="ATA">Antarctic </option>
                    <option value="ATG">Antiguan or Barbudan </option>
                    <option value="ARG">Argentine </option>
                    <option value="ARM">Armenian </option>
                    <option value="ABW">Aruban </option>
                    <option value="AUS">Australian </option>
                    <option value="AUT">Austrian </option>
                    <option value="AZE">Azerbaijani, Azeri </option>
                    <option value="BHS">Bahamian </option>
                    <option value="BHR">Bahraini </option>
                    <option value="BGD">Bangladeshi </option>
                    <option value="BRB">Barbadian </option>
                    <option value="BLR">Belarusian </option>
                    <option value="BEL">Belgian </option>
                    <option value="BLZ">Belizean </option>
                    <option value="BEN">Beninese, Beninois </option>
                    <option value="BMU">Bermudian, Bermudan </option>
                    <option value="BTN">Bhutanese </option>
                    <option value="BOL">Bolivian </option>
                    <option value="BES">Bonaire </option>
                    <option value="BIH">Bosnian or Herzegovinian </option>
                    <option value="BWA">Motswana, Botswanan </option>
                    <option value="BVT">Bouvet Island </option>
                    <option value="BRA">Brazilian </option>
                    <option value="IOT">BIOT </option>
                    <option value="BRN">Bruneian </option>
                    <option value="BGR">Bulgarian </option>
                    <option value="BFA">Burkinabé </option>
                    <option value="BDI">Burundian </option>
                    <option value="CPV">Cabo Verdean </option>
                    <option value="KHM">Cambodian </option>
                    <option value="CMR">Cameroonian </option>
                    <option value="CAN">Canadian </option>
                    <option value="CYM">Caymanian </option>
                    <option value="CAF">Central African </option>
                    <option value="TCD">Chadian </option>
                    <option value="CHL">Chilean </option>
                    <option value="CHN">Chinese </option>
                    <option value="CXR">Christmas Island </option>
                    <option value="CCK">Cocos Island </option>
                    <option value="COL">Colombian </option>
                    <option value="COM">Comoran, Comorian </option>
                    <option value="COG">Congolese </option>
                    <option value="COD">Congolese </option>
                    <option value="COK">Cook Island </option>
                    <option value="CRI">Costa Rican </option>
                    <option value="CIV">Ivorian </option>
                    <option value="HRV">Croatian </option>
                    <option value="CUB">Cuban </option>
                    <option value="CUW">Curaçaoan </option>
                    <option value="CYP">Cypriot </option>
                    <option value="CZE">Czech </option>
                    <option value="DNK">Danish </option>
                    <option value="DJI">Djiboutian </option>
                    <option value="DMA">Dominican </option>
                    <option value="DOM">Dominican </option>
                    <option value="ECU">Ecuadorian </option>
                    <option value="EGY">Egyptian </option>
                    <option value="SLV">Salvadoran </option>
                    <option value="GNQ">
                      Equatorial Guinean, Equatoguinean{" "}
                    </option>
                    <option value="ERI">Eritrean </option>
                    <option value="EST">Estonian </option>
                    <option value="ETH">Ethiopian </option>
                    <option value="FLK">Falkland Island </option>
                    <option value="FRO">Faroese </option>
                    <option value="FJI">Fijian </option>
                    <option value="FIN">Finnish </option>
                    <option value="FRA">French </option>
                    <option value="GUF">French Guianese </option>
                    <option value="PYF">French Polynesian </option>
                    <option value="ATF">French Southern Territories </option>
                    <option value="GAB">Gabonese </option>
                    <option value="GMB">Gambian </option>
                    <option value="GEO">Georgian </option>
                    <option value="DEU">German </option>
                    <option value="GHA">Ghanaian </option>
                    <option value="GIB">Gibraltar </option>
                    <option value="GRC">Greek, Hellenic </option>
                    <option value="GRL">Greenlandic </option>
                    <option value="GRD">Grenadian </option>
                    <option value="GLP">Guadeloupe </option>
                    <option value="GUM">Guamanian, Guambat </option>
                    <option value="GTM">Guatemalan </option>
                    <option value="GGY">Channel Island </option>
                    <option value="GIN">Guinean </option>
                    <option value="GNB">Bissau-Guinean </option>
                    <option value="GUY">Guyanese </option>
                    <option value="HTI">Haitian </option>
                    <option value="HMD">
                      Heard Island or McDonald Islands{" "}
                    </option>
                    <option value="VAT">Vatican </option>
                    <option value="HND">Honduran </option>
                    <option value="HKG">Hong Kong, Hong Kongese </option>
                    <option value="HUN">Hungarian, Magyar </option>
                    <option value="ISL">Icelandic </option>
                    <option value="IND">Indian </option>
                    <option value="IDN">Indonesian </option>
                    <option value="IRN">Iranian, Persian </option>
                    <option value="IRQ">Iraqi </option>
                    <option value="IRL">Irish </option>
                    <option value="IMN">Manx </option>
                    <option value="ISR">Israeli </option>
                    <option value="ITA">Italian </option>
                    <option value="JAM">Jamaican </option>
                    <option value="JPN">Japanese </option>
                    <option value="JEY">Channel Island </option>
                    <option value="JOR">Jordanian </option>
                    <option value="KAZ">Kazakhstani, Kazakh </option>
                    <option value="KEN">Kenyan </option>
                    <option value="KIR">I-Kiribati </option>
                    <option value="PRK">North Korean </option>
                    <option value="KOR">South Korean </option>
                    <option value="KWT">Kuwaiti </option>
                    <option value="KGZ">
                      Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz{" "}
                    </option>
                    <option value="LAO">Lao, Laotian </option>
                    <option value="LVA">Latvian </option>
                    <option value="LBN">Lebanese </option>
                    <option value="LSO">Basotho </option>
                    <option value="LBR">Liberian </option>
                    <option value="LBY">Libyan </option>
                    <option value="LIE">Liechtenstein </option>
                    <option value="LTU">Lithuanian </option>
                    <option value="LUX">Luxembourg, Luxembourgish </option>
                    <option value="MAC">Macanese, Chinese </option>
                    <option value="MKD">Macedonian </option>
                    <option value="MDG">Malagasy </option>
                    <option value="MWI">Malawian </option>
                    <option value="MYS">Malaysian </option>
                    <option value="MDV">Maldivian </option>
                    <option value="MLI">Malian, Malinese </option>
                    <option value="MLT">Maltese </option>
                    <option value="MHL">Marshallese </option>
                    <option value="MTQ">Martiniquais, Martinican </option>
                    <option value="MRT">Mauritanian </option>
                    <option value="MUS">Mauritian </option>
                    <option value="MYT">Mahoran </option>
                    <option value="MEX">Mexican </option>
                    <option value="FSM">Micronesian </option>
                    <option value="MDA">Moldovan </option>
                    <option value="MCO">Monégasque, Monacan </option>
                    <option value="MNG">Mongolian </option>
                    <option value="MNE">Montenegrin </option>
                    <option value="MSR">Montserratian </option>
                    <option value="MAR">Moroccan </option>
                    <option value="MOZ">Mozambican </option>
                    <option value="MMR">Burmese </option>
                    <option value="NAM">Namibian </option>
                    <option value="NRU">Nauruan </option>
                    <option value="NPL">Nepali, Nepalese </option>
                    <option value="NLD">Dutch, Netherlandic </option>
                    <option value="NCL">New Caledonian </option>
                    <option value="NZL">New Zealand, NZ </option>
                    <option value="NIC">Nicaraguan </option>
                    <option value="NER">Nigerien </option>
                    <option value="NGA">Nigerian </option>
                    <option value="NIU">Niuean </option>
                    <option value="NFK">Norfolk Island </option>
                    <option value="MNP">Northern Marianan </option>
                    <option value="NOR">Norwegian </option>
                    <option value="OMN">Omani </option>
                    <option value="PAK">Pakistani </option>
                    <option value="PLW">Palauan </option>
                    <option value="PSE">Palestinian </option>
                    <option value="PAN">Panamanian </option>
                    <option value="PNG">Papua New Guinean, Papuan </option>
                    <option value="PRY">Paraguayan </option>
                    <option value="PER">Peruvian </option>
                    <option value="PHL">Philippine, Filipino </option>
                    <option value="PCN">Pitcairn Island </option>
                    <option value="POL">Polish </option>
                    <option value="PRT">Portuguese </option>
                    <option value="PRI">Puerto Rican </option>
                    <option value="QAT">Qatari </option>
                    <option value="REU">Réunionese, Réunionnais </option>
                    <option value="ROU">Romanian </option>
                    <option value="RUS">Russian </option>
                    <option value="RWA">Rwandan </option>
                    <option value="BLM">Barthélemois </option>
                    <option value="SHN">Saint Helenian </option>
                    <option value="KNA">Kittitian or Nevisian </option>
                    <option value="LCA">Saint Lucian </option>
                    <option value="MAF">Saint-Martinoise </option>
                    <option value="SPM">Saint-Pierrais or Miquelonnais </option>
                    <option value="VCT">Saint Vincentian, Vincentian </option>
                    <option value="WSM">Samoan </option>
                    <option value="SMR">Sammarinese </option>
                    <option value="STP">São Toméan </option>
                    <option value="SAU">Saudi, Saudi Arabian </option>
                    <option value="SEN">Senegalese </option>
                    <option value="SRB">Serbian </option>
                    <option value="SYC">Seychellois </option>
                    <option value="SLE">Sierra Leonean </option>
                    <option value="SGP">Singaporean </option>
                    <option value="SXM">Sint Maarten </option>
                    <option value="SVK">Slovak </option>
                    <option value="SVN">Slovenian, Slovene </option>
                    <option value="SLB">Solomon Island </option>
                    <option value="SOM">Somali, Somalian </option>
                    <option value="ZAF">South African </option>
                    <option value="SGS">
                      South Georgia or South Sandwich Islands{" "}
                    </option>
                    <option value="SSD">South Sudanese </option>
                    <option value="ESP">Spanish </option>
                    <option value="LKA">Sri Lankan </option>
                    <option value="SDN">Sudanese </option>
                    <option value="SUR">Surinamese </option>
                    <option value="SJM">Svalbard </option>
                    <option value="SWZ">Swazi </option>
                    <option value="SWE">Swedish </option>
                    <option value="CHE">Swiss </option>
                    <option value="SYR">Syrian </option>
                    <option value="TWN">Chinese, Taiwanese </option>
                    <option value="TJK">Tajikistani </option>
                    <option value="TZA">Tanzanian </option>
                    <option value="THA">Thai </option>
                    <option value="TLS">Timorese </option>
                    <option value="TGO">Togolese </option>
                    <option value="TKL">Tokelauan</option>
                    <option value="TON">Tongan</option>
                    <option value="TTO">Trinidadian or Tobagonian</option>
                    <option value="TUN">Tunisian</option>
                    <option value="TUR">Turkish</option>
                    <option value="TKM">Turkmen</option>
                    <option value="TCA">Turks and Caicos Island</option>
                    <option value="TUV">Tuvaluan</option>
                    <option value="UGA">Ugandan</option>
                    <option value="UKR">Ukrainian</option>
                    <option value="ARE">Emirati, Emirian, Emiri</option>
                    <option value="GBR">British, UK</option>
                    <option value="UMI">American</option>
                    <option value="USA">American</option>
                    <option value="URY">Uruguayan</option>
                    <option value="UZB">Uzbekistani, Uzbek</option>
                    <option value="VUT">Ni-Vanuatu, Vanuatuan</option>
                    <option value="VEN">Venezuelan</option>
                    <option value="VNM">Vietnamese</option>
                    <option value="VGB">British Virgin Island</option>
                    <option value="VIR">U.S. Virgin Island</option>
                    <option value="WLF">
                      Wallis and Futuna, Wallisian or Futunan
                    </option>
                    <option value="ESH">Sahrawi, Sahrawian, Sahraouian</option>
                    <option value="YEM">Yemeni</option>
                    <option value="ZMB">Zambian</option>
                    <option value="ZWE">Zimbabwean</option>
                  </select>
                </div>

                {/* <input type="nationality" required placeholder=""  /> */}
              </label>
              <label className="grid gap-3">
                <strong>Email*</strong>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="example@maildomain.com"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label className="grid gap-3">
                <strong>Phone*</strong>
                <input
                  name="phone"
                  required
                  type="text"
                  placeholder="+2348020000000"
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                />
              </label>
              <label className="grid gap-3">
                <strong>Gender*</strong>
                <select
                  name="gender"
                  required
                  className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
                  defaultValue="0"
                >
                  <option value="0"> Select one </option>
                  <option value="male"> Male </option>
                  <option value="female"> Female </option>
                </select>
              </label>
              <label className="grid gap-3">
                <strong>Date of Birth*</strong>
                {/* <input id="birthday" type="date" required className="focus:shadow-md border rounded-lg outline-none px-2 p-2" /> */}
                <div
                  className="relative mb-3"
                  id="datepicker-with-limits"
                  data-te-input-wrapper-init=""
                >
                  <input
                    type="date"
                    required
                    name="birthday"
                    className="peer block min-h-[auto] w-full border rounded-lg  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&amp;:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Select a date"
                  />
                  <label
                    htmlFor="floatingInput"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Select a date
                  </label>
                </div>
              </label>
            </div>

            <label className="grid gap-3">
              <strong>Password*</strong>
              <input
                name="password"
                type="password"
                required
                placeholder="Your Password"
                className="focus:shadow-md border rounded-lg outline-none px-2 p-2"
              />
            </label>
            <label className="grid gap-3">
              <strong>Confirm Password*</strong>
              <input
                name="password_confirmation"
                type="password"
                required
                placeholder="Your Password"
                className="focus:shadow-md border rounded-lg outline-none px-2 p-2"
              />
            </label>
            <p id="passwordMismatch" className="text-red my-2.5"></p>
            <label className="grid gap-3">
              <strong>Referal Code (Optional)</strong>
              <input
                name="referral_code"
                type="text"
                placeholder=""
                className="border-[1px] focus:shadow-md outline-none rounded-lg px-2 p-2"
              />
            </label>

            <span>
              {/* <input type="checkbox" required id="register-accept-terms" className="mr-2" /> I have read and
                    agreed with the <a className="text-blue  underline" target="_blank"
                      href="https://dukiapreciousmetals.co/privacy-policy">Privacy Policy</a> and <a className=" text-blue underline"
                      target="_blank" href="https://dukiapreciousmetals.co/terms-and-conditions">Terms and Condition</a> */}
              By clicking the “Create My Gold Account” button, you agree to the
              Dukia Gold’s
              <a
                className="underline text-blue"
                target="_blank"
                href="https://www.dukiapreciousmetals.co/terms-and-conditions"
              >
                Terms and Condition
              </a>
              and
              <a
                className="underline text-blue"
                target="_blank"
                href="https://www.dukiapreciousmetals.co/privacy-policy"
              >
                Privacy Policy
              </a>
              .
            </span>
            <button
              type="submit"
              className="flex items-center justify-center btn-primary important bg-dukia-500 text-white hover:font-bold hover:w-3\.5  px-7 py-3.5 mx-auto hover:bg-white hover:border-blue-500 hover:outline hover:outline-[1px] hover:text-blue-500 w-[fit-content] p-1 bg-blue-500 rounded-md"
            >
              <div id="reg-status" className="hidden" role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  ></path>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              <strong>Create My Gold Account</strong>
            </button>
          </div>
        </form>

        <form action="" className={`${tab === "3" ? "" : "hidden"} `}>
          CORPORATE ACCOUNT
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
