package com.example.Product.entity;

import static javax.persistence.GenerationType.IDENTITY;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	
	@Id			// primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // autoIncrement
	@Column(name="PRODUCTID")
	private int productid;
	
	@Column(name="PRODUCTNAME")
	private String productname;
	
	@Column(name="DESCRIPTION")
	private String desciption;
	
	@Column(name="IMAGEURL")
	private String imageurl;
	
	@Column(name="UNITPRICE")
	private int unitprice;
	
	@Column(name="UNITSINSTOCK")
	private int unitsinstock;
	
	@Column(name="PRICE")
	private int price;
	
	@Column(name="DATECREATED")
	private Date datecreated;
	
	@Column(name="LASTUPDATED")
	private Date lastUpdated;
	
	@Column(name="CATEGORYID")
	private int categoryId;
	
	public Product() {
		
	}
	
	public Product(String productname, String desciption, String imageurl, int unitprice, int unitsinstock, int price, Date datecreated, Date lastUpdated, int categoryId) {
		
		this.productname = productname;
		this.desciption = desciption;
		this.imageurl = imageurl;
		this.unitsinstock = unitsinstock;
		this.price = price;
		this.datecreated = datecreated;
		this.lastUpdated = lastUpdated;
		this.categoryId = categoryId;
	}

	public int getProductid() {
		return productid;
	}

	public void setProductid(int productid) {
		this.productid = productid;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getDesciption() {
		return desciption;
	}

	public void setDesciption(String desciption) {
		this.desciption = desciption;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public int getUnitprice() {
		return unitprice;
	}

	public void setUnitprice(int unitprice) {
		this.unitprice = unitprice;
	}

	public int getUnitsinstock() {
		return unitsinstock;
	}

	public void setUnitsinstock(int unitsinstock) {
		this.unitsinstock = unitsinstock;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public Date getDatecreated() {
		return datecreated;
	}

	public void setDatecreated(Date datecreated) {
		this.datecreated = datecreated;
	}

	public Date getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	

}
