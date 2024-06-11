"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function Home() {
  const [isOnline, setIsOnline] = useState(false);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window !== "undefined") {
      setIsOnline(window.navigator.onLine);

      const handleOnline = () => {
        toast.success("You are back online!", {
          position: "bottom-right",
        });
        setIsOnline(true);
      };

      const handleOffline = () => {
        toast.error("You are offline!", {
          position: "bottom-right",
        });
        setIsOnline(false);
      };

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  // const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );

          const resetServiceWorkerTimeout = () => {
            if (navigator.serviceWorker.controller) {
              navigator.serviceWorker.controller.postMessage("resetTimeout");
            }
          };

          document.addEventListener("mousemove", resetServiceWorkerTimeout);
          document.addEventListener("keydown", resetServiceWorkerTimeout);

          // Initialize the timer on page load
          resetServiceWorkerTimeout();
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });

      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data === "logout") {
          handleLogout();
        } else if (event.data.type === "timer") {
          setRemainingTime(event.data.remainingTime);
        }
      });
    }
  }, []);

  const handleLogout = () => {
    // Perform any necessary logout operations, such as clearing tokens, etc.
    console.log("Logging out due to inactivity...");
    window.location.href = "/login"; // Redirect to the login page or perform other logout actions
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="">
      {/* HERO */}
      <section className="h-screen pt-24 px-3 md:px-12 xl:px-24 py-4 flex flex-col xl:flex-row gap-3 justify-center items-center bg-[#f1f5f9]">
        <Image
          src="https://res.cloudinary.com/dcu3hr3eo/image/upload/v1685716140/Dukia-Gold-Hero_fokz3g.png"
          alt="Gold Bars"
          width={1000}
          height={600}
        />

        <div className="flex flex-col gap-4">
          <p className="text-dukiaBlue font-bold md:text-4xl xl:text-4xl 2xl:text-6xl">
            Dukia Gold is the Foremost & Largest Full-Service Bullion Dealer in
            Nigeria, West Africa
          </p>
          <p className="text-dukiaGold font-semibold md:text-2xl xl:text-2xl 2xl:text-5xl">
            Creating ease of access to investment grade gold & other precious
            metals in Nigeria via a safe and secure trading platform
          </p>
          <div className="flex gap-4">
            <button className="border hover:bg-dukiaBlue hover:text-white border-dukiaGold px-7 py-3 rounded-3xl">
              Learn More
            </button>
            <button className="bg-dukiaBlue hover:bg-dukiaGold text-white px-7 py-3 rounded-3xl">
              Buy Gold
            </button>
          </div>
        </div>
      </section>

      {/* BUY GOLD WITH EASE */}
      <section className="flex flex-col gap-8 px-1 md:px-12 xl:px-24 py-20 bg-dukiaGrey justify-between">
        <div
          className="grid sm:mx-auto w-[100%] sm:w-[70%] lg:w-[40%] gap-2 py-1 md:p-4"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <hr className="w-14 h-1 bg-dukiaGold mx-auto mb-5" />
          <h1 className=" font-bold lg:text-4xl md:text-3xl text-2xl text-white text-center">
            Buy gold with ease
          </h1>
          <p className="text-center text-sm text-white md:text-base">
            {" "}
            Dukia Gold offers an easy, secure and accessible way to buy, sell,
            invest and do much more with gold. With Dukia Gold, you have full
            control and peace of mind over securing your financial future
          </p>
          <hr className="w-14 h-1 bg-dukiaGold mx-auto m-4" />
        </div>

        {/* BOXES */}
        <div className="grid w-[95%] md:w-[80%] mx-auto text-center md:grid-cols-1 lg:grid-cols-2 items-center content-center gap-8">
          {/* BUY GOLD */}
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            className=" p-4 sm:py-10 bg-slate-100 ease-in-out duration-300 rounded-lg hover:scale-105 hover:shadow-lg shadow-md  bg-opacity-80"
          >
            <div className="text-sm md:text-base flex gap-3 flex-nowrap justify-between">
              <svg
                className="text-grey-lite dark:text-slate-700  w-1/3x basis-24 min-w-[96px] "
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                ></path>
              </svg>
              <div
                className="text-left"
                title="A LBMA gold bar is simply a gold bar manufactured by a refiner listed in the Good Delivery list (= LBMA approved refiner). Therefore, a LBMA gold bar is a bullion bar manufactured with the same quality standards as a Good Delivery bar."
                data-tooltip="A LBMA gold bar is simply a gold bar manufactured by a refiner listed in the Good Delivery list (= LBMA approved refiner). Therefore, a LBMA gold bar is a bullion bar manufactured with the same quality standards as a Good Delivery bar."
              >
                <h2 className="text-blue font-bold text-xl">Buy Gold</h2>
                Buy from our wide selection of real physical gold of 99.99%
                purity stored for you at Brink&apos;s or for insured delivery to
                your doorstep.
              </div>
            </div>
          </div>

          {/* SELL GOLD */}
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            className="p-4 sm:py-10 bg-slate-100 ease-in-out duration-300 rounded-lg hover:scale-105 hover:shadow-lg shadow-md  bg-opacity-80"
          >
            <div className="text-sm md:text-base flex gap-3 flex-nowrap justify-betweenx">
              <svg
                className="text-grey-lite dark:text-slate-700   w-1/3x basis-24 min-w-[96px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
              <div className="text-left">
                <h2 className="text-blue font-bold text-xl">Sell Gold</h2>
                Get instant liquidity for your gold and get paid
              </div>
            </div>
          </div>

          {/* CONTROL AND FLEXIBILITY */}
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            className="p-4 sm:py-10 bg-slate-100 ease-in-out duration-300 rounded-lg hover:scale-105 hover:shadow-lg shadow-md  bg-opacity-80"
          >
            <div className="text-smX md:text-base flex gap-3 flex-nowrap  justify-betweenx">
              <svg
                className="text-grey-lite dark:text-slate-700  w-1/3x basis-24 min-w-[96px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>

              <div className="text-left">
                <h2 className="text-blue font-bold text-xl">
                  Control &amp; Flexibility
                </h2>
                Buy gold based on your budget, and even better, set up an
                investment plan
              </div>
            </div>
          </div>

          {/* REAL-TIME TRACKING */}
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            className="p-4 sm:py-10 bg-slate-100 ease-in-out duration-300 rounded-lg hover:scale-105 hover:shadow-lg shadow-md  bg-opacity-80"
          >
            <div className="text-smX md:text-base flex gap-3 flex-nowrap justify-betweenX">
              <svg
                className="text-grey-lite dark:text-slate-700  basis-24 min-w-[96px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                ></path>
              </svg>

              <div className="text-left">
                <h2 className="text-blue font-bold text-xl">
                  Real-time tracking
                </h2>
                See how your portfolio is doing
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="Insight-tag"
        className="grid w-[100%] gap-8 dark:text-black  mb-20"
      ></div>

      {remainingTime !== null && (
        <div className="pt-24 fixed top-2.5 right-2.5 bg-black text-white py-1 px-2.5 rounded">
          Remaining time: {remainingTime / 1000} seconds
        </div>
      )}
      {/* {!isOnline && <div className="pt-24 offline-banner">You are offline</div>} */}
      {/* {isOnline === null ? (
        <p className="pt-24">Checking network status...</p>
      ) : isOnline ? (
        <p className="pt-24">You are online</p>
      ) : (
        <p className="pt-24">You are offline</p>
      )} */}
      <ToastContainer />
    </main>
  );
}
