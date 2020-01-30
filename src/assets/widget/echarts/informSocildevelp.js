const informsocildevelp = (echarts, initBOX, Xsiox, Y1, Y2,Y3,index, titleText,Yname1,Yname2,Xname1,Xname2,Xname3)=>{
    // //console.log('xname:',Xname1);
    initBOX = echarts.init(document.getElementById(`informationSocilDevel${index}`));
    const EcondevinformaBarOpt ={
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
                        // //console.log(series);
                        var table = '<table style="width:100%;text-align:center;border:1px solid #000"><tbody><tr>'
                                    + '<td style="border:1px solid #000">年份</td>'
                                    + '<td style="border:1px solid #000">' + series[0].name + '</td>'
                                    + '</tr >';
                        for (var i = 0, l = axisData.length; i < l; i++) {
                            table += '<tr>'
                                    + '<td style="border:1px solid #000">' + axisData[i] + '</td>'
                                    + '<td style="border:1px solid #000">' + series[0].data[i] + '</td>'
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
                        imgChart.setOption(initBOX.getOption());

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
        xAxis:[
            {
                type: 'category',
                data : Xsiox,
                // axisLabel: {
                //     interval: 0,
                //     rotate:5
                // }
            }
        ],
        yAxis:[
            {
                name:Yname1,
                type:'value',
                // scale:true,

            },
            
        ],
        series:[{
                name: Xname1,
                type: 'bar',
                // itemStyle:{color:'#f58f98'},
                data: Y1,
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
                barWidth:15
            },
        ],
        }
    initBOX.setOption(EcondevinformaBarOpt);
    window.addEventListener("resize", ()=>{     
        initBOX.resize();
    });
    return initBOX;
}
export default  informsocildevelp;