/**
 * 
 * @file RenderCanvas.js
 * @description 配置渲染canvas主函数
 * @param {传递过来的echarts引擎对象} echarts 
 * @param {传递过来待绑定的元素的id名} graphObject 
 * @param {标识当前图以什么形式渲染} optClassifyction 
 * @param {图的标题} title 
 * @param {传递过来的y轴所有数据} yList 
 * @param {传递过来的x轴所有数据} xList 
 * @param {y轴的名称列表} yAxisMorename 
 * @param {x轴的名称列表} xAxisMorename 
 * @param {是否显示平均值标识} AverageTag 
 * @returns {Object} CanvasObj
 * @author 沈雨康 (shenyukang@126.com）
 * @description 必须清楚的是x轴的每一个单元的具体值是展示在y轴上的，所以说x轴上有几种整体指标y轴就有几个
 */

const RenderCanvas=(echarts, graphObject, optClassifyction, title, xAxisdata, SeriesYdata, seriesItemName, AverageTag)=>{
    console.log('optClassifyction: ',optClassifyction);
    let yAxisT =[{   
        name: '数值',
        scale: true,
        type : 'value'
    }];
    let axioslabe = {};
    if(xAxisdata.length >= 4){
        axioslabe={
            interval: 0,
            formatter : function(params,index){
                if (index % 2 != 0) {
                    return '\n\n' + params;
                }
                else {
                    return params;
                }
            }
        }
    }else{
        axioslabe ={
            interval: 0,
        }
    }
    let seriest = [];
        //console.log('SeriesYdata:: ',SeriesYdata);
        SeriesYdata.forEach((element,index)=> {
            seriest = seriest.concat({
                name: seriesItemName[index],
                type: 'bar',
                data: element,
            });
        });
    const CanvasObj = echarts.init(document.getElementById(`${graphObject}`));
    const Options = {
        color:['#ffa31a','#407fbf','#ff8080','#ffd480','#7a7a52',' #ff6699','#75a3a3','#70dbdb','#999999','#00cc44','#ffa31a','#2d8659','#d11aff'],
        title : {
            text: title,
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
                                    + '<td style="border:1px solid #000">参数</td>'
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
                        imgChart.setOption(CanvasObj.getOption());

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
        
        xAxis : [{
            type : 'category',
            data : xAxisdata,
            scale:true,
            axisLabel: axioslabe
        }],
        yAxis : yAxisT,
        series : seriest,
        barWidth : 15,
    };
    CanvasObj.setOption(Options);
    window.addEventListener("resize", ()=>{     
        CanvasObj.resize();
    });

    return CanvasObj;
}
export default  RenderCanvas;