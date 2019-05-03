// pages/album/xunguang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IKRoRrw9IYP3bXicMzFjbibDFOnUwc76uL6aOUnAzoA7njXTrLm2s0P6A/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IQoyb8m65NsbYRDKByYpAKdibh6mcPISWZazu7MZH7mP5sHCicXrtCT6Q/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IKibJjCT65253DUdHgJT6qxY3CQa5eBoOCSib0Mtot0DOvE2ib0B3m6FEg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3Ij0ZLt6AswTlueRgtTtcOYRcQa3Dgpia2rEjgkfeOvPSV74Eb46jtHEw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IPQ5IYkas1fib1AicDFWL7Ihl33KWS7lJ1Un2u2O40CxuJ2qYM70714RA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3I2D3StKpiaAWPyibc7piaKdQaic4sExNdvm65ScKF8RrJDMu9JlYP7MiabyQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IRUx4wiacSlYY9icKxKdDy0cf6gsUkmNLicMAqkUrq7axRIuqStLwxN1dQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IiaSGl7HBdxvj5wC7EGhYOJOLPtpZhichAiauGFvr8dqNyfO3xqVKcENQg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3I6hYSJ8lc3VbgZLHibC5TyoCmvjPn7srbErIJU6A69Ys4Vn25weEgcZg/0?wx_fmt=jpeg']
  },

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.img // 需要预览的图片http链接列表
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