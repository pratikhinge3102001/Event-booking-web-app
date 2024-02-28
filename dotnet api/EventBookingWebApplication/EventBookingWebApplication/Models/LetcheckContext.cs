using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace EventBookingWebApplication.Models;

public partial class LetcheckContext : DbContext
{
    public LetcheckContext()
    {
    }

    public LetcheckContext(DbContextOptions<LetcheckContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Attendee> Attendees { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Organiser> Organisers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=letcheck", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Attendee>(entity =>
        {
            entity.HasKey(e => e.AttendeeId).HasName("PRIMARY");

            entity.ToTable("attendee");

            entity.HasIndex(e => e.LoginId, "FK4xppspv2wppilkl1y49vb2pdp");

            entity.Property(e => e.AttendeeId).HasColumnName("attendee_id");
            entity.Property(e => e.Contact).HasColumnName("contact");
            entity.Property(e => e.Dob).HasColumnName("dob");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname");
            entity.Property(e => e.Gender)
                .HasMaxLength(255)
                .HasColumnName("gender");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");

            entity.HasOne(d => d.Login).WithMany(p => p.Attendees)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("FK4xppspv2wppilkl1y49vb2pdp");
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PRIMARY");

            entity.ToTable("booking");

            entity.HasIndex(e => e.Attendeeid, "FKfh387nlshpo1nia4gpimulvfs");

            entity.HasIndex(e => e.EventId, "FKiy2tdi4vrw2mljj6rqwmd698q");

            entity.Property(e => e.BookingId)
                .ValueGeneratedNever()
                .HasColumnName("booking_id");
            entity.Property(e => e.Attendeeid).HasColumnName("attendeeid");
            entity.Property(e => e.BookingDate).HasColumnName("booking_date");
            entity.Property(e => e.ByCash)
                .HasColumnType("bit(1)")
                .HasColumnName("by_cash");
            entity.Property(e => e.ByUpi)
                .HasColumnType("bit(1)")
                .HasColumnName("by_upi");
            entity.Property(e => e.EventId).HasColumnName("event_id");
            entity.Property(e => e.Status)
                .HasColumnType("bit(1)")
                .HasColumnName("status");
            entity.Property(e => e.TicketQuantity)
                .HasMaxLength(255)
                .HasColumnName("ticket_quantity");
            entity.Property(e => e.TotalCost).HasColumnName("total_cost");

            entity.HasOne(d => d.Attendee).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.Attendeeid)
                .HasConstraintName("FKfh387nlshpo1nia4gpimulvfs");

            entity.HasOne(d => d.Event).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.EventId)
                .HasConstraintName("FKiy2tdi4vrw2mljj6rqwmd698q");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CatId).HasName("PRIMARY");

            entity.ToTable("category");

            entity.Property(e => e.CatId)
                .ValueGeneratedNever()
                .HasColumnName("cat_id");
            entity.Property(e => e.CatName)
                .HasMaxLength(255)
                .HasColumnName("cat_name");
        });

        modelBuilder.Entity<Event>(entity =>
        {
            entity.HasKey(e => e.EventId).HasName("PRIMARY");

            entity.ToTable("event");

            entity.HasIndex(e => e.CatId, "FKh4y7jns0j96al63gmj003n8d");

            entity.HasIndex(e => e.OrganiserId, "organiser_id");

            entity.Property(e => e.EventId).HasColumnName("event_id");
            entity.Property(e => e.AvailableTickets).HasColumnName("available_tickets");
            entity.Property(e => e.CatId).HasColumnName("cat_id");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.Eventname)
                .HasMaxLength(255)
                .HasColumnName("eventname");
            entity.Property(e => e.Location)
                .HasMaxLength(255)
                .HasColumnName("location");
            entity.Property(e => e.OrganiserId).HasColumnName("organiser_id");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
            entity.Property(e => e.TicketPrice)
                .HasPrecision(10, 2)
                .HasColumnName("ticket_price");
            entity.Property(e => e.Venue)
                .HasMaxLength(255)
                .HasColumnName("venue");

            entity.HasOne(d => d.Cat).WithMany(p => p.Events)
                .HasForeignKey(d => d.CatId)
                .HasConstraintName("FKh4y7jns0j96al63gmj003n8d");

            entity.HasOne(d => d.Organiser).WithMany(p => p.Events)
                .HasForeignKey(d => d.OrganiserId)
                .HasConstraintName("FKprr6vq7bmi47404tr3w7t46s2");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.LoginId).HasName("PRIMARY");

            entity.ToTable("login");

            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Flag)
                .HasColumnType("bit(1)")
                .HasColumnName("flag");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");
        });

        modelBuilder.Entity<Organiser>(entity =>
        {
            entity.HasKey(e => e.OrganiserId).HasName("PRIMARY");

            entity.ToTable("organiser");

            entity.HasIndex(e => e.LoginId, "FKq7hryfmca5xyflyy4ya8sa9jh");

            entity.Property(e => e.OrganiserId).HasColumnName("organiser_id");
            entity.Property(e => e.Aadharno).HasColumnName("aadharno");
            entity.Property(e => e.Contact).HasColumnName("contact");
            entity.Property(e => e.Dob).HasColumnName("dob");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .HasColumnName("first_name");
            entity.Property(e => e.Gender)
                .HasMaxLength(255)
                .HasColumnName("gender");
            entity.Property(e => e.LastName)
                .HasMaxLength(255)
                .HasColumnName("last_name");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");

            entity.HasOne(d => d.Login).WithMany(p => p.Organisers)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("FKq7hryfmca5xyflyy4ya8sa9jh");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
