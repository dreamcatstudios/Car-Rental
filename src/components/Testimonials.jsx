import React from "react";

const Testimonials = () => {
  return (
    <section className="container bg-[#f8f8f8]">
      <div className="max-w-[133rem] p-[2.5rem] pt-32 pb-32  flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold  sm:text-xl text-center">
          Reviewed by People
        </h1>
        <h1 className="text-4xl sm:text-5xl  text-center font-bold">
          Client's Testimonials
        </h1>
        <p className="text-center max-w-2xl ">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
        <div className="flex flex-col gap-5 mt-12 mb-12 sm:flex-row  ">
          <div className="p-12 bg-white shadow-md">
            <h1 className="font-bold text-xl">
              "I rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </h1>
            <div className="flex">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>- Jatin Bhandari</p>
              </div>
            </div>
          </div>

          <div className="p-12 bg-white shadow-md">
            <h1 className="font-bold text-xl">
              "I rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </h1>
            <div className="flex">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>- Jasmine Negi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
