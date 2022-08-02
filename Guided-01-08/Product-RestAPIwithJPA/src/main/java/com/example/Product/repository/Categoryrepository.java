package com.example.Product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.Product.entity.Productcategory;

@RepositoryRestResource(path="cat")
@CrossOrigin("http://localHost:4200/")
public interface Categoryrepository extends JpaRepository <Productcategory, Integer>{

}
