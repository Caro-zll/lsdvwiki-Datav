/**
 * @file splitJson.js
 * @description 实现从原始json数据拼接为设计好的option格式对象数据
 * @author 沈雨康 (shenyukang@126.com）
 * @param {json原始数据} jsonD  
 * @param {其他辅助参数} parames 
 * @returns Object 返回拼接好的option渲染对象
 * @description x轴的数据应该映射在y轴上，
 */
const splitJson = (jsonD, parames)=>{
    let xAxisdata=[],SeriesYdata=[],seriesItemName=[];
    if(parames.title == '2015年-2017年哈尔滨市便民服务指标数据年度社会保障卡'){
        console.log(jsonD);
    }
    
    let lengths = jsonD.length;//2
    jsonD.forEach((element,index)=> {
        // //console.log(element,index);
        Object.values(element).forEach((key,index) => {
            if(parames.title == '2015年-2017年哈尔滨市信息化推进城乡协调发展情况'){
                console.log(key,index);
            }
            //console.log(key,index);
            if(index == 0){
                xAxisdata = xAxisdata.concat(key);
            }else{
                SeriesYdata = SeriesYdata.concat(key);
            }     
        });
        Object.keys(element).forEach((key,index)=>{
            //console.log(key,index);
            if(index != 0){
                seriesItemName = seriesItemName.concat(key);
            }
        })    
    });

    seriesItemName = [...new Set(seriesItemName)];//每个x轴对象中对应的每项对像区分list
    xAxisdata = [...new Set(xAxisdata)];//x轴上种类区分list

    // //console.log('xAxisdata:',xAxisdata);
    //console.log(SeriesYdata);
    //console.log(xAxisdata);
    //console.log(seriesItemName);
    let result = [];
    let lens   = seriesItemName.length;//3
    let lengt  = SeriesYdata.length/lens;//2
    //console.log(lens,lengt);
    for(let i=0; i<lens; i++){
        var arrnei =[];
        for(let j=i; j<SeriesYdata.length; j+=seriesItemName.length){
            //console.log(SeriesYdata[j],j);
            arrnei = arrnei.concat(SeriesYdata[j]);
            // //console.log(arrnei);
        }
        result.push(arrnei);
    }
    SeriesYdata = result;
    if(parames.title == '2015年-2017年哈尔滨市信息化推进城乡协调发展情况'){
        console.log("splictFuntion:");
        console.log(SeriesYdata,xAxisdata,seriesItemName,parames); 
    }
    //console.log(SeriesYdata,xAxisdata,parames);
    let graphObjOption = {
        'xAxisdata': xAxisdata,
        'SeriesYdata': SeriesYdata,
        'seriesItemName': seriesItemName,
        'title': parames.title,
        'graphObject': `canVas${parames.otherPara}`
    }
    return graphObjOption;
}
export default splitJson