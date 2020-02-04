
const initProvincet = (echarts,provinceMaps,hljJson)=>{
    echarts.registerMap('黑龙江', hljJson);
    provinceMaps = echarts.init(document.getElementById("provinceMap"));
    // let that = this;
    // // //console.log(that.myEnlarge);
    // let yourOption = provinceMaps;
    const provinceMapOpt = {
        toolbox: {
            show : true,
            iconStyle :{
                borderColor: 'e6e6e6'
            },
            feature : {
                saveAsImage : {show: true},
                myEnlarge: {//放大按钮，自定义按钮必须以my开头
                    show: true,
                    title: '放大',						
                    icon: 'image:///data/img/enlarge.svg',//按钮图片的位置
                    onclick:()=>{
                        // //console.log("tool");
                        var mask=document.getElementById("mask");
                        var show=document.getElementById("show");
                        mask.style.display="block";
                        show.style.display="block";
                        var imgChart = echarts.init(document.getElementById('enlarge'));
                        imgChart.clear();
                        //myChart.getOption()获取当前图形的配置项option
                        imgChart.setOption(provinceMaps.getOption());

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
        geo: {
            map: '黑龙江',
            roam: true, //开启鼠标缩放和漫游
            zoom: 1, //地图缩放级别
            selectedMode: false, //选中模式：single | multiple
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            layoutCenter: ['50%', '50%'], //设置后left/right/top/bottom等属性无效
            layoutSize: '100%', //保持地图宽高比
            label: {
                emphasis: {
                    show: true,
                    color: '#f19000'
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#101f32',
                    borderWidth: 1.5,
                    borderColor: '#43d0d6'
                },
                emphasis: {
                    areaColor: '#069'
                }
            }
        }
    };
    provinceMaps.setOption(provinceMapOpt);
    window.addEventListener("resize", ()=>{
        // //console.log("你监听到了嘛？map")       
        provinceMaps.resize();
    });
    let city;
    provinceMaps.on('click', function(params){
        city = params.name;
        // //console.log(params.name);//此处写点击事件内容
        return city;
        // that.$route.push({path: '/province/detailCity'})
    });//点击
    // //console.log("cahunchulai1:",city);
    
   
}
export default  initProvincet;