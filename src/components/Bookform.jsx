import React from "react";

const Bookform = () => {
  const carData = [
    {
      cars: ["VW Golf 6", "Toyota Camry", "Mercedes Benz", "BMW 3 Series"],
      pickUp: ["Dehradun", "Delhi", "Chandigarh", "Mumbai"],
      dropOff: ["Dehradun", "Delhi", "Chandigarh", "Mumbai"],
    },
  ];

  return (
    <div className="container">
      <div className="bg-white p-10 m-4 shadow-lg translate-y-[-5%]">
        <h1 className="font-bold text-xl">Book a car</h1>
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-row justify-between items-center">
            <div className="mt-5">
              <label>Select a Car Type</label>
              <br></br>
              <select className="px-5 py-3" name="" id="">
                {carData[0]["cars"].map((item, index) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <div>
              <label>Pick-up</label>
              <br></br>
              <select className="px-5 py-3" name="" id="">
                {carData[0]["pickUp"].map((item, index) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>

            <div>
              <label>Drop-off</label>
              <br></br>
              <select className="px-5 py-3" name="" id="">
                {carData[0]["pickUp"].map((item, index) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <label>Pick Up</label>
              <br></br>
              <input type="date" name="" id="" />
            </div>
            <div>
              <label>Drop of</label>
              <br></br>
              <input type="date" name="" id="" />
            </div>
            <div>
              <a
                className="px-10 py-4 bg-[#ff4d30] text-white shadow-lg shadow-orange-200"
                href="#"
              >
                Book Ride
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Bookform;
