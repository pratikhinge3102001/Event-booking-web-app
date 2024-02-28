package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BookingDTO;
import com.example.demo.entities.Booking;
import com.example.demo.services.BookingService;


	
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookingController {

	@Autowired
	BookingService bservice;
	

	
	@GetMapping("/getallbooking")
	public List<Booking> getBooking()
	{
		return bservice.getBooking();
	}
	
	

	
//	@PostMapping("/savebooking")
//    public ResponseEntity<BookingDTO> saveBooking(@RequestBody BookingDTO bookingDTO) {
//        BookingDTO savedBooking = bservice.saveBooking(bookingDTO);
//        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
//    }
//	
	
	
	@PostMapping("/savebooking")
	public ResponseEntity<BookingDTO> saveBooking(@RequestBody BookingDTO bookingDTO) {
	    BookingDTO savedBooking = bservice.saveBooking(bookingDTO);
	    System.out.println(bookingDTO.getUpiid());
	    return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
	}
	
	
	@GetMapping("/events/{bid}")
	public Booking findEventById(@PathVariable int bid) {
	    return bservice.getEventById(bid);
	}
	
	@DeleteMapping("/deletebooking/{bid}") 
    public String deleteEvent(@PathVariable int bid) {
        return bservice.deleteBooking(bid);
    }
	
	@GetMapping("/userattendee/{attendee_id}")
    public ResponseEntity<List<Booking>> getBookingsByAttendeeId(@PathVariable int attendee_id) {
        List<Booking> bookings = bservice.getBookingsByAttendeeId(attendee_id);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
	

}
