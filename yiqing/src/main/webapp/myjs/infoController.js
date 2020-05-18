$(function(){
	$.get("xiaoming/hongsaorou.do",function(data){
		$("#allcount").text(data);
	});
});