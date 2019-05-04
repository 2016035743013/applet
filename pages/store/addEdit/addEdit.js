// pages/store/addEdit/addEdit.js
const api = require('../../../tools/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addEdit: '添加商品',
    addEditText: '添加',
    coins: 20,//添加的每件商品的金币数量
    imgPath: '',//图片的路径名
    goods: 'dd',//商品名称
    imageList: [],//预览图片

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (options.addOrEdit == '1') {
      this.setData({
        addEditText: "编辑",
        addEdit: '编辑商品'
      });
    }
  },
  // 加金币
  add: function () {
    var temp = this.data.coins;

    this.setData({
      coins: temp + 1
    })
  },
  // 减金币
  cut: function () {
    var temp = this.data.coins;
    if (temp == 0) {
      temp = 1;
    }
    this.setData({
      coins: temp - 1
    })
  },
  // 选择本地图片
  chooseImage: function () {

    var that = this;
    console.log('aaaaaaaaaaaaaaaaaaaa')

    wx.chooseImage({
      count: 1,//最多可以选择的图片总数
      success: function (res) {
        console.log('ssssssssssssssssssssssssss')
        //缓存下 
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 2000,
          success: function (ress) {
            console.log('成功加载动画');

          }
        })

        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
        //获取第一张图片地址 
        var filep = res.tempFilePaths[0]

        that.setData({
          imgPath: filep
        })
      }
    })
  },

  // 获取商品名称
  getGoods: function (e) {
    console.log(e);
    this.setData({
      goods: e.detail.value
    });
  },
  // 删除图片
  delImage: function () {
    this.setData({
      imgPath: ''
    });

  },
  // 添加提交
  submit: function () {

    if (this.data.goods == '') {
      wx.showToast({
        title: '请输入商品名称',
        icon: 'none'
      })
      return;
    }
    var data = {
      openId: api.openId,
      goods: this.data.goods,
      coin: this.data.coins
    }
    console.log(data);
    console.log(this.data.imgPath);

    wx.uploadFile({
      url: api.baseUrl + '/store/addGoods',
      filePath: this.data.imgPath,
      name: 'img',
      formData: {
        openId: api.openId,
        goods: this.data.goods,
        coin: this.data.coins
      },
      success: function (res) {
        console.log('成功')
        console.log(res)

      }, fail: function (err) {
        console.log(err)
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})