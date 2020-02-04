/**
 * @file myenlarge.js
 * @description 'echarts-tool-box 自己的放大工具对象'
 */
// import echarts from 'echarts';
// const myEnlarge = {
//     show: true,
//     title: '放大',
//     icon: 'image:///data/img/enlarge.svg',//按钮图片的位置
//     onclick: (yourOption)=>{
//         //console.log("tool");
//         var mask = document.getElementById("mask");
//         var show = document.getElementById("show");
//         mask.style.display = "block";
//         show.style.display = "block";
//         var imgChart = echarts.init(document.getElementById('enlarge'));
//         imgChart.clear();
//         //myChart.getOption()获取当前图形的配置项option
//         imgChart.setOption(yourOption.getOption());

//         var close_show = document.getElementById("close_show");
//         close_show.onclick = () => {//关闭按钮触发
//             imgChart.clear();
//             mask.style.display = "none";
//             show.style.display = "none";
//         };

//     }
// }
function myEnlarge(yourOption) {
    // //console.log("tool");
        var mask = document.getElementById("mask");
        var show = document.getElementById("show");
        mask.style.display = "block";
        show.style.display = "block";
        var imgChart = echarts.init(document.getElementById('enlarge'));
        imgChart.clear();
        //myChart.getOption()获取当前图形的配置项option
        imgChart.setOption(yourOption.getOption());

        var close_show = document.getElementById("close_show");
        close_show.onclick = () => {//关闭按钮触发
            imgChart.clear();
            mask.style.display = "none";
            show.style.display = "none";
        };

}
export function  myEnlarge(yourOption);