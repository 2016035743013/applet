// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasks: [],

    canvasWidth: 0,//画布的宽度
    canvasHeight: 0,//画布的高度
    inputText: '',//输入框的值
    userName: 'cjchj',//用户名
    studyTime: 25, //今日学习的时间
    tasks: [
      { content: '我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是' }, 
      { content: '我是任务' }, 
      { content: '我是任务' }, 
      { content: '我是任务' }, 
      { content: '我是任务' }, 
      { content: '我是任务' }, 

    ],//每日任务
    tasks2: [
      { content: '我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务我是任务' },
      { content: '我是任务' },
      { content: '我是任务' },
      { content: '我是任务' },
      { content: '我是任务' },
      { content: '我是任务' },

    ],//任务
    task3: [
      { content: '我是任务' },
      { content: '我是任务' },
      { content: '我是任务' },
      { content: '我是任务' },
      { content: '我是任务' }

    ],//完成的任务
    showBtns: false,//排照，每日任务添加按钮，额外任务添加按钮  的显示和隐藏
    animation: '',//添加按钮的动画
    showBtn: 0,//每日任务编辑和删除按钮的显示和隐藏
    showBtn2: 0,//任务编辑和删除按钮的显示和隐藏
    addOrEdit: '添加',//编辑任务 和 添加任务 的文字切换
    actionPanelToggle: true,//添加和编辑任务面板的显示和隐藏
    taskName: '',//任务名称
    taskComment: '',//任务备注
  },


  // 监听输入框的焦点
  inputBlur: function (event){
    if(event.detail.value == ""){
      return;
    }
    this.setData({
      inputText:""
    })
    // 添加任务
    var temp = this.data.tasks;
    temp.push(event.detail.value);
    this.setData({
      tasks: temp
    });
  },
  // 任务开始
  startTask: function(event) {

    
    // 跳转页面附带任务数据
    wx.reLaunch({
      url: '/pages/taskStart/taskStart?task='+event.currentTarget.dataset.task,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    // 加号按钮的动画
    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    });
  },

  // 长按每日任务进行编辑和删除
  editAndDel: function(e) {
    console.log('显示和隐藏编辑和删除按钮');
    var showbtnIndex = e.currentTarget.dataset.showbtn;
    console.log(showbtnIndex);
    this.setData({
      showBtn: showbtnIndex,
    })
  },

  // 长按任务进行编辑和删除
  editAndDel2: function(e) {
    var showbtnIndex = e.currentTarget.dataset.showbtn;
    console.log(showbtnIndex);
    this.setData({
      showBtn2: showbtnIndex,
    })
  },

  // 每日任务和任务的删除
  del: function(e) {
    console.log(e.currentTarget.dataset);
    wx.showModal({
      title: '提示',
      content: '确认删除该任务吗？',
      success: function(res) {
        console.log(res);
        if(!res.cancel) {
          console.log('删除');
        }
      }
    })
  },
  // 每日任务和任务的编辑
  edit: function(e) {
    console.log(e.currentTarget.dataset);
    this.setData({
      actionPanelToggle: true,
      addOrEdit: '编辑'
    })
  },

  // 点击加号按钮显示和隐藏 三个按钮
  btnsToggle: function() {
    var temp = !this.data.showBtns;
    
    console.log(temp);
    if(temp) {
      this.animation.rotate(135).step();
    } else {
      this.animation.rotate(0).step();
    }
    
    this.setData({
      animation: this.animation.export(),
    })
    this.setData({
      showBtns: temp
    })
  },
  checkChange: function(e) {
    console.log(e);
  },
  // 打开相机
  openCamera: function() {
    console.log('打开相机');
  },

  // 添加每日任务
  addDailyWork: function() {
    console.log('添加每日任务');
    this.setData({
      actionPanelToggle: true,
       addOrEdit: '添加'
    })
  },
  // 添加任务
  addExtraWork: function() {
    console.log('添加任务');

    this.setData({
      actionPanelToggle: true,
       addOrEdit: '添加'
    })

  },
  // 关闭编辑和添加任务的面板
  closePanel: function(e) {
    this.setData({
      actionPanelToggle: false
    })
  },
  // 任务面板获取任务名称
  taskNameBlur: function(e) {
    console.log(e.detail.value);
    this.setData({
      taskName: e.detail.value
    })
  },
  // 任务面板获取任务备注
  taskCommentBlur: function(e) {
    console.log(e.detail.value);
    this.setData({
      taskComment: e.detail.value
    })
  },
  // 任务编辑和添加的提交操作
  submit: function(e) {
    if(this.data.addOrEdit == '编辑') {
      console.log('编辑操作');
    } else {
      console.log('添加操作');
    }
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