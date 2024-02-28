package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Attendee;
import com.example.demo.entities.Login;
@Repository
public interface Attendee_Repo extends JpaRepository<Attendee, Integer> {
	@Query("select a from Attendee a where a.login = :x")
	public Attendee findByLogin(Login x);
}
