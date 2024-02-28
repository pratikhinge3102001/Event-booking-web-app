package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import java.sql.Date;

import javax.persistence.CascadeType;

@Entity
public class Attendee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int attendee_id;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "login_id")
    Login login;

    @Column
    String fname;

    @Column
    String lname;

    @Column
    long contact;

    @Column
    String gender;

    @Column
    String email;

    @Column
    Date dob;

    @Column
    String username;

    @Column
    String password;

	public Attendee(int attendee_id, Login login, String fname, String lname, long contact, String gender, String email,
			Date dob, String username, String password) {
		super();
		this.attendee_id = attendee_id;
		this.login = login;
		this.fname = fname;
		this.lname = lname;
		this.contact = contact;
		this.gender = gender;
		this.email = email;
		this.dob = dob;
		this.username = username;
		this.password = password;
	}

	public Attendee() {
		super();
	}

	public int getAttendee_id() {
		return attendee_id;
	}

	public void setAttendee_id(int organiser_id) {
		this.attendee_id = organiser_id;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Customer [organiser_id=" + attendee_id + ", login=" + login + ", fname=" + fname + ", lname=" + lname
				+ ", contact=" + contact + ", gender=" + gender + ", email=" + email + ", dob=" + dob + ", username="
				+ username + ", password=" + password + "]";
	}
    
    

}
