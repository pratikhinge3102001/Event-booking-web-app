package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Event;


import com.example.demo.services.EventService;

@CrossOrigin(origins ="http://localhost:3000")

@RestController
public class EventController {
	
	
	@Autowired
	EventService eservice;
	

	
	@GetMapping("/getallevent")
	public List<Event> getEvents()
	{
		return eservice.getEvents();
	}
	
	
	@PostMapping("/saveevent")
	public Event saveEvent(@RequestBody Event e)
	{
		System.out.println(e.toString());
		return eservice.saveEvent(e);		
	}
	
//	@GetMapping("/events/{eid}")
//	public Event findEventById(@PathVariable int eid) {
//	    return eservice.getEventById(eid);
//	}
	
	@DeleteMapping("/{eventId}")
    public ResponseEntity<Void> deleteEvent(@PathVariable int eventId) {
        eservice.deleteEventById(eventId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
	
	@GetMapping("/eventsbyid")
	 Event findEventById(@Param("eid")int eid) {
	 return eservice.getEventById(eid);
	}
	
	private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/eventsbyorganiser/{organiser_id}")
    public List<Event> findEventsByOrganiserId(@PathVariable int organiser_id) {
        return eventService.getEventsByOrganiserId(organiser_id);
    }
	


}
