import { configureStore, createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { modal: false },
  reducers: {
    openModal(state) {
      state.modal = true;
    },
    closeModal(state) {
      state.modal = false;
    },
  },
});

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    booking: {
      cars: "",
      pickUp: "",
      dropOff: "",
      pickUpDate: "",
      dropOffDate: "",
      carImg: "",
    },
  },
  reducers: {
    setBooking(state, action) {
      state.booking = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    booking: bookingSlice.reducer,
  },
});

export const { setBooking } = bookingSlice.actions;
export const { openModal, closeModal } = modalSlice.actions;

// // Subscribe to the store to log changes to the booking data
// store.subscribe(() => {
//   const state = store.getState();
//   console.log("Booking Data Changed:", state.booking.booking);
// });

export default store;
