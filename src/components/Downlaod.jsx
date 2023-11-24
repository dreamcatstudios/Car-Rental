import React from "react";

const Downlaod = () => {
  return (
    <section className="container">
      <div className="pt-32 pb-32 p-8 flex flex-col bg-[url('https://car-rental-ten.vercel.app/static/media/bg02.3efbc4567749d0a5671e.png')] bg-cover  ">
        <div className="flex flex-col gap-5 w-[60%]">
          <h1 className="text-4xl font-bold text-left">Download Our App</h1>
          <p className="text-left">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-4">
            <img
              className="w-[25%]"
              src="/public/download/googleapp.svg"
              alt=""
            />
            <img
              className="w-[25%]"
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

export default Downlaod;
