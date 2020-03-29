//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    logosrc:'../../image/logo.png',
    adrimg:'../../image/icon-address.png',
    clockimg: '../../image/icon-clock.png',
    phoneimg: '../../image/icon-phone.png',
    jtimg: '../../image/icon-jt.png',
    picimg: '../../image/icon-pic.png',
    imgUrls: [
      '/image/1.jpg',
      '/image/2.jpg',
      '/image/3.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '153********', 
    })
  },
  getLocation: function (){
    wx.openLocation({
      latitude: 29.999526,
      longitude: 106.238794, 
      name:"合川区重邮移通学院",
      address:"重庆市合川区重邮移通学院",
      scale: 28
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
