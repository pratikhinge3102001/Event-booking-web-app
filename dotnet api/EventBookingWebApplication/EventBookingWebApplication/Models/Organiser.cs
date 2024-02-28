using System;
using System.Collections.Generic;

namespace EventBookingWebApplication.Models;

public partial class Organiser
{
    public int OrganiserId { get; set; }

    public long? Aadharno { get; set; }

    public long? Contact { get; set; }

    public DateOnly? Dob { get; set; }

    public string? Email { get; set; }

    public string? FirstName { get; set; }

    public string? Gender { get; set; }

    public string? LastName { get; set; }

    public string? Password { get; set; }

    public string? Username { get; set; }

    public int? LoginId { get; set; }

    public virtual ICollection<Event> Events { get; set; } = new List<Event>();

    public virtual Login? Login { get; set; }
}
