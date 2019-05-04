
Page({
  data: {
    target: ["考研", "期末不挂科", "英语六级", "其他"],
    color: [
      { bgColor: '', textColor: '' },
      { bgColor: '', textColor: '' },
      { bgColor: '', textColor: '' },
      { bgColor: '', textColor: '' }
    ],//设置学习目标背景颜色
    showLoginMark: false,//是否展示登陆的按钮
  },

  onLoad: function () {

    // const that = this;
    this.isHave();
  },
  // 判断是否有这个用户
  isHave() {

  },
  // 用户授权登录后获取的信息
  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    if (e.detail.userInfo == undefined) {//用户不允许公开他的昵称信息

    } else {//用户允许公开他的信息

    }
    this.setData({
      showLoginMark: false,
    })
  },
  // 设置所选标签的背景色
  setColor(ev) {
    // console.log(ev.currentTarget.dataset.index);
    var index = ev.currentTarget.dataset.index;
    var temp = [];
    for (var i = 0; i < this.data.color.length; i++) {
      temp[i] = { bgColor: '', textColor: '' };
    }
    temp[index] = { bgColor: 'rgb(123,186,255)', textColor: 'white' }
    this.setData({
      color: temp
    });
  },
  // 设置所选标签的背景色
  setColor2(ev) {
    // console.log(ev.currentTarget.dataset.index);
    var index = ev.currentTarget.dataset.index;
    var temp = [];
    for (var i = 0; i < this.data.color2.length; i++) {
      temp[i] = { bgColor: '', textColor: '' };
    }
    temp[index] = { bgColor: 'rgb(123,186,255)', textColor: 'white' }
    this.setData({
      color2: temp
    });
  },
  // 跳转到下个页面
  nextPage() {
    console.log("test");
    wx.createSelectorQuery().selectAll('.targetChoice').boundingClientRect(function (dom) {
      console.log(dom);
    }).exec();
    // return;
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
})