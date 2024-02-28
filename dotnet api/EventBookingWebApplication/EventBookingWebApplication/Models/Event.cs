using System;
using System.Collections.Generic;

namespace EventBookingWebApplication.Models;

public partial class Event
{
    public int EventId { get; set; }

    public int? AvailableTickets { get; set; }

    public string? Description { get; set; }

    public string? Eventname { get; set; }

    public DateOnly? StartDate { get; set; }

    public decimal? TicketPrice { get; set; }

    public string? Venue { get; set; }

    public int? OrganiserId { get; set; }

    public DateOnly? EndDate { get; set; }

    public string? Location { get; set; }

    public int? CatId { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual Category? Cat { get; set; }

    public virtual Organiser? Organiser { get; set; }
}
