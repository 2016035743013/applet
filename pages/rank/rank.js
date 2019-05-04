
const api = require('../../tools/api.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankText: ["周排行", "日排行", "月排行"],
    rankTextStyle: [
      { fontSize: 32, color: 'rgb(217,235,255)' },
      { fontSize: 40, color: 'white' },
      { fontSize: 32, color: 'rgb(217,235,255)' }
    ],
    // myRankInfo:{hours:22,minutes:22,image:'../../images/head.jpg',rankNum: 1},//我的等级的信息
    myRankInfo: [],//用户自身的等级信息
    listInfo:[
      { hours: 22, minutes: 22, image: '../../images/head.jpg', name:"张三"},
      { hours: 22, minutes: 22, image: '../../images/head.jpg', name:"张三"}, 
      { hours: 22, minutes: 22, image: '../../images/head.jpg', name:"张三"},
      { hours: 22, minutes: 22, image: '../../images/head.jpg', name:"张三"},
      { hours: 22, minutes: 22, image: '../../images/head.jpg', name:"张三"},
    ],//排名表各个用户的信息

    cupImages: ["../../images/first.png", "../../images/second.png", "../../images/third.png"],//奖杯的信息
    currentRank: 1,//排行榜的切换 0代表周排行  1代表日排行 2代表月排行
    rankInfo: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showTabBar();
    const that = this;

    api.getRank(function(res) {
      var data = res.data.msg;
      console.log(res.data);
      var temp = [], temp2=[];
      // 用户个人的信息
      temp.push(data.dailyRanking.splice(0, 1)[0].me);
      temp.push(data.monthlyRanking.splice(0, 1)[0].me);
      temp.push(data.weeklyRanking.splice(0, 1)[0].me);


      // 月排行榜的信息
      for (var item in data.monthlyRanking) {
        var rankTemp = [];
        for (var i in data.monthlyRanking[item]) {
          rankTemp.push(data.monthlyRanking[item][i]);
        }
        temp2.push(rankTemp);
      } 
 // 日排行榜的信息
      for(var item in data.dailyRanking) {
        // console.log(data.dailyRanking[item]);
        var dailyTemp = [];
        for(var i in data.dailyRanking[item]) {
          console.log(data.dailyRanking[item][i]);
          dailyTemp.push(data.dailyRanking[item][i]);
        } 
        temp2.push(dailyTemp);
      } 

     
 // 周排行榜的信息
      for (var item in data.weeklyRanking) {
        // console.log(data.dailyRanking[item]);
        var weekTemp = [];
        for (var i in data.weeklyRanking[item]) {
          console.log(data.weeklyRanking[item][i]);
          weekTemp.push(data.weeklyRanking[item][i]);
        }
        temp2.push(weekTemp);
      } 
      
      that.setData({
        myRankInfo: temp,
        rankInfo: temp2
      },function( ){
        console.log(that.data.rankInfo);
      });

    })
  },
  clickListener: function(e){
    var index = e.currentTarget.dataset.index;

    this.setData({
      currentRank: index
    })

    this.changeTextStyle(index);

    var temp= [];
    if (index==0){//周排行
      temp = [
        { hours: 11, minutes: 11, image: '../../images/head.jpg', name: "李四" },
        { hours: 11, minutes: 11, image: '../../images/head.jpg', name: "李四" },
        { hours: 11, minutes: 11, image: '../../images/head.jpg', name: "李四" },
        { hours: 11, minutes: 11, image: '../../images/head.jpg', name: "李四" },
        { hours: 11, minutes: 11, image: '../../images/head.jpg', name: "李四" },
      ]
    }else if(index==1){//日排行
      temp = [
        { hours: 22, minutes: 22, image: '../../images/head.jpg', name: "张三" },
        { hours: 22, minutes: 22, image: '../../images/head.jpg', name: "张三" },
        { hours: 22, minutes: 22, image: '../../images/head.jpg', name: "张三" },
        { hours: 22, minutes: 22, image: '../../images/head.jpg', name: "张三" },
        { hours: 22, minutes: 22, image: '../../images/head.jpg', name: "张三" },
      ];
    }else if(index==2){//月排行
      temp = [
        { hours: 33, minutes: 33, image: '../../images/head.jpg', name: "王五" },
        { hours: 33, minutes: 33, image: '../../images/head.jpg', name: "王五" },
        { hours: 33, minutes: 33, image: '../../images/head.jpg', name: "王五" },
        { hours: 33, minutes: 33, image: '../../images/head.jpg', name: "王五" },
        { hours: 33, minutes: 33, image: '../../images/head.jpg', name: "王五" },
      ];
    }
    this.setData({
      listInfo: temp
    })
  },


  // 改变字体的样式
  changeTextStyle: function(index) {
    // 改变字体的样式
    var temp = [];
    for (var i = 0; i < this.data.rankText.length; i++) {
      temp[i] = { fontSize: 32, color: 'rgb(217,235,255)' };
    }
    temp[index] = { fontSize: 40, color: 'white' };
    this.setData({
      rankTextStyle: temp,
    });
  },

  // 排行班滚动切换的监听
  bindchange: function(e) {


    var index = e.detail.current;
    this.changeTextStyle(index);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})