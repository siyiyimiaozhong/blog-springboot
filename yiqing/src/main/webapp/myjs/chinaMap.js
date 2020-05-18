
var china_map;

$(function(){
	//创建地图容器
 china_map =echarts.init(document.getElementById("china_map"),'infographic'); 
	//加载中国地图
	loadChinaMap();
	//地图鼠标点击事件
	china_map.on('click', function (params) {
		//获取省份名称
		var city = params.name
		loadProvidName(city)
	   });
})


//加载中国地图
function loadChinaMap(){	
	$.get("xiaoming/selectChinaInfo.do",function(data){
		var option = {
				
				title: {
					text: '新冠型肺炎人口来源分析',
					textStyle:{color:'#fff'},
					//subtext: '纯属虚构',
					x:'center'
				},
				tooltip : {
					trigger: 'item'
				},
				visualMap: {
					show : false,
					x: 'left',
					y: 'bottom',
					//layoutCenter:['30%','30%'],
					splitList: [ 
						{start: 0, end:100},{start: 100, end: 300},
						{start: 300, end: 500},{start: 500, end: 800},
						{start: 800, end: 1500},{start: 1500, end: 100000},
					],
					color: ['red', 'yellow', 'Purple','DarkCyan', 'green', 'Lime']
				},
				series: [{
					name: '新冠型肺炎人口来源分析',
					type: 'map',
					mapType: 'china', 
					roam: true,
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: false
						}
					},
					data:data
				}]
			};

		china_map.setOption(option);
	});
}
//加载省级地图
function loadProvidName(city){
	
	//
	china_map.showLoading();
 	//请求省级地图数据
	$.get("json/"+city+".json", function (geoJson) {
	
		$.get("xiaoming/selectInfoByName.do",{name:city},function(data){
			china_map.hideLoading();
		    echarts.registerMap(city, geoJson);

			var option = {
					
					title: {
						text: city+'新冠型肺炎人口来源分析',
						textStyle:{color:'#fff'},
						//subtext: '纯属虚构',
						x:'center'
					},
					tooltip : {
						trigger: 'item'
					},
					visualMap: {
						show : false,
						x: 'left',
						y: 'bottom',
						//layoutCenter:['30%','30%'],
						splitList: [ 
							{start: 0, end:100},{start: 100, end: 300},
							{start: 300, end: 500},{start: 500, end: 800},
							{start: 800, end: 1500},{start: 1500, end: 100000},
						],
						color: ['red', 'yellow', 'Purple','DarkCyan', 'green', 'Lime']
					},
					series: [{
						name: city+'新冠型肺炎人口来源分析',
						type: 'map',
						mapType: city, 
						roam: true,
						label: {
							normal: {
								show: true
							},
							emphasis: {
								show: false
							}
						},
						data:data
					}]
				};

			china_map.setOption(option);
		});
	});
}
