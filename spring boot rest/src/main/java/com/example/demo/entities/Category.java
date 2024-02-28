package com.example.demo.entities;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="category")
public class Category {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "catId")
    private int catId;

    @Column(name = "catName", length = 255)
    private String catName;
    
    @OneToMany(mappedBy="category" , cascade = CascadeType.ALL)
	Set<Event> event;

	public int getCatId() {
		return catId;
	}

	public void setCatId(int catId) {
		this.catId = catId;
	}

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}

	public Set<Event> getEvent() {
		return event;
	}

	public void setEvent(Set<Event> event) {
		this.event = event;
	}

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(int catId, String catName, Set<Event> event) {
		super();
		this.catId = catId;
		this.catName = catName;
		this.event = event;
	}

	public Category(int catId, String catName) {
		super();
		this.catId = catId;
		this.catName = catName;
	}

	@Override
	public String toString() {
		return "Category [catId=" + catId + ", catName=" + catName + "]";
	}

    
    
}
