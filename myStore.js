import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./isLoggedSlice";
import eventDetail from './components/attendee/eventSlice';
import { addBooking } from "./components/attendee/bookingSlice";


export default configureStore({
        reducer:{
            logged: loggedReducer,
            events: eventDetail,
            bookings : addBooking,
        
        }
});