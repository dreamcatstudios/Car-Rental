import React from "react";

const Download = () => {
  return (
    <section className="container">
      <div className="mt-10 pt-16 pb-32 sm:pt-32 sm:pb-32 flex flex-col bg-[##f8f8f8] sm:bg-[url('https://car-rental-ten.vercel.app/static/media/bg02.3efbc4567749d0a5671e.png')] sm:bg-cover  ">
        <div className="flex flex-col gap-5 sm:w-[60%]">
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Download Our App
          </h1>
          <p className="text-center sm:text-left">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-4">
            <img
              className="w-[80%] sm:w-[25%]"
              src="/public/download/googleapp.svg"
              alt=""
            />
            <img
              className="w-[80%] sm:w-[25%]"
              src="/public/download/appstore.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <img src="/public/" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Download;
