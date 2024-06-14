"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Hero from "@/components/landingPageComponents/landingPageSections/Hero";
import WhoWeAre from "@/components/landingPageComponents/landingPageSections/WhoWeAre";

export default function Home() {
  const [isOnline, setIsOnline] = useState(false);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  // ONLINE OR OFFLINE
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

  // SESSION ACTIVITY
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
      <Hero />

      {/* WHO WE ARE */}
      <WhoWeAre />

      {remainingTime !== null && (
        <div className="pt-24 fixed top-2.5 right-2.5 bg-black text-white py-1 px-2.5 rounded">
          Remaining time: {remainingTime / 1000} seconds
        </div>
      )}
    </main>
  );
}
