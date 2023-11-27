import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { modalActions } from "../context/Store"; // Fix the import

const Bookform = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.modal);

  const openModal = () => {
    dispatch(modalActions.openModal());
  };

  const carData = [
    {
      cars: ["VW Golf 6", "Toyota Camry", "Mercedes Benz", "BMW 3 Series"],
      pickUp: ["Dehradun", "Delhi", "Chandigarh", "Mumbai"],
      dropOff: ["Dehradun", "Delhi", "Chandigarh", "Mumbai"],
    },
  ];

  return (
    <section className="container">
      <div className=" bg-[url('/book-car/book-bg.png')] p-10 m-4 shadow-lg translate-y-[-5%]">
        <h1 className="font-bold text-xl">Book a car</h1>
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <div className="mt-5">
              <label className="font-bold">Select a Car Type</label>
              <br></br>
              <select className="px-5 py-3 w-full" name="" id="">
                {carData[0]["cars"].map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="font-bold">Pick-up</label>
              <br></br>
              <select className="px-5 py-3 w-full" name="" id="">
                {carData[0]["pickUp"].map((item, index) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>

            <div>
              <label className="font-bold">Drop-off</label>
              <br></br>
              <select className="px-5 py-3 w-full" name="" id="">
                {carData[0]["pickUp"].map((item, index) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between">
            <div>
              <label className="font-bold">Pick Up</label>
              <br></br>
              <input className="border" type="date" name="" id="" />
            </div>
            <div>
              <label className="font-bold">Drop of</label>
              <br></br>
              <input className="border" type="date" name="" id="" />
            </div>
            <div>
              <a
                onClick={openModal}
                className="px-10 py-4 bg-[#ff4d30] text-white shadow-lg shadow-[#ff4d30]"
                href="#"
              >
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookform;
