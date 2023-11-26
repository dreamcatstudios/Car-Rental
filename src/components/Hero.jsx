import React from "react";

const Hero = () => {
  return (
    <section className="container relative h-[80vh] w-full ">
      <div className="max-w-[133rem] p-[2.5rem] h-full w-full">
        <img
          className="absolute top-[-120px] right-0 z-[-1] hidden sm:block"
          src="/hero/hero-bg.png"
          alt="hero"
        />
        <div className="h-full w-full sm:grid-hero items-center justify-center">
          <div className="h-full flex flex-col justify-center items-center  sm:items-start gap-3 sm:gap-7">
            <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
              Plan your trip now
            </h3>
            <h1 className="text-5xl sm:text-7xl font-bold text-center sm:text-left leading-[50px] ">
              Save <span className="text-[#ff4d30]">big</span>{" "}
              <br className="block sm:hidden"></br>with our car rental
            </h1>
            <p className="text-[#706f7b] sm:text-xl text-center sm:text-left">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex flex-col w-full  sm:flex-row gap-4">
              <a
                className="px-12 py-5  text-center bg-[#ff4d30] text-white shadow-md shadow-[#fac7bd] hover:shadow-[#ff4d30] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-11]"
                href="#"
              >
                Book Ride
              </a>
              <a
                className="px-12 py-5 text-center bg-black text-white  hover:bg-white hover:text-black hover:border hover:border-black transition duration-300"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full hidden sm:block">
            <img
              className="max-h-full max-w-full "
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
