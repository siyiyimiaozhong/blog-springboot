package com.siyi.dao;

import com.siyi.domain.Info;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface InfoDao {

	@Select("SELECT sum(confirmCount) FROM `info` where code < 35")
	public int selectConfirmAllCount();

	@Select("SELECT sum(curedCount) FROM `info` where code < 35")
	public int selectCuredAllCount();

	@Select("SELECT sum(deadCount) FROM `info` where code < 35")
	public int selectDeadAllCount();

	@Select("select * from info where provinceName=#{name} and areaName is null;")
	public Info selectAllCountByPName(String name);

	@Select("select * from info where code < 35;")
	public List<Info> selectChinaInfo();

	@Select("select * from info where provinceName=#{name} and areaName is not null;")
	public List<Info> selectInfoByName(String name);

	@Select("SELECT * FROM `info` where provinceName=#{name} and areaName is not null order by confirmCount desc limit 0,5 ;")
	public List<Info> selectTop5Confirm(String name);

    @Select("SELECT * FROM `info` where provinceName=#{name} and areaName is not null order by curedCount desc limit 0,5 ;")
	public List<Info> selectTop5Cured(String name);

    @Select("SELECT * FROM `info` where provinceName=#{name} and areaName is not null order by deadCount desc limit 0,5 ;")
	public List<Info> selectTop5Dead(String name);
}
