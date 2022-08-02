package com.example.Product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.Product.entity.Product;



@RepositoryRestResource(path="pro")
@CrossOrigin("http://localHost:4200/")
public interface Productrepository extends JpaRepository <Product, Integer>{
	

}
