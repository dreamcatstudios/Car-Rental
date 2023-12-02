import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../context/Store";

const Modal = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState({
    bgColor: " bg-[#ffeae6] p-7",
    textColor: "text-xl font-bold text-[#ff4d30]",
    message: "Upon completing this reservation enquiry, you will receive:",
    subheading:
      "Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessage({
      bgColor: "bg-[#e6ffe6] p-7",
      textColor: "text-xl font-bold text-[#00b300]",
      message: "Your reservation has been confirmed!",
      subheading: "Thank you for choosing us!",
    });
    alert("Your reservation has been confirmed!");
  };

  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const modal = useSelector((state) => state.modal.modal);

  const data = useSelector((state) => state.booking.booking);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  // Add styles to disable scroll when the modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "visible";
    console.log(data);
    // Cleanup: Remove styles when the component is unmounted or when the modal is closed
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [modal]);

  return (
    modal && (
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white h-[90%] overflow-scroll ">
          <div className="bg-[#ff4d30] p-7  flex items-center justify-between ">
            <h2 className="text-white font-bold text-2xl">
              Complete Reservation
            </h2>
            <svg
              onClick={handleCloseModal}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white w-7 h-7 font-bold border"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </div>
          <div className={message.bgColor}>
            <h4 className={message.textColor}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-info-circle-filled"
              >
                <path
                  d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              {message.message}
            </h4>
            <p>{message.subheading}</p>
          </div>
          <div className="m-7 flex-col gap-5">
            <div className="dates-div">
              <div className="booking-modal__car-info__dates">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-map-pin-filled"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                  <div>
                    <h6>Pick-Up Date &amp; Time</h6>
                    <p>
                      <p>{data["pickUpDate"]} </p>
                    </p>
                  </div>
                </span>
              </div>
              <div className="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-map-pin-filled"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                  <div>
                    <h6>Drop-Off Date &amp; Time</h6>
                    <p>{data["dropOffDate"]} </p>
                  </div>
                </span>
              </div>
              <div className="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-map-pin-filled"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                  <div>
                    <h6>Pick-Up Location</h6>
                    <p>{data["pickUp"]}</p>
                  </div>
                </span>
              </div>
              <div className="booking-modal__car-info__dates">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-map-pin-filled"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                  <div>
                    <h6>Drop-Off Location</h6>
                    <p>{data["dropOff"]}</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="booking-modal__car-info__model">
              <h5>
                <span>Car -</span> {data["cars"]}
              </h5>
              <img src={data["carImg"]} alt="car_img" />
            </div>
          </div>
          <div className="m-7">
            <h4 className="font-bold text-xl">Personal Information</h4>
            <form onSubmit={handleFormSubmit} className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3">
                <span className="flex flex-col">
                  <label>
                    First Name <b>*</b>
                  </label>
                  <input
                    value={inputState.firstName}
                    type="text"
                    required
                    name="firstName"
                    placeholder="Enter your first name"
                    onChange={(e) => handleChange(e)}
                    className="border p-3 bg-[#dbdbdb]"
                  />
                  <p className="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Last Name <b>*</b>
                  </label>
                  <input
                    name="lastName"
                    required
                    value={inputState.lastName}
                    className="border p-3 bg-[#dbdbdb]"
                    type="text"
                    placeholder="Enter your last name"
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Phone Number <b>*</b>
                  </label>
                  <input
                    name="phone"
                    required
                    value={inputState.phone}
                    className="border p-3 bg-[#dbdbdb]"
                    type="tel"
                    placeholder="Enter your phone number"
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Age <b>*</b>
                  </label>
                  <input
                    name="age"
                    required
                    value={inputState.age}
                    className="border p-3 bg-[#dbdbdb]"
                    type="number"
                    placeholder="18"
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error-modal">This field is required.</p>
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <span className="flex flex-col">
                  <label>
                    Email <b>*</b>
                  </label>
                  <input
                    name="email"
                    required
                    value={inputState.email}
                    className="border p-3 bg-[#dbdbdb]"
                    type="email"
                    placeholder="Enter your email address"
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Address <b>*</b>
                  </label>
                  <input
                    name="address"
                    required
                    value={inputState.address}
                    className="border p-3 bg-[#dbdbdb]"
                    type="text"
                    placeholder="Enter your street address"
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error-modal">This field is required.</p>
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <span className="flex flex-col">
                  <label>
                    City <b>*</b>
                  </label>
                  <input
                    name="city"
                    required
                    value={inputState.city}
                    className="border p-3 bg-[#dbdbdb]"
                    type="text"
                    placeholder="Enter your city"
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Zip Code <b>*</b>
                  </label>
                  <input
                    name="zipCode"
                    required
                    value={inputState.zipCode}
                    className="border p-3 bg-[#dbdbdb]"
                    type="text"
                    placeholder="Enter your zip code"
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error-modal">This field is required.</p>
                </span>
              </div>

              <div className="bg-gray-300 mt-5 p-5">
                <button className="px-5 py-3 bg-[#ff4d30] text-white font-bold">
                  Reserve Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
