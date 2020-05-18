$(function(){
	$.get("xiaoming/yiqingfenxi.do",function(data){
		var pie_fanzui =echarts.init(document.getElementById("pie_fanzui"),'infographic'); 
		option = {
		    title : {
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['现有确诊','现有治愈','现有死亡'],
		        textStyle: {color: 'balck'}
		    },
		    
			label: {
			     normal: {
			          textStyle: {
			                color: 'red'  // 改变标示文字的颜色
			          }
			     }
			},
		    series : [
		        {
		            name: '今日国内疫情分析',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:data,
		          
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		            
		        }
		    ]
		};
		
		pie_fanzui.setOption(option);
	});
});