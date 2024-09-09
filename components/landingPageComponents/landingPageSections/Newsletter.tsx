// import { NewsletterAPI } from "@/api/newsletter";
import NewsletterAPI from "@/api/newsletter";
import Image from "next/image";
import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

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
    <section className="mt-[120px] px-4 sm:px-0 dark:bg-dukiaDark">
      <div className="max-w-[1064px] mx-auto w-full">
        <div className="rounded-t-2xl bg-[#FBF7EB] pl-5 pr-8 mx-20 flex items-center justify-between">
          <div></div>

          <div className="py-3">
            <button className="flex items-center gap-2.5 border border-dukiaGold rounded-full p-2.5 pl-5">
              <p className="font-semibold">Sell to Us</p>
              <div className="bg-dukiaGold rounded-full p-1">
                <RiArrowRightLine color="white" />
              </div>
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-2 border-dukiaGold rounded-2xl py-20 px-8 bg-[url('https://res.cloudinary.com/dvcw253zw/image/upload/v1725896130/newsletter-bg_dfjfrp.png')] bg-cover bg-center bg-no-repeat bg-opacity-80 bg-black flex items-end justify-between">
          {/* Text Section */}
          <div className="space-y-5 text-white font-extrabold">
            {/* Sign Up for Our Newsletter */}
            <p className="text-[2.5rem]/[3.75rem]">
              Sign Up for
              <br /> Our Newsletter
            </p>

            {/* Stay updated with the latest gold market trends, news, and insights  */}
            <p className="text-xl/[1.875rem]">
              Stay updated with the latest gold
              <br /> market trends, news, and insights
            </p>
          </div>

          {/* Form Section */}
          <form
            action=""
            onSubmit={subscribeNewsletter}
            className="flex flex-col md:flex-row md:items-end gap-2"
          >
            <div className="flex flex-col gap-2 w-full font-semibold">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your email address"
                className="bg-white dark:bg-dukiaBlue outline-none rounded-lg w-[15.75rem] md:w-[23.25rem] text-sm text-dukiaBlue dark:text-white placeholder:text-[#676D88] dark:placeholder:text-white/[50%] dark:border dark:border-dukiaGold px-4 py-3.5"
              />
            </div>

            <button
              type="submit"
              className="bg-dukiaGold rounded-lg text-white font-semibold py-3 px-4"
            >
              {loading ? "Loading" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
