const initAdvanceinformBar=(echarts, AdvanceinformBar, provinceThree, dainxingVal, advanceRate, ytext, titleText, index,firstY,secondY,thirdY)=>{
    AdvanceinformBar = echarts.init(document.getElementById(`advanceinform${index}`));
    const AdvanceinformBarOpt = {
        title : {
            text: titleText,
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
        toolbox: {
            iconStyle :{
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
                        imgChart.setOption(AdvanceinformBar.getOption());

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
        
        xAxis : [
            {
                type : 'category',
                data : provinceThree,
                scale:true,
                axisLabel: {
                    interval: 0,
                    rotate:40,
                }
            }
        ],
        yAxis : [
            {   name:ytext,
                scale:true,
                type : 'value'
            },
            {   name: '增长率',
                scale:true,
                type: 'value'
            }
        ],
        series : [{
            name:'增长率',
            yAxisIndex: 1,
            data: advanceRate,
            type: 'line',
        },				
        {
            name: ytext,
            type:'bar',
            data: dainxingVal,
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
            // barWidth : 15,
        }],
        barWidth : 15,
    };

    const otherBarOpt= {
        title: {
            text: '2015年-2017年东北三省宽带接入用户增长率(%)',
            textStyle:{
                color: '#cceeff',
            }
        },
        textStyle:{
            color: '#cceeff',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        toolbox: {
            iconStyle :{
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
                        // //console.log("axisdata",axisData);
                        // //console.log("series",series);
                        var table = '<table style="width:100%;text-align:center;border:1px solid #000"><tbody><tr>'
                                    + '<td style="border:1px solid #000">省份</td>'
                                    + '<td style="border:1px solid #000">' + series[0].name + '</td>'
                                    + '<td style="border:1px solid #000">' + series[1].name + '</td>'
                                    + '<td style="border:1px solid #000">' + series[2].name + '</td>'
                                    + '</tr >';
                        for (var i = 0, l = axisData.length; i < l; i++) {
                            table += '<tr>'
                                    + '<td style="border:1px solid #000">' + axisData[i] + '</td>'
                                    + '<td style="border:1px solid #000">' + series[0].data[i] + '</td>'
                                    + '<td style="border:1px solid #000">' + series[1].data[i] + '</td>'
                                    + '<td style="border:1px solid #000">' + series[2].data[i] + '</td>'
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
                        imgChart.setOption(AdvanceinformBar.getOption());

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
        xAxis: [
            {
                type: 'category',
                data : provinceThree,
                axisLabel: {
                    interval: 0,
                    rotate:40
                }
            }
        ],
        yAxis: [
            {   name: '增长率（%）',
                type: 'value'
            }
        ],
        series: [
            {
                name: '2015',
                type: 'bar',
                data: firstY,
            },
            {
                name: '2016',
                type: 'bar',

                data: secondY
            },
            {
                name: '2017',
                type: 'bar',
                data: thirdY
            }],
            barWidth:15
    };
    
    if(index<2){
        AdvanceinformBar.setOption(AdvanceinformBarOpt);
    }else{
        AdvanceinformBar.setOption(otherBarOpt);
    }
   
    window.addEventListener("resize", ()=>{     
        AdvanceinformBar.resize();
    });
    return AdvanceinformBar;
}
export default  initAdvanceinformBar;