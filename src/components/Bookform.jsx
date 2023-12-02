import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openModal, setBooking } from "../context/Store";

const Bookform = () => {
  const [options, setOptions] = useState({
    cars: "VW Golf 6",
    pickUp: "Dehradun",
    dropOff: "Deharadun",
    pickUpDate: new Date().toISOString().slice(0, 10),
    dropOffDate: new Date().toISOString().slice(0, 10),
    carImg: "/cars-big/bmw-box.png",
  });

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(
      setBooking({
        cars: options.cars,
        pickUp: options.pickUp,
        dropOff: options.dropOff,
        pickUpDate: options.pickUpDate,
        dropOffDate: options.dropOffDate,
        carImg: options.carImg,
      })
    );
    dispatch(openModal());
  };

  const carData = [
    {
      cars: {
        "VW Golf 6": "/cars-big/golf6-box.png",
        "Toyota Camry": "/cars-big/toyotacamry.jpg",
        "Mercedes Benz": "/cars-big/benz.jpg",
        "BMW 320 ModernLine": "/cars-big/bmw320.jpg",
        "Audi A1 S-Line": "/cars-big/audi-box.png",
        "VW Passat CC": "/cars-big/passatcc.jpg",
      },
      pickUp: ["Dehradun", "Delhi", "Chandigarh", "Mumbai", "Kolkata"],
      dropOff: ["Dehradun", "Delhi", "Chandigarh", "Mumbai", "Kolkata"],
    },
  ];

  const handleSelectChange = (e) => {
    const { name, value } = e.target;

    setOptions((prevOptions) => {
      if (name === "cars") {
        return {
          ...prevOptions,
          [name]: value,
          carImg: carData[0].cars[value],
        };
      } else {
        return {
          ...prevOptions,
          [name]: value,
        };
      }
    });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  return (
    <section className="container">
      <div className="bg-[url('/book-car/book-bg.png')] p-10 m-4 shadow-lg translate-y-[-5%]">
        <h1 className="font-bold text-xl">Book a car</h1>
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between sm:items-center mt-5 ">
            <div className="">
              <label className="font-bold">Select a Car Type</label>
              <br />
              <select
                required
                className="px-5 py-3 w-full border bg-gray-200"
                name="cars"
                value={options.cars}
                onChange={handleSelectChange}
              >
                {Object.keys(carData[0].cars).map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold">Pick-up</label>
              <br />
              <select
                required
                className="px-5 py-3 w-full border bg-gray-200"
                name="pickUp"
                value={options.pickUp}
                onChange={handleSelectChange}
              >
                {carData[0].pickUp.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold">Drop-off</label>
              <br />
              <select
                required
                className="px-5 py-3 w-full border bg-gray-200"
                name="dropOff"
                value={options.dropOff}
                onChange={handleSelectChange}
              >
                {carData[0].dropOff.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between sm:items-center  ">
            <div>
              <label className="font-bold">Pick Up</label>
              <br />
              <input
                required
                value={options.pickUpDate}
                onChange={handleDateChange}
                className="border w-full p-3"
                type="date"
                name="pickUpDate"
              />
            </div>
            <div>
              <label className="font-bold">Drop off</label>
              <br />
              <input
                required
                value={options.dropOffDate}
                onChange={handleDateChange}
                className="border w-full p-3"
                type="date"
                name="dropOffDate"
                id=""
              />
            </div>
            <div>
              <button
                onClick={handleSearch}
                className="px-10 py-4 bg-[#ff4d30] text-white shadow-lg shadow-[#ff4d30]"
                href="#"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookform;
