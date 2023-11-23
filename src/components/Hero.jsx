import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full align-middle">
      <div className="container h-full self-center">
        <img
          className="absolute top-[-100px] right-0 z-[-1]"
          src="/hero/hero-bg.png"
          alt="hero"
        />
        <div className="h-full w-full grid-hero items-center justify-center m-7 ">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">Plan your trip now</h3>
            <h1 className="text-6xl font-bold">
              Save <span className="text-[#ff4d30]">big</span> with our car
              rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex flex-row gap-4">
              <a
                className="px-10 py-4 bg-[#ff4d30] text-white shadow-lg shadow-orange-200"
                href="#"
              >
                Book Ride
              </a>
              <a className="px-10 py-4 bg-black text-white shadow-lg " href="#">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full overflow-clip">
            <img
              className="max-h-full max-w-full overflow-clip"
              src="/hero/main-car.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
