// import { NewsletterAPI } from "@/api/newsletter";
import NewsletterAPI from "@/api/newsletter";
import Image from "next/image";
import { useState } from "react";

const Newsletter = () => {
  const handleSubscribe = NewsletterAPI();
  const [loading, setLoading] = useState<boolean>(false);

  const subscribeNewsletter = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.target);

    await handleSubscribe(data);
    setLoading(false);
  };

  return (
    <section className="py-12 px-4 sm:px-0 flex flex-col gap-6 items-center bg-[#F3F3F4] dark:bg-dukiaDark">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/mail-dynamic-premium_vghfe7.png"
          alt="Shield Dynamic Premium"
          width={64}
          height={64}
        />

        <div className="text-dukiaBlue dark:text-white flex flex-col gap-2 text-center">
          <p className="font-bold text-2xl">Sign Up For Our Newsletter</p>
          <p>
            Stay updated with the latest gold market trends, news, and insights
          </p>
        </div>
      </div>

      <form action="" onSubmit={subscribeNewsletter} className="grid md:grid-cols-3 gap-2">
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Your email address"
          className="md:col-span-2 bg-white dark:bg-dukiaBlue outline-none rounded-lg w-[15.75rem] md:w-[23.25rem] text-sm text-dukiaBlue dark:text-white placeholder:text-dukiaBlue/[50%] dark:placeholder:text-white/[50%] dark:border dark:border-dukiaGold px-6 py-4"
        />
        <button
          type="submit"
          className="bg-dukiaBlue rounded-lg text-white font-semibold py-3.5 px-4"
        >
          {loading ? "Loading" : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
