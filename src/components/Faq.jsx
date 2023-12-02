import React, { useEffect, useState } from "react";

const Faq = () => {
  const accordionContent = [
    {
      id: 1,
      question: "1. What is special about comparing rental car deals?",
      answer:
        "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
      state: false,
    },
    {
      id: 2,
      question: "2. How do I find the car rental deals?",
      answer:
        "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
      state: false,
    },
    {
      id: 3,
      question: "3. How do I find such low rental car prices?",
      answer:
        "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
      state: false,
    },
  ];

  const [click, setClick] = useState(
    accordionContent.map((item) => item["state"])
  );

  const handleClick = (index) => {
    const newClick = [...click];
    newClick[index] = !newClick[index];
    setClick(newClick);
  };

  const accordion = {
    normal:
      " p-3 pt-0 pb-0 h-0 bg-white overflow-hidden transition-all ease-in-out delay-45 ",
    hover:
      "p-3 pt-3 pb-3 h-auto overflow-hidden transition-all ease-in-out delay-45 ",
  };

  return (
    <section className="container shadow-lg ">
      <div className="w-full h-full bg-white flex flex-col justify-center items-center  pt-8 pb-32">
        <div className="flex flex-col mt-12 gap-3 bg-white ">
          <h1 className="text-xl text-center font-bold">FAQ</h1>
          <h1 className="text-4xl sm:text-5xl font-bold text-center">
            Frequently Asked Question
          </h1>
          <p className="text-center max-w-2xl">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="mt-14 max-w-5xl">
          {accordionContent.map((item, index) => {
            return (
              <div className="shadow-lg ">
                <div
                  className={
                    click[index]
                      ? "bg-[#ff4d30] p-4 shadow-lg text-white"
                      : "bg-white p-4 border"
                  }
                >
                  <h1 onClick={() => handleClick(index)}>{item.question}</h1>
                </div>
                <div
                  className={
                    click[index] ? accordion["hover"] : accordion["normal"]
                  }
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
