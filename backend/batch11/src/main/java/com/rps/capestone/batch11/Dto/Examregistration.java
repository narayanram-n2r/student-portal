package com.example.Dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;




@Entity
@Table(name="student")
@Data
public class Examregistration {

	@Id
	@GeneratedValue
	private Integer Sid;
	private String student_name;
	private String student_email;
	private Long student_mobno;
	private String student_city;
	private String student_dob;
	private String student_branch;
	private String student_state;
	private Integer student_yoc;
	private String student_password;
	private String student_test;
	private Integer student_result;
}



