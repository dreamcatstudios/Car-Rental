import React from "react";

const Banner = () => {
  return (
    <div className="w-full p-16 bg-[#2d2d2d] mt-32 mb-32 ">
      <div className="flex flex-col gap-3">
        <h1 className=" text-4xl sm:text-5xl text-white font-bold text-center">
          Save big with our cheap car rental!
        </h1>
        <p className="text-xl text-white text-center">
          Top Airports. Local Suppliers. 24/7 Support.
        </p>
      </div>
    </div>
  );
};

export default Banner;
