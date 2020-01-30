const initindividulIndicat = (echarts, individulIndicatIndex, classifyT, rateT, developmentT,index, thisName, titleText)=>{
    // if(rateT[0] === undefined){
    //     rateT = ['','','','','','','','','','','','','',];
    //     yname = {}	
    // }else{
    //     yname = {
    //         name: '增长率',
    //         type : 'value'
    //     }
    // }
    individulIndicatIndex = echarts.init(document.getElementById(`individulIndicat${index}`));
    
    const individulIndicatOpt = {
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
        legend: {
            data: classifyT
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
                                    + '<td style="border:1px solid #000">类型</td>'
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
                        var mask=document.getElementById("mask");
                        var show=document.getElementById("show");
                        mask.style.display="block";
                        show.style.display="block";
                        var imgChart = echarts.init(document.getElementById('enlarge'));
                        imgChart.clear();
                        imgChart.setOption(individulIndicatIndex.getOption());

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
                name:"区域",
                nameLocation: 'end',
                type : 'category',
                data : classifyT,
                axisLabel: {
                    interval: 0,
                    rotate:40
                }
            }
        ],
        yAxis : [
            {   name:"数值",
                nameLocation: 'end',
                type : 'value'
            },
            {
                name: '增长率',
                type : 'value'
            }
        ],
        series : [{
            name:'增长率',
            data: rateT,
            type: 'line',
            yAxisIndex: 1,
        },				
        {
            name: thisName,
            type:'bar',
            data: developmentT,
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
    individulIndicatIndex.setOption(individulIndicatOpt);
    window.addEventListener("resize", ()=>{     
        individulIndicatIndex.resize();
    });
    return individulIndicatIndex;
}
export default  initindividulIndicat;