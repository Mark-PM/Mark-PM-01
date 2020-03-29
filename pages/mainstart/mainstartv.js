//index.js
Page({
  data: {
    nameNo: '',
    password: '',
    passlog:'../../image/key.png',
    mainht: '../../image/loginLog.jpg',
    namelog: '../../image/name.png',
  },

  // 获取输入账号
  nameNoInput: function (e) {
    this.setData({
      nameNo: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    if (this.data.nameNo.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      // 这里修改成跳转的页面
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
    }
  }
})
