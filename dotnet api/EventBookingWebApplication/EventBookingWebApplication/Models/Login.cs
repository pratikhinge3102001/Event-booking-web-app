using System;
using System.Collections.Generic;

namespace EventBookingWebApplication.Models;

public partial class Login
{
    public int LoginId { get; set; }

    public ulong? Flag { get; set; }

    public string? Password { get; set; }

    public int? RoleId { get; set; }

    public string? Username { get; set; }

    public virtual ICollection<Attendee> Attendees { get; set; } = new List<Attendee>();

    public virtual ICollection<Organiser> Organisers { get; set; } = new List<Organiser>();
}
