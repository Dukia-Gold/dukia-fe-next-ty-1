import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" pt-7 pb-11 px-3 md:px-5 lg:px-10 xl:px-20 text-white bg-dukiaBlue flex flex-col items-center lg:items-start gap-10 lg:gap-0 lg:flex-row lg:justify-between">
      {/* LEFT */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <div>
          <Image
            src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
            alt="Dukia Gold's Logo"
            width={85}
            height={85}
          />{" "}
        </div>

        <div className="text-sm flex flex-col gap-4 items-center md:items-start">
          <div className="flex flex-col gap-1">
            <p className="font-extrabold text-base">Dukia Gold & Precious Metals Refining Co. Ltd.</p>
            <p className="text-xs">Your Precious Metals Refiner & Trusted Bullion Merchant</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33342 15.8329V11.6663H11.6667V15.8329C11.6667 16.2913 12.0417 16.6663 12.5001 16.6663H15.0001C15.4584 16.6663 15.8334 16.2913 15.8334 15.8329V9.99961H17.2501C17.6334 9.99961 17.8167 9.52461 17.5251 9.27461L10.5584 2.99961C10.2417 2.71628 9.75841 2.71628 9.44175 2.99961L2.47508 9.27461C2.19175 9.52461 2.36675 9.99961 2.75008 9.99961H4.16675V15.8329C4.16675 16.2913 4.54175 16.6663 5.00008 16.6663H7.50008C7.95842 16.6663 8.33342 16.2913 8.33342 15.8329Z" fill="white"/>
                </svg>
              </div>

              <p>3B, Olusola Olude Close, Gbagada Phase 2, Lagos, Nigeria</p>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 3.33301H3.33341C2.41675 3.33301 1.67508 4.08301 1.67508 4.99967L1.66675 14.9997C1.66675 15.9163 2.41675 16.6663 3.33341 16.6663H16.6667C17.5834 16.6663 18.3334 15.9163 18.3334 14.9997V4.99967C18.3334 4.08301 17.5834 3.33301 16.6667 3.33301ZM16.3334 6.87467L10.4417 10.558C10.1751 10.7247 9.82508 10.7247 9.55841 10.558L3.66675 6.87467C3.58319 6.82777 3.51001 6.76439 3.45166 6.68839C3.3933 6.61238 3.35097 6.52532 3.32723 6.43248C3.30349 6.33964 3.29883 6.24295 3.31355 6.14826C3.32826 6.05357 3.36203 5.96285 3.41282 5.88159C3.4636 5.80033 3.53035 5.73022 3.60902 5.6755C3.68769 5.62079 3.77664 5.5826 3.87049 5.56326C3.96435 5.54391 4.06115 5.54381 4.15504 5.56296C4.24894 5.58212 4.33797 5.62012 4.41675 5.67467L10.0001 9.16634L15.5834 5.67467C15.6622 5.62012 15.7512 5.58212 15.8451 5.56296C15.939 5.54381 16.0358 5.54391 16.1297 5.56326C16.2235 5.5826 16.3125 5.62079 16.3911 5.6755C16.4698 5.73022 16.5366 5.80033 16.5873 5.88159C16.6381 5.96285 16.6719 6.05357 16.6866 6.14826C16.7013 6.24295 16.6967 6.33964 16.6729 6.43248C16.6492 6.52532 16.6069 6.61238 16.5485 6.68839C16.4901 6.76439 16.417 6.82777 16.3334 6.87467Z" fill="white"/>
                </svg>
              </div>

              <p>sales@dukiapreciousmetals.co</p>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.025 12.7171L13.9084 12.4755C13.6595 12.4462 13.4072 12.4738 13.1705 12.556C12.9338 12.6383 12.7188 12.7732 12.5417 12.9505L11.0084 14.4838C8.64269 13.2806 6.71985 11.3578 5.5167 8.99212L7.05837 7.45046C7.4167 7.09212 7.5917 6.59212 7.53337 6.08379L7.2917 3.98379C7.24446 3.57727 7.04936 3.20232 6.74356 2.93033C6.43777 2.65834 6.04262 2.5083 5.63337 2.50879H4.1917C3.25003 2.50879 2.4667 3.29212 2.52503 4.23379C2.9667 11.3505 8.65837 17.0338 15.7667 17.4755C16.7084 17.5338 17.4917 16.7505 17.4917 15.8088V14.3671C17.5 13.5255 16.8667 12.8171 16.025 12.7171Z" fill="white"/>
                </svg>
              </div>
              

              <p>+234 703 323 8121  |  +234 903 150 6699</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-2 gap-y-5 md:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 gap-x-10 md:gap-x-3.5 text-sm">
        {/* COMPANY */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold">COMPANY</p>
          <div className="flex flex-col">
            <p>About Us</p>
            <p>Why invest with us?</p>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold">PRODUCTS</p>
          <div className="flex flex-col">
            <p>Gold Bars</p>
            <p>Gold Coins</p>
            <p>Pool Allocated</p>
          </div>
        </div>

        {/* GUIDES */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold">GUIDES</p>
          <div className="flex flex-col">
            <p>Why invest in Gold?</p>
            <p>FAQs</p>
          </div>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold">LEGAL</p>
          <div className="flex flex-col">
            <p>Cookies & Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer