import React from "react";

const Pickcontainer = () => {
  return (
    <section className="container">
      <div className="mt-32 mb-32">
        <div className="flex flex-col gap-3  ">
          <h3 className="text-2xl font-bold text-center">Vechile Models</h3>
          <h1 className="text-4xl font-bold text-center">Our rental fleet</h1>
          <p className="text-center">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip car_img
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-16">
          <div className="flex flex-col gap-4">
            <div className="px-8 bg-[#ff4d30] py-4 text-white font-bold">
              Audi A1 S-Line
            </div>
            <div className="px-8 bg-[#ff4d30] py-4 text-white font-bold">
              Audi A1 S-Line
            </div>
          </div>
          <div>
            <img src="/public/cars-big/audia1.jpg" alt="" />
          </div>
          <div>
            <div className="border">
              <div className="w-full pb-5">
                <h1 className="font-bold text-white bg-[#ff4d30] text-center">
                  $45/ rent per day
                </h1>
              </div>
              <div className="border border-black grid grid-cols-2">
                <div className="border">Model</div>
                <div>Audi</div>
              </div>
            </div>
            <a className="px-5 py-3  bg-[#ff4d30]" href="">
              Reserve Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pickcontainer;
