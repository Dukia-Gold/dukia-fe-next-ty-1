"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Hero from "@/components/landingPageComponents/landingPageSections/Hero";
import WhoWeAre from "@/components/landingPageComponents/landingPageSections/WhoWeAre";
import WhatWeOffer from "@/components/landingPageComponents/landingPageSections/WhatWeOffer";
import Newsletter from "@/components/landingPageComponents/landingPageSections/Newsletter";
import { toast } from "@/components/ui/use-toast";
import FAQ from "@/components/landingPageComponents/landingPageSections/FAQ";
import AsFeaturedIn from "@/components/landingPageComponents/landingPageSections/AsFeaturedIn";
import CustomerReviews from "@/components/landingPageComponents/landingPageSections/CustomersReviews";
import WhyChooseDukia from "@/components/landingPageComponents/landingPageSections/WhyChooseDukia";

export default function Home() {
  const [isOnline, setIsOnline] = useState(false);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  // ONLINE OR OFFLINE
  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window !== "undefined") {
      setIsOnline(window.navigator.onLine);

      const handleOnline = () => {
        toast({
          description: "You are back online!",
        });
        setIsOnline(true);
      };

      const handleOffline = () => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "You are offline!",
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

  // SESSION ACTIVITY
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then((registration) => {
  //         console.log(
  //           "Service Worker registered with scope:",
  //           registration.scope
  //         );

  //         const resetServiceWorkerTimeout = () => {
  //           if (navigator.serviceWorker.controller) {
  //             navigator.serviceWorker.controller.postMessage("resetTimeout");
  //           }
  //         };

  //         document.addEventListener("mousemove", resetServiceWorkerTimeout);
  //         document.addEventListener("keydown", resetServiceWorkerTimeout);

  //         // Initialize the timer on page load
  //         resetServiceWorkerTimeout();
  //       })
  //       .catch((error) => {
  //         console.error("Service Worker registration failed:", error);
  //       });

  //     navigator.serviceWorker.addEventListener("message", (event) => {
  //       if (event.data === "logout") {
  //         handleLogout();
  //       } else if (event.data.type === "timer") {
  //         setRemainingTime(event.data.remainingTime);
  //       }
  //     });
  //   }
  // }, []);

  const handleLogout = () => {
    // Perform any necessary logout operations, such as clearing tokens, etc.
    console.log("Logging out due to inactivity...");
    window.location.href = "/login"; // Redirect to the login page or perform other logout actions
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="xl:max-w-[1280px] xl:mx-auto">
      <Hero />

      <WhoWeAre />

      <WhatWeOffer />

      <WhyChooseDukia />

      <AsFeaturedIn />

      <CustomerReviews />

      <FAQ />

      <Newsletter />

      {remainingTime !== null && (
        <div className="pt-24 fixed top-2.5 right-2.5 bg-black text-white py-1 px-2.5 rounded">
          Remaining time: {remainingTime / 1000} seconds
        </div>
      )}
    </main>
  );
}
