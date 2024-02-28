package com.example.demo.controllers;


import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Attendee;
import com.example.demo.entities.Login;
import com.example.demo.entities.Organiser;
import com.example.demo.services.Attendee_Wrap;
import com.example.demo.services.Organiser_Service;
import com.example.demo.services.Organiser_Wrap;
import com.example.demo.services.AdminService;
import com.example.demo.services.Attendee_Service;


@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class Registration_Controller {
	@Autowired
	Attendee_Service login;
	@Autowired
	Organiser_Service organiser;
	
	@Autowired
	AdminService as ;
	
	
	@Autowired
    private Organiser_Service organiserService;

    @PutMapping("/{loginId}")
    public ResponseEntity<String> updateOrganiser(@PathVariable int loginId, @RequestBody Organiser updatedOrganiser) {
        try {
            organiserService.updateOrganiser(loginId, updatedOrganiser);
            return new ResponseEntity<>("Organiser updated successfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>("Organiser with userId " + loginId + " not found", HttpStatus.NOT_FOUND);
        }
    }
	
	@PostMapping("/attendee")
	public ResponseEntity<Object> registerAttedee(@RequestBody Attendee_Wrap wrap)
	{
		try
		{
			Login log= wrap.getLogin();
			Attendee atd= wrap.getAttendee();
			login.saveLogin(log, atd);
			return ResponseEntity.status(HttpStatus.CREATED).body(wrap);
		}
		catch(Exception e)
		{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error saving data: "+e.getMessage());
		}
		
	}
	
	
	
	@PostMapping("/organiser")
	public ResponseEntity<Object> registerOrganiser(@RequestBody Organiser_Wrap wrap)
	{
		try
		{
			Login log= wrap.getLogin();
			Organiser org= wrap.getOrganiser();
			organiser.saveLogin(log, org);
			return ResponseEntity.status(HttpStatus.OK).body(wrap);
		}
		catch(Exception e)
		{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error saving data: "+e.getMessage());
		}
		
	}
	 
	

	    @GetMapping("/organiser/{loginId}")
	    public Organiser getOrganiserById(@PathVariable("loginId") Integer loginId) {
	        return organiser.findById(loginId);
	    }
	    
	    @GetMapping("/attendee/{loginId}")
	    public Attendee getAttendee(@PathVariable("loginId") Integer loginId) {
	        return login.findById(loginId);
	    }
	    
	    
	
	
	@GetMapping("/login")
	public ResponseEntity<Login> login(@RequestParam String username,@RequestParam String password)
	{
		 System.out.println(username+" "+password);
		Login res= organiser.getOne(username, password);
		if(res==null)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		else
			return ResponseEntity.status(HttpStatus.OK).body(res);
	}
	
	@PutMapping("/approve/{lid}")
	public boolean updateApprove(@PathVariable("lid") int lid) {
		boolean flag = false;
		if(as.updateApproval(lid)==1) {
			flag = true;
		}
		return flag;
	}
	
	@PutMapping("/revoke/{lid}")
	public boolean revokeApproval(@PathVariable("lid") int lid) {
		boolean flag = false;
		if(as.revokeApproval(lid)==1) {
			flag = true;
		}
		return flag;
	}
	@DeleteMapping("/deleteAttendee/{attendee_id}")
	public void deleteAttendee(@PathVariable("attendee_id") int  attendee_id) {
    	login.delete(attendee_id);
    }
	
	@DeleteMapping("/deleteOrganiser/{organiser_id}")
	public void deleteOrganiser(@PathVariable("organiser_id") int  organiser_id) {
    	organiser.deleteOrganiser(organiser_id);
    }
	
	 @GetMapping("/getallorganiser")
	    public List<Organiser> getAllOrganisers() {
	        return organiser.getAllOrganisers();
	    }
	
	 @GetMapping("/getallattendee")
	    public List<Attendee> getAllAttendees() {
	        return login.getAllAttendees();
	    }
	 
	 
	
	
}
