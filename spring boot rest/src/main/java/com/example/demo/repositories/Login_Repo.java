package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
@Repository
@Transactional
public interface Login_Repo extends JpaRepository<Login, Integer> {
	
	@Query("select l from Login l where username = :username and password = :password")
	Login findById(String username, String password);
	
	@Modifying
	@Query(value= "update login set flag = 1 where login_id=:lid",nativeQuery = true)
	public int updateOrganiser(int lid);
	
	@Modifying
	@Query(value= "update login set flag = 0 where login_id=:lid",nativeQuery = true)
	public int revokeOrganiser(int lid);
	
	

}
