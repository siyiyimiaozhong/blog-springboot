package com.siyi.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.siyi.domain.Info;
import com.siyi.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("yiqingfenxi")
public class InfoController {
	
	@Autowired
	private InfoService service;

	@RequestMapping("selectCuredAllCount.do")
	@ResponseBody
	public int selectCuredAllCount() {
		return service.selectCuredAllCount();
	}
	
	@RequestMapping("yiqingfenxi.do")
	@ResponseBody
	public List<HashMap<String,String>> yiqingfenxi(){
		return service.yiqingfenxi();
	}
	
	@RequestMapping("selectAllCountByName.do")
	@ResponseBody
	public List<HashMap<String,String>> selectAllCountByName(String name){
		return service.selectAllCountByName(name);
	}
	
	@RequestMapping("selectChinaInfo.do")
	@ResponseBody
	public List<HashMap<String,String>> selectChinaInfo(){
		return service.selectChinaInfo();
	}

	@RequestMapping("selectInfoByName.do")
	@ResponseBody
	public List<HashMap<String,String>> selectInfoByName(String name){
		return service.selectInfoByName(name);
	}

	@RequestMapping("loadCity.do")
	@ResponseBody
	public List<String> loadCity(){
		return service.loadCity();
	}

	@RequestMapping("selectTop5Confirm.do")
	@ResponseBody
	public Map<String,List> selectTop5Confirm(String name){
		return service.selectTop5Confirm(name);
	}

	@RequestMapping("selectTop5Cured.do")
	@ResponseBody
	public Map<String,List> selectTop5Cured(String name){
		return service.selectTop5Cured(name);
	}

	@RequestMapping("selectTop5Dead.do")
	@ResponseBody
	public Map<String,List> selectTop5Dead(String name){
		return service.selectTop5Dead(name);
	}
}
