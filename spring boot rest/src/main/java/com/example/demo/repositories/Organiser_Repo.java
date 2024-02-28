package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Organiser;
@Repository
@Transactional
public interface Organiser_Repo extends JpaRepository<Organiser, Integer> {
	
	@Query("select o from Organiser o where o.login = :l")
	public Organiser findByLogin(Login l);

}

