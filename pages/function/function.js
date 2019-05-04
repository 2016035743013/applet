// pages/function/function.js
const api = require('../../tools/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coin: -1,//商城金币数量
    duanweiName:'1',//段位名
    duanweiImg: '1',//段位图片
    duanweiNum: [],//第一个数字代表n颗心是亮的，第二个数字代表显示m颗星
    duanWei: -1,//排名
    studyTime:{hour: '1',min: '1'},//学习时间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    // console.log(api);
    const that = this;
    api.getFunction(function(res) {
      console.log(res);
      var data = res.data.msg;
      that.setData({
        coin: data.coin,
        duanweiImg: data.duanWei.duanWeiImg,
        duanweiName: data.duanWei.duanWeiName,
        duanweiNum: data.duanWei.duanWeiNum,
        ranking: data.ranking,
        studyTime: data.studyTime
      })
    })
  },

 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})