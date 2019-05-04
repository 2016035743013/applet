// pages/store/store.js
const api = require('../../tools/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    addEditShow: false,//编辑和添加面板的显示和隐藏
    editAndDelShow: true,//编辑和删除按钮面板的显示和隐藏
  },
  // 编辑和删除按钮面板的显示和隐藏
  editAndDel: function() {
    this.setData({
      editAndDelShow: !this.data.editAndDelShow
    })
  },

  // 编辑按钮的点击
  editAndAdd: function(e) {
    var flag = e.currentTarget.dataset.flag;
    wx.navigateTo({
      url: "/pages/store/addEdit/addEdit?addOrEdit=" + flag,
    })
  },

  // 删除按钮的点击
  del: function() {
    wx.showModal({
      title: '提示',
      content: '请问确定删除该商品吗？',
      success: function(res) {
        // console.log(res); 
        if(!res.cancel) {//确定删除
          console.log('确定删除')
        }
      }
    })
  },

 
  // 预览
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({

      current: current,
      urls: this.data.imageList
    })
  },
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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