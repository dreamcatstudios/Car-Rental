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

const store = configureStore({
  reducer: { modal: modalSlice.reducer },
});

export const modalActions = modalSlice.actions;

export default store;
