package com.example.demo.services;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.BookingDTO;
import com.example.demo.entities.Attendee;
import com.example.demo.entities.Booking;
import com.example.demo.entities.Event;
import com.example.demo.repositories.BookingRepository;




@Service
public class BookingService {
	
	@Autowired
	BookingRepository brepo;
	

	
	public List<Booking> getBooking() {
        return brepo.findAll();
    }
	
	public String deleteBooking(int bid) {
        brepo.deleteById(bid);
        return "Event Deleted";
    }
	
	public List<Booking> getBookingsByAttendeeId(int attendee_id) {
        return brepo.findBookingsByAttendeeId(attendee_id);
    }

	
	
	
//	public Booking saveBooking(Booking b) {
//        return brepo.save(b);
//    }
	
	public BookingDTO saveBooking(BookingDTO bookingDTO) {
        // Convert BookingDTO to Booking entity
        Booking booking = convertToEntity(bookingDTO);

        // Save the Booking entity
        Booking savedBooking = brepo.save(booking);

        // Convert the saved Booking entity back to BookingDTO and return
        return convertToDTO(savedBooking);
    }

//    private Booking convertToEntity(BookingDTO bookingDTO) {
//        Booking booking = new Booking();
//        booking.setBookingId(bookingDTO.getBookingId());
//        booking.setBookingDate(bookingDTO.getBookingDate());
//        booking.setTicketQuantity(bookingDTO.getTicketQuantity());
//        booking.setTotalCost(bookingDTO.getTotalCost());
//        // Set other fields accordingly
//
//        // Assuming that Attendee and Event entities are present in your code
//        Attendee attendee = new Attendee();
//        attendee.setAttendee_id(bookingDTO.getAttendeeId());
//        booking.setAttendee(attendee);
//
//        Event event = new Event();
//        event.setEventId(bookingDTO.getEventId());
//        booking.setEvent(event);
//
//        return booking;
//    }
//
//    private BookingDTO convertToDTO(Booking booking) {
//        BookingDTO bookingDTO = new BookingDTO();
//        booking.setBookingId(bookingDTO.getBookingId());
//        booking.setBookingDate(bookingDTO.getBookingDate());
//        booking.setTicketQuantity(bookingDTO.getTicketQuantity());
//        booking.setTotalCost(bookingDTO.getTotalCost());
//        // Set other fields accordingly
//
//        // Assuming that Attendee and Event entities are present in your code
//        bookingDTO.setAttendeeId(booking.getAttendee().getAttendee_id());
//        bookingDTO.setEventId(booking.getEvent().getEventId());
//
//        return bookingDTO;
//    }
	
	
//	public BookingDTO saveBooking(BookingDTO bookingDTO) {
//	    // Convert BookingDTO to Booking entity
//	    Booking booking = convertToEntity(bookingDTO);
//
//	    // Save the Booking entity
//	    Booking savedBooking = brepo.save(booking);
//
//	    return savedBooking;
//	}

	private Booking convertToEntity(BookingDTO bookingDTO) {
	    Booking booking = new Booking();
	    booking.setBookingId(bookingDTO.getBookingId());
	    booking.setBookingDate(bookingDTO.getBookingDate());
	    booking.setTicketQuantity(bookingDTO.getTicketQuantity());
	    booking.setTotalCost(bookingDTO.getTotalCost());
	    booking.setPaymentStatus(bookingDTO.getPaymentStatus());
	    booking.setPaymentMode(bookingDTO.getPaymentMode());
	    booking.setUpiid(bookingDTO.getUpiid());
	    booking.setBookingStatus(bookingDTO.getBookingStatus());

	    // Assuming that Attendee and Event entities are present in your code
	    Attendee attendee = new Attendee();
	    attendee.setAttendee_id(bookingDTO.getAttendeeId());
	    booking.setAttendee(attendee);

	    Event event = new Event();
	    event.setEventId(bookingDTO.getEventId());
	    booking.setEvent(event);

	    return booking;
	}

	private BookingDTO convertToDTO(Booking booking) {
	    BookingDTO bookingDTO = new BookingDTO();
	    bookingDTO.setBookingId(booking.getBookingId());
	    bookingDTO.setBookingDate(booking.getBookingDate());
	    bookingDTO.setTicketQuantity(booking.getTicketQuantity());
	    bookingDTO.setTotalCost(booking.getTotalCost());
	    bookingDTO.setPaymentStatus(booking.getPaymentStatus());
	    bookingDTO.setPaymentMode(booking.getPaymentMode());
	    bookingDTO.setUpiid(booking.getUpiid());
	    bookingDTO.setBookingStatus(booking.getBookingStatus());

	    // Assuming that Attendee and Event entities are present in your code
	    bookingDTO.setAttendeeId(booking.getAttendee().getAttendee_id());
	    bookingDTO.setEventId(booking.getEvent().getEventId());

	    return bookingDTO;
	}


	
	public Booking getEventById(int bid) {
        return brepo.findById(bid).orElseThrow(EntityNotFoundException::new);
    }


}
