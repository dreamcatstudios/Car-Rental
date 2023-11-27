import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../context/Store";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.modal);

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  // Add styles to disable scroll when the modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "visible";

    // Cleanup: Remove styles when the component is unmounted or when the modal is closed
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [modal]);

  return (
    modal && (
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div class="bg-white h-[90%] overflow-scroll ">
          <div class="bg-[#ff4d30] p-7  flex items-center justify-between ">
            <h2 className="text-white font-bold text-2xl">
              Complete Reservation
            </h2>
            <svg
              onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white w-7 h-7 font-bold border"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </div>
          <div class="bg-[#ffeae6]">
            <h4 className="text-xl font-bold text-[#ff4d30] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-info-circle-filled"
              >
                <path
                  d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                  fill="currentColor"
                  stroke-width="0"
                ></path>
              </svg>
              Upon completing this reservation enquiry, you will receive:
            </h4>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          <div class="m-7">
            <div class="dates-div">
              <div class="booking-modal__car-info__dates">
                <h5>Location &amp; Date</h5>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-map-pin-filled"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                  <div>
                    <h6>Pick-Up Date &amp; Time</h6>
                    <p>
                      2023-11-22 / <input type="time" className="border " />
                    </p>
                  </div>
                </span>
              </div>
              <div class="booking-modal__car-info__dates">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-map-pin-filled"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                  <div>
                    <h6>Drop-Off Date &amp; Time</h6>
                    <p>
                      2023-11-20 / <input type="time" className="border " />
                    </p>
                  </div>
                </span>
              </div>
              <div class="booking-modal__car-info__dates">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-map-pin-filled"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                  <div>
                    <h6>Pick-Up Location</h6>
                    <p>Belgrade</p>
                  </div>
                </span>
              </div>
              <div class="booking-modal__car-info__dates">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-map-pin-filled"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                  <div>
                    <h6>Drop-Off Location</h6>
                    <p>Belgrade</p>
                  </div>
                </span>
              </div>
            </div>
            <div class="booking-modal__car-info__model">
              <h5>
                <span>Car -</span> VW Golf 6
              </h5>
              <img
                src="/static/media/golf6.595c0bbfc7ce2e50aa05.jpg"
                alt="car_img"
              />
            </div>
          </div>
          <div class="m-7">
            <h4 className="font-bold text-xl">Personal Information</h4>
            <form class="flex flex-col">
              <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-3">
                <span className="flex flex-col">
                  <label>
                    First Name <b>*</b>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value=""
                    className="border p-3 bg-[#dbdbdb]"
                  />
                  <p class="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Last Name <b>*</b>
                  </label>
                  <input
                    className="border p-3 bg-[#dbdbdb]"
                    type="text"
                    placeholder="Enter your last name"
                    value=""
                  />
                  <p class="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Phone Number <b>*</b>
                  </label>
                  <input
                    className="border p-3 bg-[#dbdbdb]"
                    type="tel"
                    placeholder="Enter your phone number"
                    value=""
                  />
                  <p class="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Age <b>*</b>
                  </label>
                  <input
                    className="border p-3 bg-[#dbdbdb]"
                    type="number"
                    placeholder="18"
                    value=""
                  />
                  <p class="error-modal">This field is required.</p>
                </span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <span className="flex flex-col">
                  <label>
                    Email <b>*</b>
                  </label>
                  <input
                    className="border p-3 bg-[#dbdbdb]"
                    type="email"
                    placeholder="Enter your email address"
                    value=""
                  />
                  <p class="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Address <b>*</b>
                  </label>
                  <input
                    className="border p-3 bg-[#dbdbdb]"
                    type="text"
                    placeholder="Enter your street address"
                    value=""
                  />
                  <p class="error-modal">This field is required.</p>
                </span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <span className="flex flex-col">
                  <label>
                    City <b>*</b>
                  </label>
                  <input
                    className="border p-3 bg-[#dbdbdb]"
                    type="text"
                    placeholder="Enter your city"
                    value=""
                  />
                  <p class="error-modal">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label>
                    Zip Code <b>*</b>
                  </label>
                  <input
                    className="border p-3 bg-[#dbdbdb]"
                    type="text"
                    placeholder="Enter your zip code"
                    value=""
                  />
                  <p class="error-modal">This field is required.</p>
                </span>
              </div>
              <span class="flex gap-3 mt-5 mb-5">
                <input className="border w-5" type="checkbox" />
                <p>Please send me latest news and updates</p>
              </span>
              <div class="bg-gray-300  p-5">
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
