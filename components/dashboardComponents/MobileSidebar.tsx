"use client"

import Image from "next/image";
import Link from "next/link";
import profile from "../../assets/profile.jpg";
import { FC, useEffect } from "react";
import { GetUrl } from "@/lib/getUrl";

type MobileSidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const MobileSidebar: FC<MobileSidebarProps> = ({ isOpen, toggle }) => {
  const { pathname } = GetUrl();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  if (!isOpen) {
    // Return null if the modal is not open
    return null;
  }

  return (
    <div className="fixed z-50 lg:hidden top-0 left-0 w-full h-[100vh] bg-[#00000040] flex justify-start">
      <aside className="flex flex-col justify-between pt-6 pb-32 w-72 bg-dukiaBlue h-screen text-white">
        <div className="flex flex-col items-center gap-10">
          <Link href="/">
            {" "}
            <Image
              src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
              alt="Dukia Gold's Logo"
              width={100}
              height={85.82}
            />{" "}
          </Link>

          <nav className="w-full">
            <ul>
              {/* Dashboard */}
              <li
                onClick={toggle}
                className={`${
                  pathname === "/dashboard" ? "bg-white text-dukiaBlue" : ""
                } px-5 py-3`}
              >
                <Link href="/dashboard" className="flex gap-2.5 items-center">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33333 11.6541H8.33333C8.79167 11.6541 9.16667 11.2791 9.16667 10.8208V4.15413C9.16667 3.6958 8.79167 3.3208 8.33333 3.3208H3.33333C2.875 3.3208 2.5 3.6958 2.5 4.15413V10.8208C2.5 11.2791 2.875 11.6541 3.33333 11.6541ZM3.33333 18.3208H8.33333C8.79167 18.3208 9.16667 17.9458 9.16667 17.4875V14.1541C9.16667 13.6958 8.79167 13.3208 8.33333 13.3208H3.33333C2.875 13.3208 2.5 13.6958 2.5 14.1541V17.4875C2.5 17.9458 2.875 18.3208 3.33333 18.3208ZM11.6667 18.3208H16.6667C17.125 18.3208 17.5 17.9458 17.5 17.4875V10.8208C17.5 10.3625 17.125 9.98747 16.6667 9.98747H11.6667C11.2083 9.98747 10.8333 10.3625 10.8333 10.8208V17.4875C10.8333 17.9458 11.2083 18.3208 11.6667 18.3208ZM10.8333 4.15413V7.48747C10.8333 7.9458 11.2083 8.3208 11.6667 8.3208H16.6667C17.125 8.3208 17.5 7.9458 17.5 7.48747V4.15413C17.5 3.6958 17.125 3.3208 16.6667 3.3208H11.6667C11.2083 3.3208 10.8333 3.6958 10.8333 4.15413Z"
                      fill="#FFFFFF"
                      className={`${
                        pathname === "/dashboard" && "fill-dukiaBlue"
                      }`}
                    />
                  </svg>
                  Dashboard
                </Link>
              </li>

              {/* Buy Gold */}
              <li
                onClick={toggle}
                className={`${
                  pathname === "/dashboard/buy-gold"
                    ? "bg-white text-dukiaBlue"
                    : ""
                } px-5 py-3`}
              >
                <Link href="/buy-gold" className="flex gap-2.5 items-center">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.375 4.5708C3.5462 4.5708 2.75134 4.90004 2.16529 5.48609C1.57924 6.07214 1.25 6.867 1.25 7.6958V8.3208H18.75V7.6958C18.75 6.867 18.4208 6.07214 17.8347 5.48609C17.2487 4.90004 16.4538 4.5708 15.625 4.5708H4.375ZM18.75 9.5708H1.25V13.9458C1.25 14.7746 1.57924 15.5695 2.16529 16.1555C2.75134 16.7416 3.5462 17.0708 4.375 17.0708H15.625C16.4538 17.0708 17.2487 16.7416 17.8347 16.1555C18.4208 15.5695 18.75 14.7746 18.75 13.9458V9.5708ZM13.125 13.3208H15.625C15.7908 13.3208 15.9497 13.3866 16.0669 13.5039C16.1842 13.6211 16.25 13.78 16.25 13.9458C16.25 14.1116 16.1842 14.2705 16.0669 14.3877C15.9497 14.505 15.7908 14.5708 15.625 14.5708H13.125C12.9592 14.5708 12.8003 14.505 12.6831 14.3877C12.5658 14.2705 12.5 14.1116 12.5 13.9458C12.5 13.78 12.5658 13.6211 12.6831 13.5039C12.8003 13.3866 12.9592 13.3208 13.125 13.3208Z"
                      fill="white"
                      className={`${
                        pathname === "/dashboard/buy-gold" && "fill-dukiaBlue"
                      }`}
                    />
                  </svg>
                  Buy Gold
                </Link>
              </li>

              {/* Wallet */}
              <li
                onClick={toggle}
                className={`${
                  pathname === "/dashboard/wallet"
                    ? "bg-white text-dukiaBlue"
                    : ""
                } px-5 py-3`}
              >
                <Link
                  href="/dashboard/wallet"
                  className="flex gap-2.5 items-center"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16667 6.0293C3.55888 6.0293 2.97598 6.27074 2.54621 6.70051C2.11644 7.13028 1.875 7.71318 1.875 8.32096V15.821C1.875 16.4288 2.11644 17.0116 2.54621 17.4414C2.97598 17.8712 3.55888 18.1126 4.16667 18.1126H15.8333C16.4411 18.1126 17.024 17.8712 17.4538 17.4414C17.8836 17.0116 18.125 16.4288 18.125 15.821V8.32096C18.125 7.71318 17.8836 7.13028 17.4538 6.70051C17.024 6.27074 16.4411 6.0293 15.8333 6.0293H4.16667ZM13.75 11.0293C13.4737 11.0293 13.2088 11.139 13.0134 11.3344C12.8181 11.5297 12.7083 11.7947 12.7083 12.071C12.7083 12.3472 12.8181 12.6122 13.0134 12.8075C13.2088 13.0029 13.4737 13.1126 13.75 13.1126C14.0263 13.1126 14.2912 13.0029 14.4866 12.8075C14.6819 12.6122 14.7917 12.3472 14.7917 12.071C14.7917 11.7947 14.6819 11.5297 14.4866 11.3344C14.2912 11.139 14.0263 11.0293 13.75 11.0293Z"
                      fill="white"
                    />
                    <path
                      d="M13.7375 3.37847C13.9842 3.31272 14.2428 3.30454 14.4932 3.35456C14.7436 3.40458 14.9791 3.51147 15.1817 3.66697C15.3842 3.82248 15.5483 4.02244 15.6613 4.25142C15.7743 4.48041 15.8331 4.73229 15.8333 4.98764H7.5L13.7375 3.37847Z"
                      fill="white"
                      className={`${
                        pathname === "/dashboard/wallet" && "fill-dukiaBlue"
                      }`}
                    />
                  </svg>
                  Wallet
                </Link>
              </li>

              {/* Transactions */}
              <li
                onClick={toggle}
                className={`${
                  pathname === "/dashboard/transactions"
                    ? "bg-white text-dukiaBlue"
                    : ""
                } px-5 py-3`}
              >
                <Link
                  href="/dashboard/transactions"
                  className="flex gap-2.5 items-center"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8337 2.4873H4.16699C2.75033 2.4873 1.66699 3.57064 1.66699 4.9873V16.654C1.66699 18.0706 2.75033 19.154 4.16699 19.154H15.8337C17.2503 19.154 18.3337 18.0706 18.3337 16.654V4.9873C18.3337 3.57064 17.2503 2.4873 15.8337 2.4873ZM6.66699 14.9873C6.66699 15.4873 6.33366 15.8206 5.83366 15.8206C5.33366 15.8206 5.00033 15.4873 5.00033 14.9873V11.654C5.00033 11.154 5.33366 10.8206 5.83366 10.8206C6.33366 10.8206 6.66699 11.154 6.66699 11.654V14.9873ZM10.8337 14.9873C10.8337 15.4873 10.5003 15.8206 10.0003 15.8206C9.50033 15.8206 9.16699 15.4873 9.16699 14.9873V6.65397C9.16699 6.15397 9.50033 5.82064 10.0003 5.82064C10.5003 5.82064 10.8337 6.15397 10.8337 6.65397V14.9873ZM15.0003 14.9873C15.0003 15.4873 14.667 15.8206 14.167 15.8206C13.667 15.8206 13.3337 15.4873 13.3337 14.9873V9.98731C13.3337 9.48731 13.667 9.15397 14.167 9.15397C14.667 9.15397 15.0003 9.48731 15.0003 9.98731V14.9873Z"
                      fill="white"
                      className={`${
                        pathname === "/dashboard/transactions" &&
                        "fill-dukiaBlue"
                      }`}
                    />
                  </svg>
                  Transactions
                </Link>
              </li>

              {/* Charts */}
              <li
                onClick={toggle}
                className={`${
                  pathname === "/dashboard/charts"
                    ? "bg-white text-dukiaBlue"
                    : ""
                } px-5 py-3`}
              >
                <Link
                  href="/dashboard/charts"
                  className="flex gap-2.5 items-center"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16699 3.4708V18.1708C9.16699 18.7041 8.67533 19.1041 8.15866 18.9875C4.43366 18.1541 1.66699 14.8125 1.66699 10.8208C1.66699 6.82914 4.43366 3.48747 8.15866 2.65414C8.28037 2.62768 8.40647 2.62889 8.52765 2.65769C8.64882 2.68649 8.76198 2.74214 8.85877 2.82054C8.95556 2.89893 9.03351 2.99806 9.08686 3.11061C9.1402 3.22316 9.16759 3.34625 9.16699 3.4708ZM10.8587 3.4708V9.1458C10.8587 9.60414 11.2337 9.97914 11.692 9.97914H17.3503C17.8837 9.97914 18.2837 9.48747 18.167 8.96247C17.4587 5.82914 15.0003 3.36247 11.8753 2.65414C11.3503 2.53747 10.8587 2.93747 10.8587 3.4708ZM10.8587 12.4958V18.1708C10.8587 18.7041 11.3503 19.1041 11.8753 18.9875C15.0087 18.2791 17.467 15.8041 18.1753 12.6708C18.292 12.1541 17.8837 11.6541 17.3587 11.6541H11.7003C11.2337 11.6625 10.8587 12.0375 10.8587 12.4958Z"
                      fill="white"
                      className={`${
                        pathname === "/dashboard/charts" && "fill-dukiaBlue"
                      }`}
                    />
                  </svg>
                  Charts
                </Link>
              </li>

              {/* Settings */}
              <li
                onClick={toggle}
                className={`${
                  pathname === "/dashboard/settings"
                    ? "bg-white text-dukiaBlue"
                    : ""
                } px-5 py-3`}
              >
                <Link
                  href="/dashboard/settings"
                  className="flex gap-2.5 items-center"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.8994 2.61397C11.5911 2.4873 11.1994 2.4873 10.4169 2.4873C9.63443 2.4873 9.2436 2.4873 8.93443 2.61397C8.52397 2.78248 8.19725 3.10711 8.0261 3.51647C7.94776 3.7023 7.91776 3.9198 7.90526 4.23564C7.89971 4.46447 7.83587 4.68811 7.7198 4.8854C7.60373 5.0827 7.43926 5.24712 7.24193 5.36314C7.04088 5.47489 6.81488 5.53409 6.58487 5.53526C6.35485 5.53642 6.12826 5.47951 5.9261 5.3698C5.64443 5.22147 5.44026 5.1398 5.2386 5.11314C4.79739 5.05521 4.35116 5.1738 3.99693 5.44314C3.73193 5.6448 3.5361 5.98147 3.14526 6.65397C2.7536 7.32647 2.5586 7.6623 2.51443 7.99147C2.4561 8.4298 2.5761 8.87314 2.84776 9.22397C2.9711 9.38397 3.14526 9.51814 3.41443 9.68647C3.81193 9.93397 4.06693 10.3556 4.06693 10.8206C4.06693 11.2856 3.81193 11.7073 3.41526 11.954C3.14526 12.1231 2.9711 12.2573 2.84693 12.4173C2.71283 12.5906 2.6144 12.7887 2.55733 13.0003C2.50026 13.2118 2.48568 13.4326 2.51443 13.6498C2.5586 13.9781 2.7536 14.3148 3.14526 14.9873C3.53693 15.6598 3.73193 15.9956 3.99693 16.1981C4.35026 16.4673 4.79693 16.5856 5.2386 16.5281C5.44026 16.5015 5.64443 16.4198 5.9261 16.2715C6.12837 16.1616 6.35511 16.1046 6.58529 16.1058C6.81546 16.107 7.04161 16.1662 7.24276 16.2781C7.64776 16.5115 7.88776 16.9406 7.90526 17.4056C7.91776 17.7223 7.94776 17.939 8.0261 18.1248C8.1961 18.5331 8.52276 18.8581 8.93443 19.0273C9.24276 19.154 9.63443 19.154 10.4169 19.154C11.1994 19.154 11.5911 19.154 11.8994 19.0273C12.3099 18.8588 12.6366 18.5342 12.8078 18.1248C12.8861 17.939 12.9161 17.7223 12.9286 17.4056C12.9453 16.9406 13.1861 16.5106 13.5919 16.2781C13.793 16.1664 14.019 16.1072 14.249 16.106C14.479 16.1049 14.7056 16.1618 14.9078 16.2715C15.1894 16.4198 15.3936 16.5015 15.5953 16.5281C16.0369 16.5865 16.4836 16.4673 16.8369 16.1981C17.1019 15.9965 17.2978 15.6598 17.6886 14.9873C18.0803 14.3148 18.2753 13.979 18.3194 13.6498C18.3481 13.4325 18.3333 13.2117 18.2761 13.0002C18.2189 12.7886 18.1203 12.5905 17.9861 12.4173C17.8628 12.2573 17.6886 12.1231 17.4194 11.9548C17.0219 11.7073 16.7669 11.2856 16.7669 10.8206C16.7669 10.3556 17.0219 9.93397 17.4186 9.68731C17.6886 9.51814 17.8628 9.38397 17.9869 9.22397C18.121 9.05069 18.2195 8.85255 18.2765 8.641C18.3336 8.42945 18.3482 8.20869 18.3194 7.99147C18.2753 7.66314 18.0803 7.32647 17.6886 6.65397C17.2969 5.98147 17.1019 5.64564 16.8369 5.44314C16.4827 5.1738 16.0365 5.05521 15.5953 5.11314C15.3936 5.1398 15.1894 5.22147 14.9078 5.3698C14.7055 5.47966 14.4787 5.53665 14.2486 5.53549C14.0184 5.53432 13.7922 5.47504 13.5911 5.36314C13.3939 5.24702 13.2296 5.08255 13.1137 4.88526C12.9978 4.68798 12.9341 4.46439 12.9286 4.23564C12.9161 3.91897 12.8861 3.7023 12.8078 3.51647C12.7231 3.31375 12.5992 3.12971 12.4434 2.97485C12.2875 2.82 12.1027 2.69737 11.8994 2.61397ZM10.4169 13.3206C11.8086 13.3206 12.9361 12.2015 12.9361 10.8206C12.9361 9.43981 11.8078 8.32064 10.4169 8.32064C9.02526 8.32064 7.89776 9.43981 7.89776 10.8206C7.89776 12.2015 9.0261 13.3206 10.4169 13.3206Z"
                      fill="white"
                      className={`${
                        pathname === "/dashboard/settings" && "fill-dukiaBlue"
                      }`}
                    />
                  </svg>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-14 flex items-center">
              <Image
                src={profile}
                alt="Profile Image"
                className="w-10 h-10 object-cover rounded-[50%]"
              />

              <svg
                width="16"
                height="22"
                viewBox="0 0 16 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 right-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1991 1.05609C9.91746 0.725043 9.56726 0.459142 9.17272 0.276792C8.77818 0.0944429 8.34873 0 7.91409 0C7.47945 0 7.05 0.0944429 6.65547 0.276792C6.26093 0.459142 5.91073 0.725043 5.62909 1.05609L5.58709 1.10609C5.48434 1.22664 5.35442 1.32105 5.20803 1.38155C5.06164 1.44206 4.90297 1.46692 4.74509 1.45409L4.68009 1.44909C4.24702 1.41439 3.81158 1.47415 3.40388 1.62427C2.99618 1.77438 2.62594 2.01126 2.31878 2.31851C2.01162 2.62577 1.77486 2.99608 1.62487 3.40382C1.47489 3.81157 1.41525 4.24703 1.45009 4.68009L1.45409 4.74509C1.46692 4.90297 1.44206 5.06164 1.38155 5.20803C1.32105 5.35442 1.22664 5.48434 1.10609 5.58709L1.05609 5.62909C0.725043 5.91073 0.459142 6.26093 0.276793 6.65547C0.0944431 7.05 0 7.47945 0 7.91409C0 8.34873 0.0944431 8.77818 0.276793 9.17272C0.459142 9.56726 0.725043 9.91746 1.05609 10.1991L1.10609 10.2411C1.22664 10.3438 1.32105 10.4738 1.38155 10.6202C1.44206 10.7665 1.46692 10.9252 1.45409 11.0831L1.44909 11.1481C1.38953 11.8917 1.60898 12.6309 2.06468 13.2216C2.52038 13.8122 3.17968 14.212 3.91409 14.3431V20.9141C3.91407 21.0951 3.96319 21.2728 4.05622 21.4281C4.14925 21.5834 4.2827 21.7106 4.44233 21.796C4.60196 21.8814 4.78178 21.9218 4.96261 21.9131C5.14344 21.9043 5.31849 21.8466 5.46909 21.7461L7.91409 20.1161L10.3591 21.7461C10.5097 21.8466 10.6847 21.9043 10.8656 21.9131C11.0464 21.9218 11.2262 21.8814 11.3859 21.796C11.5455 21.7106 11.6789 21.5834 11.772 21.4281C11.865 21.2728 11.9141 21.0951 11.9141 20.9141V14.3441C12.6487 14.213 13.3081 13.813 13.7639 13.2222C14.2196 12.6313 14.4389 11.8919 14.3791 11.1481L14.3741 11.0831C14.3613 10.9252 14.3861 10.7665 14.4466 10.6202C14.5071 10.4738 14.6015 10.3438 14.7221 10.2411L14.7721 10.1991C15.1031 9.91746 15.369 9.56726 15.5514 9.17272C15.7337 8.77818 15.8282 8.34873 15.8282 7.91409C15.8282 7.47945 15.7337 7.05 15.5514 6.65547C15.369 6.26093 15.1031 5.91073 14.7721 5.62909L14.7221 5.58709C14.6015 5.48434 14.5071 5.35442 14.4466 5.20803C14.3861 5.06164 14.3613 4.90297 14.3741 4.74509L14.3791 4.68009C14.4138 4.24702 14.354 3.81158 14.2039 3.40388C14.0538 2.99618 13.8169 2.62594 13.5097 2.31878C13.2024 2.01162 12.8321 1.77486 12.4244 1.62487C12.0166 1.47489 11.5812 1.41525 11.1481 1.45009L11.0831 1.45409C10.9252 1.46692 10.7665 1.44206 10.6202 1.38155C10.4738 1.32105 10.3438 1.22664 10.2411 1.10609L10.1991 1.05609ZM5.91409 19.0461V15.0641C6.46432 15.5556 7.17629 15.8273 7.91409 15.8273C8.6519 15.8273 9.36387 15.5556 9.91409 15.0641V19.0441L8.46909 18.0811C8.30476 17.9715 8.11164 17.9129 7.91409 17.9129C7.71655 17.9129 7.52342 17.9715 7.35909 18.0811L5.91409 19.0461Z"
                  fill="#FFF5E2"
                />
                <path
                  d="M7.67168 11.9141V6.02906L6.32168 6.85406V5.52406L7.67168 4.71406H8.90168V11.9141H7.67168Z"
                  fill="#F0A900"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-1 font-semibold">
              <p className="text-sm">Boluwatife Eze</p>
              <p className="text-xs text-dukiaGold">SCP22032401017</p>
            </div>
          </div>

          <svg
            className="cursor-pointer"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_395_3140)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0883 9.41071C13.2445 9.56698 13.3323 9.77891 13.3323 9.99988C13.3323 10.2208 13.2445 10.4328 13.0883 10.589L8.37415 15.3032C8.29727 15.3828 8.20532 15.4463 8.10365 15.49C8.00198 15.5336 7.89263 15.5566 7.78198 15.5576C7.67133 15.5585 7.5616 15.5375 7.45919 15.4956C7.35677 15.4537 7.26373 15.3918 7.18548 15.3135C7.10724 15.2353 7.04536 15.1423 7.00346 15.0398C6.96156 14.9374 6.94048 14.8277 6.94144 14.717C6.9424 14.6064 6.96539 14.497 7.00906 14.3954C7.05274 14.2937 7.11622 14.2017 7.19581 14.1249L11.3208 9.99988L7.19581 5.87488C7.04401 5.71771 6.96002 5.50721 6.96192 5.28871C6.96382 5.07021 7.05146 4.8612 7.20596 4.70669C7.36047 4.55219 7.56948 4.46455 7.78798 4.46265C8.00648 4.46075 8.21698 4.54474 8.37415 4.69654L13.0883 9.41071Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_395_3140">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(0 -1 1 0 0 20)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </aside>
    </div>
  );
};

export default MobileSidebar;
