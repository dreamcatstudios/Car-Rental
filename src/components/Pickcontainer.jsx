import React, { useEffect, useState } from "react";

const Pickcontainer = () => {
  const carData = [
    {
      id: 1,
      image: "/public/cars-big/audia1.jpg",
      name: "Audi A1 S-Line",
      mark: "A1",
      year: "2012",
      doors: "4/5",
      transmission: "Manual",
      fuel: "Gasoline",
      ac: "Yes",
      price: "45",
      active: true,
    },
    {
      id: 2,
      image: "/public/cars-big/benz.jpg",
      name: "VW Golf 6",
      mark: "Volkswagen",
      year: "2008",
      doors: "4/5",
      transmission: "Automatic",
      fuel: "Diesel",
      ac: "Yes",
      price: "45",
      active: false,
    },
    {
      id: 3,
      image: "/public/cars-big/bmw320.jpg",
      name: "Toyota Camry",
      mark: "Toyota",
      year: "2006",
      doors: "4/5",
      transmission: "Automatic",
      fuel: "Hybrid",
      ac: "Yes",
      price: "45",
      active: false,
    },
    {
      id: 4,
      image: "/public/cars-big/golf6.jpg",
      name: "BMW 320 Modernline",
      mark: "BMW",
      year: "2012",
      doors: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      ac: "Yes",
      price: "45",
      active: false,
    },
    {
      id: 5,
      image: "/public/cars-big/passatcc.jpg",
      name: "Benz C Class",
      mark: "Mercedes",
      year: "2006",
      doors: "4/5",
      transmission: "Automatic",
      fuel: "Petrol",
      ac: "Yes",
      price: "45",
      active: false,
    },
    {
      id: 6,
      image: "/public/cars-big/toyotacamry.jpg",
      name: "Passat CC",
      mark: "Volkswagen",
      year: "2008",
      doors: "4/5",
      transmission: "Automatic",
      fuel: "Gasoline",
      ac: "Yes",
      price: "45",
      active: false,
    },
  ];

  const [car, setCar] = useState(carData);

  const handleClick = (index) => {
    setCar((prevState) => {
      return prevState.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      });
    });
  };

  //   useEffect(() => {
  //     console.log("car: ", car);
  //   }, [car]);

  return (
    <section className="container">
      <div className="max-w-[133rem] p-[2.5rem] mt-32 mb-32">
        <div className="flex flex-col gap-2  ">
          <h3 className="text-2xl sm:text-3xl font-bold text-center">
            Vechile Models
          </h3>
          <h1 className="text-4xl sm:text-5xl font-bold text-center">
            Our rental fleet
          </h1>
          <p className="text-center">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-1  mt-16 sm:grid-cols-3 sm:gap-4 ">
          {car.map((item) => {
            return (
              <div key={item.id} className="flex flex-col gap-4">
                <div
                  onClick={() => handleClick(item.id)}
                  className={
                    item.active
                      ? `px-8  bg-[#ff4d30] py-4 text-white font-bold whitespace-nowrap`
                      : `px-8  bg-[#e9e9e9] py-4 text-black font-bold whitespace-nowrap`
                  }
                >
                  {item.name}
                </div>
              </div>
            );
          })}
          {car.map((item) => {
            if (item.active) {
              return (
                <div>
                  <img src={item.image} alt="car-image" />
                </div>
              );
            }
          })}
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="border bottom-0 w-full">
              <div className="w-full">
                <h1 className="font-bold text-white bg-[#ff4d30] text-center">
                  $45/ rent per day
                </h1>
              </div>
              {/* Car INFO DETAIL */}
              {car.map((item) => {
                if (item.active) {
                  //This code is good
                  return Object.entries(item).map(([key, value]) => {
                    if (
                      key === "id" ||
                      key === "image" ||
                      key === "active" ||
                      key === "price"
                    ) {
                      return null;
                    } else {
                      return (
                        <div className="border border-black grid grid-cols-2">
                          <div className="border">{key}</div>
                          <div>{value}</div>
                        </div>
                      );
                    }
                  });
                }
              })}
            </div>
            <div>
              <a
                className="px-5 py-3 text-white font-bold bg-[#ff4d30]"
                href=""
              >
                Reserve Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pickcontainer;
