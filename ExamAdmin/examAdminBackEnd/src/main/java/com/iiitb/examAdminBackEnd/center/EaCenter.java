package com.iiitb.examAdminBackEnd.center;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class EaCenter {
	
	@Id
	private int center_id;
	private String center_code,center_name;
	
	public EaCenter() {
	}
	public EaCenter(int center_id, String center_code, String center_name) {
		super();
		this.center_id = center_id;
		this.center_code = center_code;
		this.center_name = center_name;
	}
	
	public int getCenter_id() {
		return center_id;
	}
	public void setCenter_id(int center_id) {
		this.center_id = center_id;
	}
	public String getCenter_code() {
		return center_code;
	}
	public void setCenter_code(String center_code) {
		this.center_code = center_code;
	}
	public String getCenter_name() {
		return center_name;
	}
	public void setCenter_name(String center_name) {
		this.center_name = center_name;
	}
}
