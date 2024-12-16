import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice";
import bookingConformationReducer from "./bookingConformationSlice";

const store = configureStore({
  reducer: {
    bookingSlice: bookingReducer,
    bookingConformationSlice: bookingConformationReducer,
  },
});

export default store;
