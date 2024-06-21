import React from "react";
import FAQComp from "../FAQComp";

const FAQ = () => {
  const FAQArray = [
    {
      id: 1,
      title: "Who is Dukia Gold? ",
      content:
        "Dukia Gold & Precious Metals Refining Co. Ltd (“Dukia Gold”) is a full-service bullion merchant involved in the trading (buying and selling), vaulting and custodial services of gold and other precious metals in addition to our other gold value chain activities from mines to market. ",
    },
    {
      id: 2,
      title: "How do I buy gold from you?",
      content:
        "Once your Dukia Gold Trading Account has been set up, you can then start buying from our selection of investment grade gold products.",
    },
    {
      id: 3,
      title: "What are your delivery methods?",
      content:
        "Our packages are discretely wrapped and delivered through our partner couriers with an option for insurance. You can also advise your preferred courier service provider and arrange for your insurance. When you receive goods from us by courier, we advise you ensure the external packaging has not been tampered with. If you notice any sign of tampering or damages, you should not sign for it.",
    },
    {
      id: 4,
      title: "Can you store your gold with us?",
      content:
        "Yes, you can opt for storage of your gold at our designated LBMA accredited state-of-the-art, high security, and fully insured storage facility in Switzerland and UK. ",
    },
  ];

  const title = "Lorem ipsum dolor sit amet consectetur?";
  return (
    <section className="flex flex-col items-center gap-14 py-12 px-4 sm:px-auto">
      <p className="font-bold text-2xl">Frequently Asked Questions (FAQs)</p>

      <div className="grid gap-4">
        {FAQArray.map((faq) => (
          <FAQComp key={faq.id} title={faq.title} content={faq.content} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
