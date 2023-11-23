import React from "react";

const Planselection = () => {
  return (
    <section className="container">
      <div className="flex flex-col text-center mt-32">
        <h3 className="text-3xl font-semibold">Plan your trip now</h3>
        <h1 className="text-5xl font-bold">Quick & easy car rental</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 flex-wrap mt-12">
        <div className="flex flex-col text-center  items-center p-8">
          <img className="w-40" src="/public/plan/icon1.png" alt="" />
          <h1 className="text-2xl font-bold">Select Car</h1>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="flex flex-col text-center  items-center  p-8">
          <img className="w-40" src="/public/plan/icon1.png" alt="" />
          <h1 className="text-2xl font-bold">Contact Operator</h1>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="flex flex-col text-center  items-center  p-8">
          <img className="w-40" src="/public/plan/icon1.png" alt="" />
          <h1 className="text-2xl font-bold">Let's Drive</h1>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
};

export default Planselection;
