package com.example.demo.entities;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "organiser")
public class Organiser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int organiser_id;
    
    @Column
    private Date dob;
    
    @Column
    private long aadharno;
    
    @Column
    private long contact;
    
    @Column
    private String email;
    
    @Column
    private String first_name;
    
    @Column
    private String last_name;
    
    @Column
    private String username;
    
    @Column
    private String gender;
    
    @Column
    private String password;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "login_id")
    Login login;
	public Organiser(int organiser_id, Date dob, long aadharno, long contact, String email, String first_name,
			String last_name, String username, String gender, String password, Login login) {
		super();
		this.organiser_id = organiser_id;
		this.dob = dob;
		this.aadharno = aadharno;
		this.contact = contact;
		this.email = email;
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.gender = gender;
		this.password = password;
		this.login = login;
	}

	public Organiser() {
		super();
	}

	public int getOrganiser_id() {
		return organiser_id;
	}

	public void setOrganiser_id(int organiser_id) {
		this.organiser_id = organiser_id;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public long getAadharno() {
		return aadharno;
	}

	public void setAadharno(long aadharno) {
		this.aadharno = aadharno;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}

    
}
