const initProvinceBar=(echarts, andex ,provinceBars, allCityList, allRate=[], yAxisDta=[],texttitle='2017年黑龙江省各地市信息化发展指数', yname1='发展指数', yname2='增长率',)=>{
    // //console.log(allCityList,yAxisDta,allRate);
    let yname =  new Object;
    if(allRate[0] === undefined){
        allRate = ['','','','','','','','','','','','','',];
        yname = {}	
    }else{
        yname = {name: yname2,
            type : 'value'}
    }
    provinceBars = echarts.init(document.getElementById(`provinceBar${andex}`));
    const provinceBarOpt = {
          title : {
            text: texttitle,
            textStyle:{
                color: '#cceeff',
            }
        },
        textStyle:{
                color: '#cceeff',
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data: allCityList
        },
        toolbox: {
            iconStyle :{
                // color: 'e6e6e6',
                borderColor: 'e6e6e6'
            },
            show : true,
            feature : {
                dataView : {
                    show: true, 
                    readOnly: false,
                    optionToContent:(opt)=>{									
                        var axisData = opt.xAxis[0].data;
                        var series = opt.series;
                        var table = '<table style="width:100%;text-align:center;border:1px solid #000"><tbody><tr>'
                                    + '<td style="border:1px solid #000">城市</td>'
                                    + '<td style="border:1px solid #000">' + series[0].name + '</td>'
                                    + '<td style="border:1px solid #000">' + series[1].name + '</td>'
                                    + '</tr >';
                        for (var i = 0, l = axisData.length; i < l; i++) {
                            table += '<tr>'
                                    + '<td style="border:1px solid #000">' + axisData[i] + '</td>'
                                    + '<td style="border:1px solid #000">' + series[0].data[i] + '</td>'
                                    + '<td style="border:1px solid #000">' + series[1].data[i] + '</td>'
                                    + '</tr>';
                        }
                        table += '</tbody></table>';
                        return table;
                    }
                },														
                saveAsImage : {show: true},
                myEnlarge:{//放大按钮，自定义按钮必须以my开头
                    show:true,
                    title:'放大',						
                    icon:'image:///data/img/enlarge.svg',//按钮图片的位置
                    onclick: function (){
                        // //console.log("tool");
                        var mask=document.getElementById("mask");
                        var show=document.getElementById("show");
                        mask.style.display="block";
                        show.style.display="block";
                        var imgChart = echarts.init(document.getElementById('enlarge'));
                        imgChart.clear();
                        //myChart.getOption()获取当前图形的配置项option
                        imgChart.setOption(provinceBars.getOption());

                        var close_show=document.getElementById("close_show");
                        close_show.onclick=()=>{//关闭按钮触发
                            imgChart.clear();
                            mask.style.display="none";
                            show.style.display="none";
                        };

                    }
                }
            },
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : allCityList,
                axisLabel: {
                    interval: 0,
                    rotate:40
                }
            }
        ],
        yAxis : [
            {   name: yname1,
                type : 'value'
            },
            yname
        ],
        series : [{
            name: yname2,
            data: allRate,
            yAxisIndex: 1,
            type: 'line',
        },				
        {
            name: yname1,
            type:'bar',
            data: yAxisDta,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = ['#ffa31a','#ffd480','#ff8080','#407fbf','#7a7a52',' #ff6699','#75a3a3','#70dbdb','#999999','#00cc44','#ffa31a','#2d8659','#d11aff'];
                        return colorList[params.dataIndex]  //柱状图的颜色
                    },
                    lineStyle:{
                        color:'red'
                    }


                },
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            },
            barWidth : 15,
            }
        ]
    }
    provinceBars.setOption(provinceBarOpt);
    window.addEventListener("resize", ()=>{
        provinceBars.resize();
    });
    return provinceBars;
}
export default  initProvinceBar;