// pages/guide/guide.js
var api = require('../../tools/api')
Page({
  //TODO 改用户的openId
  /**
   * 页面的初始数据
   */
  data: {
    targetArr:{
      '1':{
        target:'四六级',
        date: ['2019', '06', '15']
      },
      '2':{
        target:'计算机二级',
        date: ['2019', '06', '01']
      },
      '3':{
        target:'教资',
        date: ['2019', '11', '02']
      },
      '4':{
        target:'考研',
        date: ['2019', '12', '22']
      },
      '5':{
        target:'考公',
        date: ['2019', '12', '22']
      },
      '6':{
        target:'软考',
        date: ['2019', '05', '25']
      },
    },
    title: ['选择你的学习目标', '输入学习口号', '是否授权用户数据'],
    currentTab: 0,

    //要发送的数据
    target: '',
    date: [],
    slogan:'',
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前时间
    var newDate = new Date();
    var year = newDate.getFullYear()
    var month = this.formatNumber(newDate.getMonth() + 1)
    var day = this.formatNumber(newDate.getDate())
    this.setData({
      date: [year, month, day]
    })
  },

  //工具方法：格式化数字
  formatNumber: function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },

  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },

  /**
   * 点击下一步
   */
  next: function () {
    this.setData({
      currentTab: this.data.currentTab + 1
    })
  },

  /**
   * 点击目标
   */
  targetTap: function (e) {
    var id = e.target.id
    var target = this.data.targetArr[id]
    this.setData({
      target: target.target,
      date: target.date
    })
  },

  /**
   * 点击更改日期
  */
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value.split("-")
    })
  },

  /**
   * 输入内容时触发
   */
  inputBindBlur: function(e){
    var item = e.target.id
    if(item=='target'){
      this.setData({
        target : e.detail.value
      })
    }else if(item=='slogan'){
      this.setData({
        slogan : e.detail.value
      })
    }
  },
  bindgetuserinfo: function(e){
    console.log(e)
  },
  /**
   * 点击授权按钮
   */
  submit: function(){
    var that = this
    wx.getUserInfo({
      success(res){
        that.setData({
          userInfo:res.userInfo
        })
        that.upload()
      }
    })
  },

  /**
   * 点击跳过按钮
   */
  skip: function(){
    this.upload()
  },

  /**
   * 上传数据
   */
  upload: function(){
    var that=this
    var data={
      openId:api.openId,
      userInfo:that.data.userInfo,
      target:that.data.target,
      slogan:that.data.slogan,
      targetTime:that.data.date
    }
    api.userUpdate(data,function(res){
      console.log(res)
      if(res.data.result=='success'){
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})