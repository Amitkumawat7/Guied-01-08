package com.example.Product.entity;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="productcategory")
public class Productcategory {
	
	@Id			// primary key
	@Column(name="CATEGORYID")
	private int categoryId;
	
	@Column(name="CATEGORYNAME")
	private String categoryname;
	
	public Productcategory() {
		// TODO Auto-generated constructor stub
	}
	
	public Productcategory(Integer categoryId, String categoryname) {
		super();
		this.categoryId = categoryId;
		this.categoryname = categoryname;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}

	@Override
	public String toString() {
		return "Productcategory [categoryId=" + categoryId + ", categoryname=" + categoryname + "]";
	}
	

}
