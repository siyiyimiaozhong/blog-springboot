var china_map;

$(function () {

    //加载确诊总人数
    $.get("yiqingfenxi/selectCuredAllCount.do",function(data){
        $("#allcount").text(data);
    });

    yiqingfenxi();

    //更新option
    $.get("yiqingfenxi/loadCity.do",function(data){
        var s="";
        for(var i=0;i<data.length;i++){
            s+="<option value='"+data[i]+"'>"+data[i]+"</option>";
        }
        $("#proNameOne").html(s);
        $("#confirmArea").html(s);
        $("#curedArea").html(s);
        $("#deadArea").html(s);
        selectByName();
        selectAreaByConofirm();
        selectAreaByCured();
        selectAreaByDead();
    });

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

    changetime();
    setInterval(function(){
        changetime();
    },1000);
});

function yiqingfenxi() {
    $.get("yiqingfenxi/yiqingfenxi.do",function(data){
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
}

//加载中国地图
function loadChinaMap(){
    $.get("yiqingfenxi/selectChinaInfo.do",function(data){
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

        $.get("yiqingfenxi/selectInfoByName.do",{name:city},function(data){
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

function selectByName() {
    var name = $("#proNameOne").val();
    test(name);
}

function test(pName){
    $.get("yiqingfenxi/selectAllCountByName.do",{name:pName},function(data){
        var pie_fanzui =echarts.init(document.getElementById("pie_yiqing"),'infographic');
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
}

/*各省确诊人数前五的地区*/
function selectAreaByConofirm(){
    var name = $("#confirmArea").val();
    $.get("yiqingfenxi/selectTop5Confirm.do",{name:name},function (data) {
        var pie_fanzui =echarts.init(document.getElementById("confirmCount"),'infographic');
        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow'}
            },
            grid: {
                left: '0%',
                top:'10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: data['address'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel:  {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show:true,
                    textStyle: {
                        color: "red",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "black",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "black",
                    }
                }
            }],
            series: [
                {

                    type: 'bar',
                    data: data['number'],
                    barWidth:'35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color:'red',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };
        pie_fanzui.setOption(option);
    })
}

/*各省治愈人数前五的地区*/
function selectAreaByCured(){
    var name = $("#curedArea").val();
    $.get("yiqingfenxi/selectTop5Cured.do",{name:name},function (data) {
        var pie_fanzui =echarts.init(document.getElementById("cureCount"),'infographic');
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left:40,
                right:20,
                top:30,
                bottom:0,
                containLabel: true
            },

            xAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,0)"
                },
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,5)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,1)'
                    }
                },
                axisLabel:{
                    color:"red"
                },
                data: data['address']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    barWidth :20,
                    itemStyle: {
                        normal: {
                            color:'blue',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    },
                    data: data['number']
                }
            ]
        };
        pie_fanzui.setOption(option);
    });
}

/*各省死亡前五的地区*/
function selectAreaByDead(){
    var name = $("#deadArea").val();
    $.get("yiqingfenxi/selectTop5Dead.do",{name:name},function (data) {
        var pie_fanzui =echarts.init(document.getElementById("deadCount"),'infographic');
        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow'}
            },
            grid: {
                left: '0%',
                top:'10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: data['address'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel:  {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show:true,
                    textStyle: {
                        color: "red",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "black",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "black",
                    }
                }
            }],
            series: [
                {

                    type: 'bar',
                    data: data['number'],
                    barWidth:'35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color:'red',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };
        pie_fanzui.setOption(option);
    });
}

function changetime(){
    var time=new Date();
    var s="";
    s+=time.getHours()+":";
    s+=time.getMinutes()+":";
    s+=time.getSeconds();
    $("#time").html(s);
}
