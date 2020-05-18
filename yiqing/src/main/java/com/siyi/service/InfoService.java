package com.siyi.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.siyi.dao.InfoDao;
import com.siyi.domain.Info;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InfoService {
	
	@Autowired
	private InfoDao dao;
	
	public int selectCuredAllCount() {
		return dao.selectConfirmAllCount();
	}
	
	public List<HashMap<String,String>> yiqingfenxi(){
		int confirmCount = dao.selectConfirmAllCount();
		int curedCount = dao.selectCuredAllCount();
		int deadCount = dao.selectDeadAllCount();
		List<HashMap<String,String>> list = new ArrayList<HashMap<String,String>>();

		HashMap<String,String> confirmmap = new HashMap<String,String>();
		confirmmap.put("name","现有确诊");
		confirmmap.put("value",confirmCount+"");
		list.add(confirmmap);
		
		HashMap<String,String> curedmap = new HashMap<String,String>();
		curedmap.put("name","现有治愈");
		curedmap.put("value",curedCount+"");
		list.add(curedmap);
		
		HashMap<String,String> deadmap = new HashMap<String,String>();
		deadmap.put("name","现有死亡");
		deadmap.put("value",deadCount+"");
		list.add(deadmap);
		
		return list;
	}
	
	public List<HashMap<String,String>> selectAllCountByName(String name){
		Info info = dao.selectAllCountByPName(name);
		List<HashMap<String,String>> list = new ArrayList<HashMap<String,String>>();

		HashMap<String,String> confirmmap = new HashMap<String,String>();
		confirmmap.put("name","现有确诊");
		confirmmap.put("value",info.getConfirmCount()+"");
		list.add(confirmmap);
		
		HashMap<String,String> curedmap = new HashMap<String,String>();
		curedmap.put("name","现有治愈");
		curedmap.put("value",info.getCuredCount()+"");
		list.add(curedmap);
		
		HashMap<String,String> deadmap = new HashMap<String,String>();
		deadmap.put("name","现有死亡");
		deadmap.put("value",info.getDeadCount()+"");
		list.add(deadmap);
		return list;
	}
	
	public List<HashMap<String,String>> selectChinaInfo(){
		List<HashMap<String,String>> listMap = new ArrayList<HashMap<String,String>>();
		List<Info> list = dao.selectChinaInfo();
		for(Info info : list) {
			HashMap<String,String> map = new HashMap<String,String>();
			map.put("name",info.getProvinceName());
			map.put("value",info.getConfirmCount()+"");
			listMap.add(map);
		}
		return listMap;
	}

	public List<HashMap<String,String>> selectInfoByName(String name){
		List<HashMap<String,String>> listMap = new ArrayList<HashMap<String,String>>();
		List<Info> list = dao.selectInfoByName(name);
		for(Info info : list) {
			HashMap<String,String> map = new HashMap<String,String>();
			map.put("name",info.getAreaName());
			map.put("value",info.getConfirmCount()+"");
			listMap.add(map);
		}
		return listMap;
	}

	public List<String> loadCity(){
		List<String> list = new ArrayList<String>();
		List<Info> listOne = dao.selectChinaInfo();
		for(Info info : listOne) {
			list.add(info.getProvinceName());
		}
		return list;
	}

    public Map<String,List> selectTop5Confirm(String name){
        List<Info> infos = dao.selectTop5Confirm(name);
        List listAddress = new ArrayList();
        List listNumber = new ArrayList();
        for(Info info:infos){
            listAddress.add(info.getAreaName());
            listNumber.add(info.getConfirmCount());
        }
        Map<String,List> map = new HashMap<>();
        map.put("address",listAddress);
        map.put("number",listNumber);
        return map;
    }

    public Map<String,List> selectTop5Cured(String name){
        List<Info> infos = dao.selectTop5Cured(name);
        List listAddress = new ArrayList();
        List listNumber = new ArrayList();
        for(Info info:infos){
            listAddress.add(info.getAreaName());
            listNumber.add(info.getCuredCount());
        }
        Map<String,List> map = new HashMap<>();
        map.put("address",listAddress);
        map.put("number",listNumber);
        return map;
    }

    public Map<String,List> selectTop5Dead(String name){
        List<Info> infos = dao.selectTop5Dead(name);
        List listAddress = new ArrayList();
        List listNumber = new ArrayList();
        for(Info info:infos){
            listAddress.add(info.getAreaName());
            listNumber.add(info.getDeadCount());
        }
        Map<String,List> map = new HashMap<>();
        map.put("address",listAddress);
        map.put("number",listNumber);
        return map;
    }
}
