package com.siyi.domain;

public class Info {

	private Integer code;
	private String time;
	private String provinceName;
	private String areaName;
	private Integer confirmCount;
	private Integer curedCount;
	private Integer deadCount;
	private String locationId;

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getProvinceName() {
		return provinceName;
	}

	public void setProvinceName(String provinceName) {
		this.provinceName = provinceName;
	}

	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	public Integer getConfirmCount() {
		return confirmCount;
	}

	public void setConfirmCount(Integer confirmCount) {
		this.confirmCount = confirmCount;
	}

	public Integer getCuredCount() {
		return curedCount;
	}

	public void setCuredCount(Integer curedCount) {
		this.curedCount = curedCount;
	}

	public Integer getDeadCount() {
		return deadCount;
	}

	public void setDeadCount(Integer deadCount) {
		this.deadCount = deadCount;
	}

	public String getLocationId() {
		return locationId;
	}

	public void setLocationId(String locationId) {
		this.locationId = locationId;
	}

	@Override
	public String toString() {
		return "Info [code=" + code + ", time=" + time + ", provinceName=" + provinceName + ", areaName=" + areaName
				+ ", confirmCount=" + confirmCount + ", curedCount=" + curedCount + ", deadCount=" + deadCount
				+ ", locationId=" + locationId + "]";
	}
	
	
}
