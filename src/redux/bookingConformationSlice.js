import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HttpClient from "../helper/HttpClient";

// 2. Asynchronous Thunks

export const addBookingConformationData = createAsyncThunk(
  "order/add",
  async (formData, { getState, rejectWithValue }) => {
    try {
      const response = await HttpClient.post("/confirmBooking", formData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// 3. Order Slice Definition

const bookingConformationSlice = createSlice({
  name: "booking",
  initialState: {
    bookingDetails: [],
    error: null,
    loading: false, // Added error to handle any errors that might occur
  },
  reducers: {
    // Add your synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchOrdersData fulfilled state
      .addCase(addBookingConformationData.pending, (state) => {
        state.loading = true; // Set loading to true when the request is in progress
      })
      .addCase(addBookingConformationData.fulfilled, (state, action) => {
        state.bookingDetails = action.payload;
        state.error = null;
        state.loading = false;
      })
      // Handle addOrdersData fulfilled state
      // Handle rejected states for both fetchOrdersData and addOrdersData
      .addMatcher(
        (action) => [addBookingConformationData.rejected].includes(action.type),
        (state, action) => {
          state.error = action.error.message || "An error occurred";
        }
      );
  },
});

// 4. Export the order reducer
export default bookingConformationSlice.reducer;