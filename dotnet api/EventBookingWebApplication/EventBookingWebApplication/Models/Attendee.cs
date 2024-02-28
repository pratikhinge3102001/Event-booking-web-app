using System;
using System.Collections.Generic;

namespace EventBookingWebApplication.Models;

public partial class Attendee
{
    public int AttendeeId { get; set; }

    public long? Contact { get; set; }

    public DateOnly? Dob { get; set; }

    public string? Email { get; set; }

    public string? Fname { get; set; }

    public string? Gender { get; set; }

    public string? Lname { get; set; }

    public string? Password { get; set; }

    public string? Username { get; set; }

    public int? LoginId { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual Login? Login { get; set; }
}
