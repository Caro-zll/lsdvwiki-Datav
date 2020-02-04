<template>
  <div class="home">
    <header class="header">
      <h4>{{cityname}}信息化发展水平分析</h4>
    </header>
    <div class="wrapper">
      <div id="mask"></div>
      <div id="show">
        <div id="bg"></div>
        <span id="close_show">×</span>
        <div id="enlarge" style="width:100%;height:80%"></div>
      </div>
      <div class="container-fluid">
        <div class="row fill-h">
          <div class="col-lg-3 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-2">
              <div class="xpanel">
                <el-carousel indicator-position="outside" :interval="5000">
                  <el-carousel-item v-for="(item,index) in Area1" :key="'A'+index">
                    <div class="fill-h" :id="item.graphObject"></div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>

            <div class="xpanel-wrapper xpanel-wrapper-2">
              <div class="xpanel">
                <el-carousel indicator-position="outside" :interval="5000">
                  <el-carousel-item v-for="(item,index) in Area2" :key="'B'+index">
                    <div class="fill-h" :id="item.graphObject"></div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>

          <div class="col-lg-6 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-2">
              <div class="xpanel">
                <el-carousel indicator-position="outside" :interval="5000">
                  <el-carousel-item v-for="(item,index) in Area5" :key="'C'+index">
                    <div class="fill-h" :id="item.graphObject"></div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-2">
              <div class="xpanel re-xpanel">
                <el-tabs type="border-card" v-model="activeName" class="css-reset" @tab-click="tabSelect">
                  <el-tab-pane class="css-content" label="信息基础设施建设" name="1">
                    <div class="fill-h" style="width:100%;height:100%">
                      <el-carousel indicator-position="outside" :interval="5000">
                        <el-carousel-item v-for="(item,index) in Area6" :key="'D'+index">
                          <div class="fill-h" :id="item.graphObject" ></div>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane class="css-content" name="2" label="经济发展信息化">
                    <div class="fill-h" style="width:100%;height:100%">
                      <el-carousel indicator-position="outside" :interval="5000">
                        <el-carousel-item v-for="(item,index) in Area7" :key="'E'+index">
                          <div class="fill-h" :id="item.graphObject" style="width:100%;height:100%"></div>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </el-tab-pane>
				  <el-tab-pane class="css-content" name="3" label="社会发展信息化">
                    <div class="fill-h" style="width:100%;height:100%">
                      <el-carousel indicator-position="outside" :interval="5000">
                        <el-carousel-item v-for="(item,index) in Area8" :key="'F'+index">
                          <div class="fill-h" :id="item.graphObject" style="width:100%;height:100%"></div>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </div>

          <div class="col-lg-3 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-2">
              <div class="xpanel">
                <el-carousel indicator-position="outside" :interval="5000">
                  <el-carousel-item v-for="(item,index) in Area3" :key="'G'+index">
                    <div class="fill-h" :id="item.graphObject"></div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>

            <div class="xpanel-wrapper xpanel-wrapper-2">
              <div class="xpanel">
                <el-carousel indicator-position="outside" :interval="5000">
                  <el-carousel-item v-for="(item,index) in Area4" :key="'H'+index">
                    <div class="fill-h" :id="item.graphObject"></div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import splitJson from "@/assets/widget/splitJson.js";
import RenderCanvas from "@/assets/widget/echarts/module/RenderCanvas.js";
import echarts from "echarts";
import "@/assets/css/app.css";
export default {
  data() {
    return {
      cityname: "",
	    nodeIndex: -1,
	    activeName: '1',
      Area1: [],
      Area2: [],
      Area3: [],
      Area4: [],
      Area5: [],
	    Area6: [],
	    Area7: [],
      Area8: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
	  tabSelect(tab, event){
      console.log(tab.name,event);
      if(tab.name == 1){
          console.log(tab.name);
          this.cityRender(this.cityname, 6);
      }
      if(tab.name == 2){
          console.log(tab.name);
          this.cityRender(this.cityname, 7);
      }
      if(tab.name == 3){
          console.log(tab.name);
          this.cityRender(this.cityname, 8);
      }
	  },
    cityRender(cityTag, otherParams) {
    if(cityTag == '哈尔滨市'){
      if (otherParams == 1) {
        this.axios
          .get("/lsdvwiki-Datav/data/sheet/第一部分1.json")
          .then(response => {
            //console.log(response, response.data);
            let dataF = response.data;
            return dataF;
          })
          .then(dataF => {
            this.nodeIndex = this.nodeIndex + 1;
            let graphDataObj1 = splitJson(dataF, {
              title: "2015年-2017年哈尔滨市网络基础设施就绪度指数情况",
              otherPara: this.nodeIndex
            });
            //console.log(graphDataObj1.graphObject);

            return graphDataObj1;
          })
          .then(graphDataObj1 => {
            this.Area1 = this.Area1.concat(graphDataObj1);
            this.axios
              .get("/lsdvwiki-Datav/data/sheet/第一部分2.json")
              .then(response => {
                let dataF = response.data;
                return dataF;
              })
              .then(dataF => {
                this.nodeIndex = this.nodeIndex + 1;
                let graphDataObj2 = splitJson(dataF, {
                  title: "2015年-2017年哈尔滨市网络资源就绪度指数情况",
                  otherPara: this.nodeIndex
                });
                //console.log(graphDataObj2);
                return graphDataObj2;
              })
              .then(graphDataObj2 => {
                this.Area1 = this.Area1.concat(graphDataObj2);
                this.axios
                  .get("/lsdvwiki-Datav/data/sheet/第一部分3.json")
                  .then(response => {
                    let dataF = response.data;
                    return dataF;
                  })
                  .then(dataF => {
                    this.nodeIndex = this.nodeIndex + 1;
                    //console.log(this.nodeIndex);
                    let graphDataObj3 = splitJson(dataF, {
                      title: "2015年-2017年哈尔滨市网络安全保障指数情况",
                      otherPara: this.nodeIndex
                    });
                    //console.log(graphDataObj3);
                    return graphDataObj3;
                  })
                  .then(graphDataObj3 => {
                    this.Area1 = this.Area1.concat(graphDataObj3);
                  })
                  .then(() => {
                    //console.log(this.Area1);
                    this.Area1.forEach(element => {
                      RenderCanvas(
                        echarts,
                        element.graphObject,
                        "bar",
                        element.title,
                        element.xAxisdata,
                        element.SeriesYdata,
                        element.seriesItemName,
                        1
                      );
                    });
                  });
              });
          });
        return 1;
      }
      if (otherParams == 2) {
        this.axios
            .get("/lsdvwiki-Datav/data/sheet/第二部分1.json")
            .then(response => {
              //console.log(response, response.data);
              let dataF = response.data;
              return dataF;
            })
            .then(dataF => {
              this.nodeIndex = this.nodeIndex + 1;
              let graphDataObj1 = splitJson(dataF, {
                title: "2015年-2017年哈尔滨市信息化发展环境指数情况",
                otherPara: this.nodeIndex
              });
              //console.log(graphDataObj1.graphObject);

              return graphDataObj1;
            })
            .then(graphDataObj1 => {
              this.Area2 = this.Area2.concat(graphDataObj1);
              this.axios
                .get("/lsdvwiki-Datav/data/sheet/第二部分2.json")
                .then(response => {
                  let dataF = response.data;
                  return dataF;
                })
                .then(dataF => {
                  this.nodeIndex = this.nodeIndex + 1;
                  let graphDataObj2 = splitJson(dataF, {
                    title: "2015年-2017年哈尔滨市信息产业与投入指数情况",
                    otherPara: this.nodeIndex
                  });
                  //console.log(graphDataObj2);
                  return graphDataObj2;
                })
                .then(graphDataObj2 => {
                  this.Area2 = this.Area2.concat(graphDataObj2);
                  this.axios
                    .get("/lsdvwiki-Datav/data/sheet/第二部分3.json")
                    .then(response => {
                      let dataF = response.data;
                      return dataF;
                    })
                    .then(dataF => {
                      this.nodeIndex = this.nodeIndex + 1;
                      //console.log(this.nodeIndex);
                      let graphDataObj3 = splitJson(dataF, {
                        title: "2015年-2017年哈尔滨市信息化发展环境指数情况",
                        otherPara: this.nodeIndex
                      });
                      //console.log(graphDataObj3);
                      return graphDataObj3;
                    })
                    .then(graphDataObj3 => {
                      this.Area2 = this.Area2.concat(graphDataObj3);
                    })
                    .then(() => {
                      //console.log(this.Area2);
                      this.Area2.forEach(element => {
                        RenderCanvas(
                          echarts,
                          element.graphObject,
                          "bar",
                          element.title,
                          element.xAxisdata,
                          element.SeriesYdata,
                          element.seriesItemName,
                          1
                        );
                      });
                    });
                });
            });
          return 1;
      }
      if (otherParams == 3) {
        this.axios
            .get("/lsdvwiki-Datav/data/sheet/第三部分1.json")
            .then(response => {
              //console.log(response, response.data);
              let dataF = response.data;
              return dataF;
            })
            .then(dataF => {
              this.nodeIndex = this.nodeIndex + 1;
              let graphDataObj1 = splitJson(dataF, {
                title: "2015年-2017年哈尔滨市网络基础设施就绪度指数情况",
                otherPara: this.nodeIndex
              });
              //console.log(graphDataObj1.graphObject);

              return graphDataObj1;
            })
            .then(graphDataObj1 => {
              this.Area3 = this.Area3.concat(graphDataObj1);
              this.axios
                .get("/lsdvwiki-Datav/data/sheet/第三部分2.json")
                .then(response => {
                  let dataF = response.data;
                  return dataF;
                })
                .then(dataF => {
                  this.nodeIndex = this.nodeIndex + 1;
                  let graphDataObj2 = splitJson(dataF, {
                    title: "2015年-2017年哈尔滨市网络资源就绪度指数情况",
                    otherPara: this.nodeIndex
                  });
                  //console.log(graphDataObj2);
                  return graphDataObj2;
                })
                .then(graphDataObj2 => {
                  this.Area3 = this.Area3.concat(graphDataObj2);
                  this.axios
                    .get("/lsdvwiki-Datav/data/sheet/第三部分3.json")
                    .then(response => {
                      let dataF = response.data;
                      return dataF;
                    })
                    .then(dataF => {
                      this.nodeIndex = this.nodeIndex + 1;
                      //console.log(this.nodeIndex);
                      let graphDataObj3 = splitJson(dataF, {
                        title: "2015年-2017年哈尔滨市网络安全保障指数情况",
                        otherPara: this.nodeIndex
                      });
                      //console.log(graphDataObj3);
                      return graphDataObj3;
                    })
                    .then(graphDataObj3 => {
                      this.Area3 = this.Area3.concat(graphDataObj3);
                    })
                    .then(() => {
              this.axios.get("/lsdvwiki-Datav/data/sheet/2015年_2017年哈尔滨市政务服务指数情况表.json").then(response=>{
                let dataF = response.data;
                          return dataF;
              }).then((dataF)=>{
                this.nodeIndex = this.nodeIndex + 1;
                //console.log(this.nodeIndex);
                let graphDataObj4 = splitJson(dataF, {
                title: "2015年_2017年哈尔滨市政务服务指数情况",
                otherPara: this.nodeIndex
                });
                //console.log(graphDataObj4);
                return graphDataObj4;
              }).then(graphDataObj4 => {
                        this.Area3 = this.Area3.concat(graphDataObj4);
                        }).then(()=>{
                //console.log(this.Area3);
                          this.Area3.forEach(element => {
                RenderCanvas(
                  echarts,
                  element.graphObject,
                  "bar",
                  element.title,
                  element.xAxisdata,
                  element.SeriesYdata,
                  element.seriesItemName,
                  1
                );
                })
                      
                      });
                    });
                });
            });
          return 1;
      }
      if (otherParams == 4) {
        this.axios
            .get("/lsdvwiki-Datav/data/sheet/第四部分1.json")
            .then(response => {
              //console.log(response, response.data);
              let dataF = response.data;
              return dataF;
            })
            .then(dataF => {
              this.nodeIndex = this.nodeIndex + 1;
              let graphDataObj1 = splitJson(dataF, {
                title: "2015年-2017年哈尔滨市产业信息化指数情况",
                otherPara: this.nodeIndex
              });
              //console.log(graphDataObj1.graphObject);

              return graphDataObj1;
            })
            .then(graphDataObj1 => {
              this.Area4 = this.Area4.concat(graphDataObj1);
              this.axios
                .get("/lsdvwiki-Datav/data/sheet/第四部分2.json")
                .then(response => {
                  let dataF = response.data;
                  return dataF;
                })
                .then(dataF => {
                  this.nodeIndex = this.nodeIndex + 1;
                  let graphDataObj2 = splitJson(dataF, {
                    title: "2015年-2017年哈尔滨市农业信息化指数情况",
                    otherPara: this.nodeIndex
                  });
                  //console.log(graphDataObj2);
                  return graphDataObj2;
                })
                .then(graphDataObj2 => {
                  this.Area4 = this.Area4.concat(graphDataObj2);
                  this.axios
                    .get("/lsdvwiki-Datav/data/sheet/第四部分3.json")
                    .then(response => {
                      let dataF = response.data;
                      return dataF;
                    })
                    .then(dataF => {
                      this.nodeIndex = this.nodeIndex + 1;
                      //console.log(this.nodeIndex);
                      let graphDataObj3 = splitJson(dataF, {
                        title: "2015年-2017年哈尔滨市服务业信息化指数情况",
                        otherPara: this.nodeIndex
                      });
                      //console.log(graphDataObj3);
                      return graphDataObj3;
                    })
                    .then(graphDataObj3 => {
                      this.Area4 = this.Area4.concat(graphDataObj3);
                    })
                    .then(() => {
                      //console.log(this.Area4);
                      this.Area4.forEach(element => {
                        RenderCanvas(
                          echarts,
                          element.graphObject,
                          "bar",
                          element.title,
                          element.xAxisdata,
                          element.SeriesYdata,
                          element.seriesItemName,
                          1
                        );
                      });
                    });
                });
            });
          return 1;
      }
      if (otherParams == 5) {
        console.log("yes 5:S::S");
        this.axios
            .get("/lsdvwiki-Datav/data/sheet/第五部分.json")
            .then(response => {
              //console.log(response, response.data);
              let dataF = response.data;
              return dataF;
            }).then((dataF)=>{
          this.nodeIndex = this.nodeIndex + 1;
          let graphDataObj1 = splitJson(dataF, {
          title: "2015年-2017年哈尔滨市信息化发展环境指数情况",
          otherPara: this.nodeIndex
          });
          //console.log(graphDataObj1.graphObject);

          return graphDataObj1;
        }).then(graphDataObj1 => {
              this.Area5 = this.Area5.concat(graphDataObj1);
        }) .then(() => {
                      //console.log(this.Area5);
                      this.Area5.forEach(element => {
                        RenderCanvas(
                          echarts,
                          element.graphObject,
                          "bar",
                          element.title,
                          element.xAxisdata,
                          element.SeriesYdata,
                          element.seriesItemName,
                          1
                        );
                      });
                    });
                    return 1;
      }
      if (otherParams == 6) {
        this.axios
            .get("/lsdvwiki-Datav/data/sheet/2015年_2017年哈尔滨市固定宽带普及率与移动宽带普及率情.json")
            .then(response => {
              //console.log(response, response.data);
              let dataF = response.data;
              return dataF;
            })
            .then(dataF => {
              this.nodeIndex = this.nodeIndex + 1;
              let graphDataObj1 = splitJson(dataF, {
                title: "2015年_2017年哈尔滨市固定宽带普及率与移动宽带普及率情",
                otherPara: this.nodeIndex
              });
              //console.log(graphDataObj1.graphObject);

              return graphDataObj1;
            })
            .then(graphDataObj1 => {
              this.Area6 = this.Area6.concat(graphDataObj1);
              this.axios
                .get("/lsdvwiki-Datav/data/sheet/2015年_2017年东北四个副省级城市通信业情况.json")
                .then(response => {
                  let dataF = response.data;
                  return dataF;
                })
                .then(dataF => {
                  this.nodeIndex = this.nodeIndex + 1;
                  let graphDataObj2 = splitJson(dataF, {
                    title: "2015年_2017年东北四个副省级城市通信业情况",
                    otherPara: this.nodeIndex
                  });
                  //console.log(graphDataObj2);
                  return graphDataObj2;
                }).then(graphDataObj2 => {
                  this.Area6 = this.Area6.concat(graphDataObj2);
                  }).then(() => {
                      //console.log(this.Area6);
                      this.Area6.forEach(element => {
                        RenderCanvas(
                          echarts,
                          element.graphObject,
                          "bar",
                          element.title,
                          element.xAxisdata,
                          element.SeriesYdata,
                          element.seriesItemName,
                          1
                        );
                      });
                  });;
            });
          return 1;
      }
      if (otherParams == 7) {
        this.axios
          .get("/lsdvwiki-Datav/data/sheet/2015年_2017年哈尔滨市信息化推进城乡协调发展情况表1.json")
          .then(response => {
            //console.log(response, response.data);
            let dataF = response.data;
            return dataF;
          })
          .then(dataF => {
            this.nodeIndex = this.nodeIndex + 1;
            let graphDataObj1 = splitJson(dataF, {
              title: "2015年-2017年哈尔滨市信息化推进城乡协调发展情况表1",
              otherPara: this.nodeIndex
            });
            return graphDataObj1;
          })
          .then(graphDataObj1 => {
            this.Area7 = this.Area7.concat(graphDataObj1);
          
              this.axios.get("/lsdvwiki-Datav/data/sheet/2015年_2017年哈尔滨市信息化推进城乡协调发展情况表2.json").then(response=>{
                let dataF = response.data;
                return dataF;
              }).then(dataF=>{
                this.nodeIndex = this.nodeIndex + 1;
                let graphDataObj2 = splitJson(dataF, {
                title: "2015年-2017年哈尔滨市信息化推进城乡协调发展情况表2",
                otherPara: this.nodeIndex
                });
                return graphDataObj2;
              }).then(graphDataObj2=>{
                this.Area7 = this.Area7.concat(graphDataObj2);
                this.axios
              .get("/lsdvwiki-Datav/data/sheet/2015年-2017年哈尔滨市网络零售额占比与人均快递物流量情.json")
              .then(response => {
                let dataF = response.data;
                return dataF;
              })
              .then(dataF => {
                this.nodeIndex = this.nodeIndex + 1;
                let graphDataObj3 = splitJson(dataF, {
                  title: "2015年-2017年哈尔滨市网络零售额占比与人均快递物流量情况",
                  otherPara: this.nodeIndex
                });
                return graphDataObj3;
              })
              .then(graphDataObj3 => {
                this.Area7 = this.Area7.concat(graphDataObj3);
                this.axios
                  .get("/lsdvwiki-Datav/data/sheet/2015年_2017年哈尔滨市农业信息化情况表.json")
                  .then(response => {
                    let dataF = response.data;
                    return dataF;
                  })
                  .then(dataF => {
                    this.nodeIndex = this.nodeIndex + 1;
                    //console.log(this.nodeIndex);
                    let graphDataObj4 = splitJson(dataF, {
                      title: "2015年_2017年哈尔滨市农业信息化情况表",
                      otherPara: this.nodeIndex
                    });
                    //console.log(graphDataObj3);
                    return graphDataObj4;
                  })
                  .then(graphDataObj4 => {
                    this.Area7 = this.Area7.concat(graphDataObj4);
                  })
                  .then(() => {
                    console.log(this.Area7);
                    this.Area7.forEach(element => {
                      RenderCanvas(
                        echarts,
                        element.graphObject,
                        "bar",
                        element.title,
                        element.xAxisdata,
                        element.SeriesYdata,
                        element.seriesItemName,
                        1
                      );
                    });
                  });
              });
            })  
          })
        return 1;   
      }
      if (otherParams == 8) {
        this.axios
            .get("/lsdvwiki-Datav/data/sheet/2015年-2017年哈尔滨市政务服务指数情况表.json")
            .then(response => {
              // console.log(response, response.data);
              let dataF = response.data;
              return dataF;
            })
            .then(dataF => {
              this.nodeIndex = this.nodeIndex + 1;
              let graphDataObj1 = splitJson(dataF, {
                title: "2015年-2017年哈尔滨市政务服务指数情况表",
                otherPara: this.nodeIndex
              });
              //console.log(graphDataObj1.graphObject);
              return graphDataObj1;
            })
            .then(graphDataObj1 => {
              this.Area8 = this.Area8.concat(graphDataObj1);
              this.axios
                .get("/lsdvwiki-Datav/data/sheet/2015年_2017年哈尔滨市便民服务指标数据年度社会保障卡.json")
                .then(response => {
                  let dataF = response.data;
                  return dataF;
                })
                .then(dataF => {
                  this.nodeIndex = this.nodeIndex + 1;
                  let graphDataObj2 = splitJson(dataF, {
                    title: "2015年-2017年哈尔滨市便民服务指标数据年度社会保障卡",
                    otherPara: this.nodeIndex
                  });
                  //console.log(graphDataObj2);
                  return graphDataObj2;
                }).then(graphDataObj2 => {
                  this.Area8 = this.Area8.concat(graphDataObj2);
                  }).then(() => {
                      //console.log(this.Area6);
                      this.Area8.forEach(element => {
                        RenderCanvas(
                          echarts,
                          element.graphObject,
                          "bar",
                          element.title,
                          element.xAxisdata,
                          element.SeriesYdata,
                          element.seriesItemName,
                          1
                        );
                      });
                  });;
            });
          return 1;
      }
	}
	if(cityTag == '大庆市'){

	}

    },
    asyncF(obthis) {
		let that =obthis;
      async function renderInit(that) {
        await new Promise(function areaP1(resolve, reject){
          if (that.cityRender(that.cityname, 1) == 1) {
            resolve(1);
          } else {
            reject();
          }
        });

        await new Promise(function areaP2(resolve, reject){
          if (that.cityRender(that.cityname, 2) == 1) {
            resolve(1);
          } else {
            reject();
          }
        });

        await new Promise(function areaP3(resolve, reject){
          if (that.cityRender(that.cityname, 3) == 1) {
            resolve(1);
          } else {
            reject();
          }
        });

        await new Promise(function areaP4(resolve, reject){
          if (that.cityRender(that.cityname, 4) == 1) {
            resolve(1);
          } else {
            reject();
          }
		    });
        await new Promise(function areaP6(resolve, reject){
          if (that.cityRender(that.cityname, 6) == 1) {
            resolve(1);
          } else {
            reject();
          }
        });

        await new Promise(function areaP5(resolve, reject){
            if (that.cityRender(that.cityname, 5) == 1) {
            console.log(222);
                resolve(1);
            } else {
                reject();
            }
        });
		
		    
      }
      renderInit(that);
    }
  },
  mounted() {
    //获取从父组件传递过来的值，判断是哪个市，然后决定渲染权
    this.cityname = this.$route.params.id;
    //console.log(this.cityname);
	this.asyncF(this);
    // this.cityRender(this.dcityname, 1);
  }
};
</script>

<style lang="scss">
h1 {
  color: #cceeff;
}
</style>

