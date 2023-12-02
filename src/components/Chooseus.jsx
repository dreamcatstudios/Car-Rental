import React from "react";

const Chooseus = () => {
  return (
    <section className="container">
      <div className="max-w-[133rem] p-[2.5rem] mb-32 flex flex-col items-center justify-center">
        <div>
          <img src="/chooseUs/main.png" alt="" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center sm:justify-start ">
          <div className="flex flex-col justify-center items-center mb-10 gap-5 sm:justify-start sm:items-start">
            <h1 className="font-bold  text-center sm:text-left sm:text-xl">
              Why Choose Us
            </h1>
            <h1 className="font text-3xl font-bold text-center sm:text-5xl sm:text-left max-w-xl">
              Best valued deals you will ever find
            </h1>
            <p className="text-center sm:text-left max-w-xl ">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <div>
              <a
                className="px-5 py-3 bg-[#ff4d30]  shadow-md shadow-[#fac7bd] hover:shadow-[#ff4d30] text-white "
                href=""
              >
                Find Details
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-5">
              <img
                className="w-[90%] h-[90%]  sm:w-[90%] md:w-[50%] lg:w-[25%]"
                src="/chooseUs/icon1.png"
                alt=""
              />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl">
                  Cross Country Drive
                </h1>
                <p className="">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                className="w-[90%] h-[90%]  sm:w-[90%] md:w-[50%] lg:w-[25%]"
                src="/chooseUs/icon2.png"
                alt=""
              />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl">
                  All Inclusive Pricing
                </h1>
                <p className="">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                className="w-[90%] h-[90%] sm:w-[90%] md:w-[50%] lg:w-[25%]"
                src="/chooseUs/icon3.png"
                alt=""
              />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl">
                  No Hidden Charges
                </h1>
                <p className="">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chooseus;
