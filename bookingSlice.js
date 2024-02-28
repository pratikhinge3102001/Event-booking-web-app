import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    resetBookings: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveBooking.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bookings.push(action.payload);
      })
      .addCase(saveBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const saveBooking = createAsyncThunk(
  'bookings/saveBooking',
  async (bookingData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch('http://localhost:8080/savebooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { addBooking, resetBookings } = bookingsSlice.actions;

export default bookingsSlice.reducer;