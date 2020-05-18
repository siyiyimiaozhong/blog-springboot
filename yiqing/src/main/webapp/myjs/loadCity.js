$(function(){
	$.get("xiaoming/loadCity.do",function(data){
		var s="";
		for(var i=0;i<data.length;i++){
			s+="<option value='"+data[i]+"'>"+data[i]+"</option>";
		}
		$("#proNameOne").html(s);
	});
});