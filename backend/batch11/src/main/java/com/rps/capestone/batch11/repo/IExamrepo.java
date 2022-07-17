package com.example.repo;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.Dto.Examregistration;


public interface IExamrepo extends JpaRepository<Examregistration, Integer> {
	@Query("select Sid from Examregistration where student_email=?1 and student_password=?2")
	public int query(String user,String pass);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("update Examregistration set student_test=?1, student_result=?2 where Sid=?3")
	public void query1(String test,Integer result,Integer id);
}
