using System;
using System.Collections.Generic;

namespace EventBookingWebApplication.Models;

public partial class Category
{
    public int CatId { get; set; }

    public string? CatName { get; set; }

    public virtual ICollection<Event> Events { get; set; } = new List<Event>();
}
