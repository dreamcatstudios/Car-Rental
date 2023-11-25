import React from "react";

const Chooseus = () => {
  return (
    <section className="container">
      <div className="mb-32">
        <div>
          <img src="/public/chooseUs/main.png" alt="" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center ">
          <div className="flex flex-col justify-center items-center mb-10 gap-5">
            <h1 className="font-bold  text-center">Why Choose Us</h1>
            <h1 className="font text-3xl font-bold text-center">
              Best valued deals you will ever find
            </h1>
            <p className="text-center text-xs">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <div>
              <a
                className="px-5 py-3 bg-[#ff4d30] text-white shadow-lg "
                href=""
              >
                Find Details
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex gap-1">
              <img
                className="w-[40%] h-[40%]"
                src="/public/chooseUs/icon1.png"
                alt=""
              />
              <div>
                <h1 className="font-bold">Cross Country Drive</h1>
                <p className="text-xs">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <img
                className="w-[40%] h-[40%]"
                src="/public/chooseUs/icon2.png"
                alt=""
              />
              <div>
                <h1 className="font-bold">All Inclusive Pricing</h1>
                <p className="text-xs">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <img
                className="w-[40%] h-[40%]"
                src="/public/chooseUs/icon3.png"
                alt=""
              />
              <div>
                <h1 className="font-bold">No Hidden Charges</h1>
                <p className="text-xs">
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
