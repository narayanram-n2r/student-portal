package com.example.controller;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Dto.Examregistration;
import com.example.service.Examservice;



@RestController
@CrossOrigin(origins="http://localhost:4200")
//@RequestMapping(value="/api")
public class examcontroller {
	
	@Autowired
	private Examservice studentservice;
	
	@PostMapping("save-student")
	public boolean saveStudent(@RequestBody Examregistration student) {
		System.out.println(student);
		 return studentservice.saveStudent(student);	
	}
	
	@PostMapping("login")
	public int loginStudent(@RequestBody Examregistration student) {
		System.out.println(student);
		return studentservice.logincheck(student);
	}
	
	@PostMapping("result")
	public boolean Result(@RequestBody String[] student) {
		System.out.println(student[0]);
		System.out.println(student[1]);
		return studentservice.resultadd(student[0],student[1],student[2]);
		
	}
	
	@GetMapping("getall")
	public List<Examregistration> getAll() {
		return studentservice.getalldata();
	}

}
