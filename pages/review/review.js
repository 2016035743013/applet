// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: false,//日记和标题的样式的切换
    days: [ 'MON', 'TUE', 'WEB', 'THU', 'FRI', 'SAT', 'SUN' ],
    choseNum: 0,//选择的目前日期的下标
    currentDays: 0,//选择的目前日期的下标
    focusIndex: -1,//输入标题框的自动聚焦
    hours: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ],
    taskHistory: [1, 3, 5],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var query = wx.createSelectorQuery()
    query.select('#scrollView').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      res[0].top       // #the-id节点的上边界坐标
      res[1].scrollTop // 显示区域的竖直滚动位置
      console.log(res);
    })
    
    
   
  },

  // 日记和任务的切换
  toggle: function(e) {
    // console.log(e.currentTarget.dataset.flag);
    var flag = e.currentTarget.dataset.flag;

    if(flag == 'diary') {//日记
      this.setData({
        active: true
      })
      this.diary();
    } else if (flag == 'task') { //任务
      this.setData({
        active: false
      })
      this.task();
    }
  },

  // 日记
  diary: function() {

  },
  // 任务
  task: function() {

  },
  // 选择日期
  choseDay: function(event) {
    // console.log('选择日期');
    var num = event.currentTarget.dataset.chosenum;
    this.setData({
      choseNum: num
    })
  },

  // 选项卡手动切换
  bindchange: function(event) {
    console.log(event.detail.current % 7);
    var index = (event.detail.current - (event.detail.current % 7)) / 7;
    // console.log(index); 
    if(index <= 0 ) {
      index = 0;
    } else if(index >= 2) {
      index = 2;
    }

    this.setData({
      choseNum: event.detail.current,
      currentDays: index
    })
  },
  // 添加日记
  addEditDiary: function(e) {
    console.log('添加日记');
    console.log(e.currentTarget.dataset.focusindex);
    var focusindex = e.currentTarget.dataset.focusindex;
    this.setData({
      focusIndex: focusindex
    })
  },

  // 标题输入框失去焦点
  inputBlur: function(e) {
    console.log(e.detail.value);
  },
  textBlur: function(e) {
    console.log(e.detail.value);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})