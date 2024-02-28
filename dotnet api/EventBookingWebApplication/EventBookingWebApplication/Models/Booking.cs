using System;
using System.Collections.Generic;

namespace EventBookingWebApplication.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public DateOnly? BookingDate { get; set; }

    public string? TicketQuantity { get; set; }

    public double? TotalCost { get; set; }

    public int? Attendeeid { get; set; }

    public int? EventId { get; set; }

    public ulong? ByCash { get; set; }

    public ulong? ByUpi { get; set; }

    public ulong? Status { get; set; }

    public virtual Attendee? Attendee { get; set; }

    public virtual Event? Event { get; set; }
}
