import React from "react";

const Download = () => {
  return (
    <section className="container">
      <div className="w-full p-10 flex flex-col bg-[##f8f8f8] max-w-[133rem] items-center sm:items-start mt-10 pt-16 pb-32 sm:pt-32 sm:pb-32  lg:bg-[url('https://car-rental-ten.vercel.app/static/media/bg02.3efbc4567749d0a5671e.png')] lg:bg-cover">
        <div className="flex flex-col gap-5 max-w-5xl ">
          <h1 className="text-5xl font-bold text-center sm:text-left">
            Download Our App
          </h1>
          <p className="text-center sm:text-left">
            Thrown shy denote ten ladies though ask saw. Or by to he going think{" "}
            <br className="hidden sm:block"></br>
            order event music. Incommode so intention defective at convinced.
            <br className="hidden sm:block"></br>
            Led income months itself and houses you.
          </p>
          <div className="flex gap-4">
            <img
              className="w-[80%] sm:w-[25%]"
              src="/download/googleapp.svg"
              alt=""
            />
            <img
              className="w-[80%] sm:w-[25%]"
              src="/download/appstore.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <img src="/" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Download;
