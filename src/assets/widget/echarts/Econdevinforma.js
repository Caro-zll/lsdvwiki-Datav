const econdevinforma = (echarts, initBOX, Xsiox, Y1, Y2,Y3,index, titleText,Yname1,Yname2,Xname1,Xname2,Xname3)=>{
    // index==3?//console.log(Y1,Y2,Y3):'';
    if(index == 0){
        Xsiox.splice(0,1);
        Xsiox.splice(1,1);
        Y1.splice(0,1);
        Y2.splice(0,1);
        Y3.splice(0,1);
        Y1.splice(1,1);
        Y2.splice(1,1);
        Y3.splice(1,1);
    }else if(index ==1){
        Xsiox.splice(0,1);
        Y1.splice(0,1);
        Y2.splice(0,1);
        Y3.splice(0,1);
    }
    let axioslabe = {};
    // let axioslabe2 ={
    //     interval: 0,
    // }

    if(index == 1){
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
    //console.log(index+'nishuone:',Xsiox);
    //console.log(index+'nishuone:',Y1);
    //console.log(index+'nishuone:',Y2);
    //console.log(index+'nishuone:',Y3);
   
    initBOX = echarts.init(document.getElementById(`econominform${index}`));
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
                        var table = '<table style="width:100%;text-align:center;border:1px solid #000"><tbody><tr>'
                                    + '<td style="border:1px solid #000">指标名称</td>'
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
                    icon:'image:///lsdvwiki-Datav/data/img/enlarge.svg',//按钮图片的位置
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
                axisLabel: axioslabe
            }
        ],
        yAxis:[
            {
                name:Yname1,
                type:'value',
                scale:true,

            },
            {
                name:Yname2,
                type:'value',
                scale:true,

            },
            
        ],
        series:[
            index==2?{
                name: Xname1,
                type: 'line',
                lineStyle:{
                    color: '#decb00'
                },
                data: Y1,
            }:{
                name: Xname1,
                type: 'bar',
                itemStyle:{color:'#f58f98'},
                data: Y1,
            },
            index==2?{
                name: Xname2,
                type: 'line',
                lineStyle:{
                    color: '#1d953f'
                },
                yAxisIndex:1,
                data: Y2
            }:{
                name: Xname2,
                type: 'bar',
                itemStyle:{color:'#454926'},
                data: Y2,
            },
            {
                name: Xname3,
                type: 'bar',
                itemStyle:{color:'#009ad6'},
                data: Y3
            },
        ],
        barWidth:15
    }
    initBOX.setOption(EcondevinformaBarOpt);
    window.addEventListener("resize", ()=>{     
        initBOX.resize();
    });
    return initBOX;
}
export default  econdevinforma;