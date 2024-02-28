package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.entities.Attendee;
import com.example.demo.entities.Login;

public class Attendee_Wrap {
	@Autowired
	Attendee attendee;
	@Autowired
	Login login;
	public Attendee_Wrap() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Attendee_Wrap(Attendee attendee, Login login) {
		super();
		this.attendee = attendee;
		this.login = login;
	}
	public Attendee getAttendee() {
		return attendee;
	}
	public void setAttendee(Attendee attendee) {
		this.attendee = attendee;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	

}
