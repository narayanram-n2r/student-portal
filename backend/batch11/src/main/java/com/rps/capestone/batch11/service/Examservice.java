package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Dto.Examregistration;
import com.example.repo.IExamrepo;

@Service
public class Examservice {

	@Autowired
	private IExamrepo iExamrepo;

	public boolean saveStudent(Examregistration student) {
		boolean status=false;
		try {
			iExamrepo.save(student);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	public List<Examregistration> getStudents() {
	
		List<Examregistration> list=iExamrepo.findAll();
		return list;
	}

	public boolean deleteStudent(Examregistration student) {
		boolean status=false;
		try {
			iExamrepo.delete(student);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	public List<Examregistration> getStudentByID(Examregistration student) {
		
		List<Examregistration> list=iExamrepo.findAll();
		return list;
	}

	public boolean updateStudent(Examregistration student) {
		boolean status=false;
		try {
			iExamrepo.save(student);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public int logincheck(Examregistration student) {
		
		int c=0;
		try {
			System.out.println(student.getStudent_email());
			System.out.println(student.getStudent_password());
			c=iExamrepo.query(student.getStudent_email(),student.getStudent_password());
			if(c>0) {
				System.out.println(student.getStudent_email());
				System.out.println("**************"+c);
			
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return c;
	}

	public boolean resultadd(String score,String test,String id) {
		boolean flag=false;
		int c=0;
		int sid=Integer.parseInt(id);
		int sc=Integer.parseInt(score)*25;
		try {
			iExamrepo.query1(test,sc,sid);
			flag=true;
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return flag;
	}
	
	public List<Examregistration> getalldata() {
		return iExamrepo.findAll();
	}
	
}

