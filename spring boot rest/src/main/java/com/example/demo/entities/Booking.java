//package com.example.demo.entities;
//
//import java.sql.Date;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//
//@Entity
//@Table(name="booking")
//public class Booking {
//	 @Id
//	 int bookingId;
//	 
//	 @JsonIgnoreProperties("booking")
//	    @ManyToOne
//	    @JoinColumn(name = "attendeeID")
//	    private Attendee attendee;
//	 
//	 @JsonIgnoreProperties("booking")
//	    @ManyToOne
//	    @JoinColumn(name = "eventId")
//	    private Event event;
//	 
//	 @Column(name="bookingDate")
//		Date bookingDate;
//	 
//	 @Column(name="ticketQuantity")
//		int ticketQuantity;
//	 
//	 @Column(name="totalCost")
//		Double totalCost;
//	 
//	 
//
//	public int getBookingId() {
//		return bookingId;
//	}
//
//	public void setBookingId(int bookingId) {
//		this.bookingId = bookingId;
//	}
//
//	public Attendee getAttendee() {
//		return attendee;
//	}
//
//	public void setAttendee(Attendee attendee) {
//		this.attendee = attendee;
//	}
//
//	public Event getEvent() {
//		return event;
//	}
//	
//	public void setEvent(Event event) {
//		this.event = event;
//	}
//
//
//	
//
//	public Date getBookingDate() {
//		return bookingDate;
//	}
//
//	public void setBookingDate(Date bookingDate) {
//		this.bookingDate = bookingDate;
//	}
//
//	public int getTicketQuantity() {
//		return ticketQuantity;
//	}
//
//	public void setTicketQuantity(int ticketQuantity) {
//		this.ticketQuantity = ticketQuantity;
//	}
//
//	public Double getTotalCost() {
//		return totalCost;
//	}
//
//	public void setTotalCost(Double totalCost) {
//		this.totalCost = totalCost;
//	}
//
//	public Booking(int bookingId, Attendee attendee, Event event, Date bookingDate, int ticketQuantity,
//			Double totalCost) {
//		super();
//		this.bookingId = bookingId;
//		this.attendee = attendee;
//		this.event = event;
//		this.bookingDate = bookingDate;
//		this.ticketQuantity = ticketQuantity;
//		this.totalCost = totalCost;
//	}
//
//	public Booking(Attendee attendee, Event event, Date bookingDate, int ticketQuantity, Double totalCost) {
//		super();
//		this.attendee = attendee;
//		this.event = event;
//		this.bookingDate = bookingDate;
//		this.ticketQuantity = ticketQuantity;
//		this.totalCost = totalCost;
//	}
//
//	@Override
//	public String toString() {
//		return "Booking [bookingId=" + bookingId + ", attendee=" + attendee + ", event=" + event
//				+ ", bookingDate=" + bookingDate + ", ticketQuantity=" + ticketQuantity + ", totalCost=" + totalCost
//				+ "]";
//	}
//	
//	public Booking() {
//		
//	}
//
//	
//	
//	
//	
//	 
//	 
//	 
//	 
//
//}


package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;


@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
@Table(name="booking")
public class Booking {
    @Id
    int bookingId;

    @JsonIgnoreProperties("booking")
    @ManyToOne
    @JoinColumn(name = "attendeeID")
    private Attendee attendee;

    @JsonIgnoreProperties("booking")
    @ManyToOne
    @JoinColumn(name = "eventId")
    private Event event;

    @Column(name="bookingDate")
    Date bookingDate;

    @Column(name="ticketQuantity")
    int ticketQuantity;

    @Column(name="totalCost")
    Double totalCost;

    @Column(name="payment_status")
    private Integer paymentStatus = 1;

    @Column(name="payment_mode")
    private String paymentMode;

    @Column(name="upiid")
    private String upiid;

    @Column(name="bookingstatus")
    private Integer bookingStatus = 1;

    

    public Booking(int bookingId, Attendee attendee, Event event, Date bookingDate, int ticketQuantity,
            Double totalCost, int paymentStatus, String paymentMode, String upiid, int bookingStatus) {
        super();
        this.bookingId = bookingId;
        this.attendee = attendee;
        this.event = event;
        this.bookingDate = bookingDate;
        this.ticketQuantity = ticketQuantity;
        this.totalCost = totalCost;
        this.paymentStatus = paymentStatus;
        this.paymentMode = paymentMode;
        this.upiid = upiid;
        this.bookingStatus = bookingStatus;
    }

    public Booking(Attendee attendee, Event event, Date bookingDate, int ticketQuantity, Double totalCost,
            int paymentStatus, String paymentMode, String upiid, int bookingStatus) {
        super();
        this.attendee = attendee;
        this.event = event;
        this.bookingDate = bookingDate;
        this.ticketQuantity = ticketQuantity;
        this.totalCost = totalCost;
        this.paymentStatus = paymentStatus;
        this.paymentMode = paymentMode;
        this.upiid = upiid;
        this.bookingStatus = bookingStatus;
    }

    

    public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public Attendee getAttendee() {
		return attendee;
	}

	public void setAttendee(Attendee attendee) {
		this.attendee = attendee;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
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

//	public int getPaymentStatus() {
//        return paymentStatus;
//    }
	
	public int getPaymentStatus() {
	    return paymentStatus != null ? paymentStatus : 0; // or any default value
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

//    public int getBookingStatus() {
//        return bookingStatus;
//    }
    
    public int getBookingStatus() {
	    return bookingStatus != null ? paymentStatus : 0; // or any default value
	}


    public void setBookingStatus(int bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    

    @Override
    public String toString() {
        return "Booking [bookingId=" + bookingId + ", attendee=" + attendee + ", event=" + event
                + ", bookingDate=" + bookingDate + ", ticketQuantity=" + ticketQuantity + ", totalCost=" + totalCost
                + ", paymentStatus=" + paymentStatus + ", paymentMode=" + paymentMode + ", upiid=" + upiid
                + ", bookingStatus=" + bookingStatus + "]";
    }

    public Booking() {

    }

}

