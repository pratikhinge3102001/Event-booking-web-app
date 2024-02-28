package com.example.demo.services;


import java.util.List;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Event;
import com.example.demo.repositories.EventRepository;



@Service
public class EventService {
	
	@Autowired
	EventRepository erepo;
	
	private final EventRepository eventRepository;

	 
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getEventsByOrganiserId(int organiser_id) {
        return eventRepository.findByOrganiserId(organiser_id);
    }
	

	
	public List<Event> getEvents() {
        return erepo.findAll();
    }

	
	public Event getOne(int eid)
	{
		Event e = null;
		Optional<Event> op =  erepo.findById(eid);
		try
		{
			e = op.get();
		}
		catch(Exception err)
		{
			err.printStackTrace();
		}
		return e;
	}
	

    public void deleteEventById(int eventId) {
        erepo.deleteById(eventId);
    }

	public Event saveEvent(Event e) {
        return erepo.save(e);
    }
	

	
	public Event getEventById(int eid) {
        return erepo.findById(eid).orElseThrow(EntityNotFoundException::new);
    }



	
	
	
	
	
	
}

