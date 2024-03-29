package com.example.demo.services;


import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Attendee;
import com.example.demo.entities.Login;
import com.example.demo.repositories.Attendee_Repo;
import com.example.demo.repositories.Login_Repo;
@Service
public class Attendee_Service {
	@Autowired
	Login_Repo repo;
	@Autowired
	Attendee_Repo repo2;
	public void saveLogin(Login login,Attendee atn)
	{
		repo.save(login);
	   atn.setLogin(login);
		repo2.save(atn);
	}
	
	public Attendee findById(int loginId) {
    	Login x = repo.findById(loginId).get();
        return repo2.findByLogin(x);
    }
	
	  public void delete(int  attendee_id) {
	    	repo2.deleteById(attendee_id);
	  }
	  
	  public void updateAttendee(int userId, Attendee updatedAttendee) {
		    Optional<Attendee> optionalAttendee = attendeeRepository.findById(userId);

		    if (optionalAttendee.isPresent()) {
		        Attendee existingAttendee = optionalAttendee.get();

		        // Update only non-null fields
		        if (updatedAttendee.getFname() != null) {
		            existingAttendee.setFname(updatedAttendee.getFname());
		        }

		        if (updatedAttendee.getLname() != null) {
		            existingAttendee.setLname(updatedAttendee.getLname());
		        }

		        if (updatedAttendee.getEmail() != null) {
		            existingAttendee.setEmail(updatedAttendee.getEmail());
		        }

		        if (updatedAttendee.getDob() != null) {
		            existingAttendee.setDob(updatedAttendee.getDob());
		        }

		        if (updatedAttendee.getPassword() != null) {
		            existingAttendee.setPassword(updatedAttendee.getPassword());
		        }

		        repo2.save(existingAttendee);
		    } else {
		        throw new NoSuchElementException("Attendee with userId " + userId + " not found");
		    }
		}
	  
	  public List<Attendee> getAllAttendees() {
		    return repo2.findAll();
		}
	  private final Attendee_Repo attendeeRepository;
		
		public Attendee_Service(Attendee_Repo attendeeRepository) {
			this.attendeeRepository = attendeeRepository;
			
		}

}
