package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.Login_Repo;

@Service
public class AdminService {

	@Autowired
	Login_Repo lr;
	
	public int updateApproval(int login_id) {
		return lr.updateOrganiser(login_id);
	}
	
	public int revokeApproval(int login_id) {
		return lr.revokeOrganiser(login_id);
	}
	
}
