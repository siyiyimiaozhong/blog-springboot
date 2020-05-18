<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">

    <script type="text/javascript" src="js/rem.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>新冠型肺炎分析系统</title>
	
</head>

<body style="visibility: hidden;">
    <div class="container-flex" tabindex="0" hidefocus="true">
        <div class="box-left">
            <div class="left-top">
                <div class="current-num">
                    <div>新冠型肺炎确诊人数</div>
                    <p id="allcount">xxxx人</p>
                </div>
            </div>
            <div class="left-center">
                <div class="title-box">
                    <h6>今日国内疫情分析</h6>
                </div>
                <div class="chart-box pie-chart" style="">
                    <div id="pie_fanzui" style="width:100%;"></div>
                    
                </div>
            </div>
            <div class="left-bottom" class="select">
                <div class="title-box">
                    <h6>各省的疫情分析</h6>
                    <select id="proNameOne" onchange="selectByName()" style="height:20px;width:50px;margin-left:10px;font-size: 12px">
                    
                	</select>	
                </div>
                
                <div class="chart-box pie-chart">
                
                   <div id="pie_yiqing" style="width:100%;"></div>
                	
                </div>
            </div>
        </div>
        <div class="box-center">
            <div class="center-top">
                <h1><img src="images/jinghui.png" style="width:55px;margin-right:20px;"/>新冠型肺炎分析系统</h1>
            </div>
            <div class="center-center">
                <div class="weather-box">
                    <div class="data">
                        <p class="time" id="time">00:00:00</p>
                        <p id="date"></p>
                    </div>
                    <div class="weather">
                        <img id="weatherImg" src="images/weather/weather_img01.png" alt="">
                        <div id="weather">
                            <p class="active">多云</p>
                            <p>16-22℃</p>
                            <p>绵阳市仙海区</p>
                        </div>
                    </div>
                </div>
                <img src="images/line_bg.png" alt="">
                <div class="select-box" style="height: 0.3rem;">
                    
                    <div data-type="2">
                        <div class="select" tabindex="0" hidefocus="true" >
                         
                          <a href="javascript:loadChinaMap()" >返回</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="center-bottom">
                <div class="chart-box">
                    <div id="china_map" style="width:100%;height:95%;"></div>
                </div>
                
            </div>

        </div>
        <div class="box-right">
            <div class="right-top">
                <div class="title-box">
                    <h6 id="barTitle">各省确诊人数前五的地区</h6>
                     <select id="confirmArea" style="height:20px;width:50px;margin-left:10px;font-size: 12px" onchange="selectAreaByConofirm()">

                	</select>
                </div>
        
                    <div class="chart-box ">
					   <div id="confirmCount" style="width:100%;height:100%;">
            
                    </div>
                </div>
                
            </div>
            <div class="right-center">
            	
                <div class="title-box">
                    <h6>各省治愈人数前五的地区</h6>
                       <select id="curedArea" style="height:20px;width:50px;margin-left:10px;font-size: 12px" onchange="selectAreaByCured()">

                	</select>
                </div>
                <div class="chart-box ">
                    <div id="cureCount"style="width:90%;height:100%;margin-left:10px;"></div>
                </div>
            </div>

            <div class="right-bottom">
                <div class="title-box">
                	<p id="switchBtn"><span class="active" data-dataType="income">各省死亡前五的地区</span></p>
                    <select id="deadArea" style="height:20px;width:50px;margin-left:10px;font-size: 12px" onchange="selectAreaByDead()">

                	</select>
                </div>
                <div class="chart-box ">
					   <div id="deadCount" style="width:100%;height:100%;">
            
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
</body>
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/layer/layer.min.js"></script>
<script type="text/javascript" src="js/layer/laydate/laydate.js"></script>
<script type="text/javascript" src="js/echarts.min.js"></script>
<script type="text/javascript" src="js/china.js"></script>
<script type="text/javascript" src="js/infographic.js"></script>
<script type="text/javascript" src="js/macarons.js"></script>
<script type="text/javascript" src="js/shine.js"></script>
<script type="text/javascript" src="js/myjs.js"></script>

<script type="text/javascript">
    $('document').ready(function () {
        $("body").css('visibility', 'visible');
        var localData = [$('#teacher').val(), $('#start').val() + '/' + $('#end').val(), $('#leader').val()]
        localStorage.setItem("data", localData);
    });
</script>
</html>