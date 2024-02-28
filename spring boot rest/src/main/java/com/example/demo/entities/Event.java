package com.example.demo.entities;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "event_id")
	private int eventId;

    @Column(name = "eventname", length = 255)
    private String eventName;

    @Column(name = "description", columnDefinition = "text")
    private String description;

    @Column(name = "startDate")
    private Date startDate;

    @Column(name = "endDate")
    private Date endDate;  // Added endDate

    @Column(name = "venue", length = 255)
    private String venue;

    @Column(name = "AvailableTickets")
    private int availableTickets;

    @Column(name = "ticketPrice", precision = 10, scale = 2)
    private BigDecimal ticketPrice;

    @Column(name = "location", length = 255)
    private String location; 

    @JsonIgnoreProperties("event")
    @ManyToOne
    @JoinColumn(name = "organiser_id")
    private Organiser organiser;

    @JsonIgnoreProperties("event")
    @ManyToOne
    @JoinColumn(name = "cat_id")
    private Category category;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    Set<Booking> booking;

	public Event() {
		super();
	}

	public Event(int eventId, String eventName, String description, Date startDate, Date endDate, String venue,
			int availableTickets, BigDecimal ticketPrice, String location, Organiser organiser, Category category,
			Set<Booking> booking) {
		super();
		this.eventId = eventId;
		this.eventName = eventName;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.venue = venue;
		this.availableTickets = availableTickets;
		this.ticketPrice = ticketPrice;
		this.location = location;
		this.organiser = organiser;
		this.category = category;
		this.booking = booking;
	}

	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public int getAvailableTickets() {
		return availableTickets;
	}

	public void setAvailableTickets(int availableTickets) {
		this.availableTickets = availableTickets;
	}

	public BigDecimal getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(BigDecimal ticketPrice) {
		this.ticketPrice = ticketPrice;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Organiser getOrganiser() {
		return organiser;
	}

	public void setOrganiser(Organiser organiser) {
		this.organiser = organiser;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Set<Booking> getBooking() {
		return booking;
	}

	public void setBooking(Set<Booking> booking) {
		this.booking = booking;
	}

	@Override
	public String toString() {
		return "Event [eventId=" + eventId + ", eventName=" + eventName + ", description=" + description
				+ ", startDate=" + startDate + ", endDate=" + endDate + ", venue=" + venue + ", availableTickets="
				+ availableTickets + ", ticketPrice=" + ticketPrice + ", location=" + location + ", organiser="
				+ organiser + ", category=" + category + ", booking=" + booking + "]";
	}

    

	
}