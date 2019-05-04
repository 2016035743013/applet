const baseUrl = 'http://yun.iaoe.xyz';
var openId = 'o8CVp5CJjHjnV29pkYQb_1UdfgYo';
// 数据请求
function apiRequest(option) {
  console.log(option);
  wx.request({
    url: baseUrl + 　option.url,
    method: 'post',
    async: option.async,
    data: option.data,
    success: function (res) {
      option.callback(res);
    }
  });
}

// 判断用户是否已经创建了
function userIsCreate(option, callback) {
  var data = {
    data: option,
    url: '/user/userOrCreate',
    callback: callback
  }
  apiRequest(data);
}

// 用户登录判断是否已经存在需要请求这个接口   用户更改信息也需要这个接口
function userUpdate(callback) {
  var data = {
    data: { openId: openId },
    url: '/user/updateUser',
    callback: callback
  }
  apiRequest(data);
}

// 获取排行的信息
function getRank(callback) {
  var data = {
    data: {openId: openId},
    url: '/study/ranking',
    callback: callback
  }
  apiRequest(data);
}
// 获取用户的信息
function getUserInfo(callback) {
  var data = {
    url: '/page/index?openId=' + openId,
    callback: callback
  }
  apiRequest(data)
}
// 获取段位信息
function getFunction(callback) {
  var data = {
    url: '/page/function?openId=' + openId,
    callback: callback
  }
  apiRequest(data);
}


module.exports = {
  userIsCreate,
  userUpdate,
  getRank,
  getUserInfo,
  baseUrl,
  openId,
  getFunction

} 