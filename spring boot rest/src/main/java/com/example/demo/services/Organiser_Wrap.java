package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.entities.Login;
import com.example.demo.entities.Organiser;

public class Organiser_Wrap {
	@Autowired
	Organiser organiser;
	@Autowired
	Login login;
	public Organiser_Wrap() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Organiser_Wrap(Organiser organiser, Login login) {
		super();
		this.organiser = organiser;
		this.login = login;
	}
	@Override
	public String toString() {
		return "Ograniser_Wrap [organiser=" + organiser + ", login=" + login + "]";
	}
	public Organiser getOrganiser() {
		return organiser;
	}
	public void setOrganiser(Organiser organiser) {
		this.organiser = organiser;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
		
	}
	
}
