package com.example.demo.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Login;
import com.example.demo.entities.Organiser;
import com.example.demo.repositories.Login_Repo;
import com.example.demo.repositories.Organiser_Repo;
@Service
public class Organiser_Service {
	@Autowired
	Login_Repo repo;
	@Autowired
	Organiser_Repo repo2;
	
//	public void updateOrganiser(int userId, Organiser updatedOrganiser) {
//        Optional<Organiser> optionalOrganiser = organiserRepository.findById(userId);
//
//        if (optionalOrganiser.isPresent()) {
//            Organiser existingOrganiser = optionalOrganiser.get();
//            existingOrganiser.setFirst_name(updatedOrganiser.getFirst_name());
//            existingOrganiser.setLast_name(updatedOrganiser.getLast_name());
//            existingOrganiser.setEmail(updatedOrganiser.getEmail());
//            existingOrganiser.setContact(updatedOrganiser.getContact());
//            existingOrganiser.setDob(updatedOrganiser.getDob());
//            existingOrganiser.setPassword(updatedOrganiser.getPassword());
//            repo2.save(existingOrganiser);
//        } else {
//            throw new NoSuchElementException("Organiser with userId " + userId + " not found");
//        }
//    }
	public void updateOrganiser(int userId, Organiser updatedOrganiser) {
	    Optional<Organiser> optionalOrganiser = organiserRepository.findById(userId);

	    if (optionalOrganiser.isPresent()) {
	        Organiser existingOrganiser = optionalOrganiser.get();

	        // Update only non-null fields
	        if (updatedOrganiser.getFirst_name() != null) {
	            existingOrganiser.setFirst_name(updatedOrganiser.getFirst_name());
	        }

	        if (updatedOrganiser.getLast_name() != null) {
	            existingOrganiser.setLast_name(updatedOrganiser.getLast_name());
	        }

	        if (updatedOrganiser.getEmail() != null) {
	            existingOrganiser.setEmail(updatedOrganiser.getEmail());
	        }

	        if (updatedOrganiser.getDob() != null) {
	            existingOrganiser.setDob(updatedOrganiser.getDob());
	        }

	        if (updatedOrganiser.getPassword() != null) {
	            existingOrganiser.setPassword(updatedOrganiser.getPassword());
	        }

	        repo2.save(existingOrganiser);
	    } else {
	        throw new NoSuchElementException("Organiser with userId " + userId + " not found");
	    }
	}

	public void saveLogin(Login login,Organiser org)
	{
		repo.save(login);
	   org.setLogin(login);
		repo2.save(org);
	}
	public Login getOne(String username,String password)
	{
		
		Login login= repo.findById(username,password);
		return login;
	}
    private final Organiser_Repo organiserRepository;

	public Organiser_Service(Organiser_Repo organiserRepository) {
        this.organiserRepository = organiserRepository;
    }


    public Organiser findById(int loginId) {
    	Login l = repo.findById(loginId).get();
        return organiserRepository.findByLogin(l);
    }
    public void deleteOrganiser(int  organiser_id) {
    	repo2.deleteById(organiser_id);
    }
    
    public List<Organiser> getAllOrganisers() {
        return organiserRepository.findAll();
    }
    
  
	
}
