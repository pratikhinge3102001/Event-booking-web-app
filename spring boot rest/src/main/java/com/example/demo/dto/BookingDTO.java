//package com.example.demo.dto;
//
//import java.sql.Date;
//
//public class BookingDTO {
//    private int bookingId;
//    private int attendeeId;
//    private int eventId;
//    private Date bookingDate;
//    private int ticketQuantity;
//    private Double totalCost;
//
//    // Constructors, getters, and setters
//
//    public BookingDTO() {
//    }
//
//    public BookingDTO(int bookingId, int attendeeId, int eventId, Date bookingDate, int ticketQuantity, Double totalCost) {
//        this.bookingId = bookingId;
//        this.attendeeId = attendeeId;
//        this.eventId = eventId;
//        this.bookingDate = bookingDate;
//        this.ticketQuantity = ticketQuantity;
//        this.totalCost = totalCost;
//    }
//
//    // Getters and setters for each field
//
//    public int getBookingId() {
//        return bookingId;
//    }
//
//    public void setBookingId(int bookingId) {
//        this.bookingId = bookingId;
//    }
//
//    public int getAttendeeId() {
//        return attendeeId;
//    }
//
//    public void setAttendeeId(int attendeeId) {
//        this.attendeeId = attendeeId;
//    }
//
//    public int getEventId() {
//        return eventId;
//    }
//
//    public void setEventId(int eventId) {
//        this.eventId = eventId;
//    }
//
//    public Date getBookingDate() {
//        return bookingDate;
//    }
//
//    public void setBookingDate(Date bookingDate) {
//        this.bookingDate = bookingDate;
//    }
//
//    public int getTicketQuantity() {
//        return ticketQuantity;
//    }
//
//    public void setTicketQuantity(int ticketQuantity) {
//        this.ticketQuantity = ticketQuantity;
//    }
//
//    public Double getTotalCost() {
//        return totalCost;
//    }
//
//    public void setTotalCost(Double totalCost) {
//        this.totalCost = totalCost;
//    }
//}






package com.example.demo.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingDTO {

    private int bookingId;

    private int attendeeId;

    private int eventId;

    private Date bookingDate;

    private int ticketQuantity;

    private Double totalCost;

    private int paymentStatus;

    private String paymentMode;

    private String upiid;

    private int bookingStatus;

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getAttendeeId() {
        return attendeeId;
    }

    public void setAttendeeId(int attendeeId) {
        this.attendeeId = attendeeId;
    }

    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public int getTicketQuantity() {
        return ticketQuantity;
    }

    public void setTicketQuantity(int ticketQuantity) {
        this.ticketQuantity = ticketQuantity;
    }

    public Double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }

    public int getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(int paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }

    public String getUpiid() {
        return upiid;
    }

    public void setUpiid(String upiid) {
        this.upiid = upiid;
    }

    public int getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(int bookingStatus) {
        this.bookingStatus = bookingStatus;
    }
}

