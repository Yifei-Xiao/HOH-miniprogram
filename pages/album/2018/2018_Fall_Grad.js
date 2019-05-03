// pages/album/xunguang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUt0ZNEbW9A6bPOpb4446HibVETflPYZAmU6xTEVDIibql0TSArfiallW8IQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUtyTP8IG0ibGKHyl8q6iaExJtr7O6gibyNC2RC8RIMv8GqJib3CfaLlQhOmw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUtUBeicaQtibXS6YShvRTLZVmreRW4TqXBJD7ogEzc6C6MVfZ5J4esNAhQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUt8hhy5YrrqTcfULjkq9f44KupVibNc17icaRdaK4UPWnE6DyuqkQLx9Dw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUtySaHicdDhvQvMGmJNYhWjLCBUlMqTLTbddYeXht53vcHuYCq7wEEtMg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUthcXHLyicNlEhD5lXaVN2zzialjntE8n5JaoyMlvVPcp31cJYKEeicnfsg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUt6Dic52BS2BcXpT8oaKVB1KgkxerhAgC1VLevib0fSbs4ptGs4SkNKWtg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUtnfQShaYj3xIbyjOtokxZgiat3micVjnp6ELibkF0cb5tkwSMr23icsnHBA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUtty89uTBfjJEszQcFt7Cj7iaQOuldoecwr2Ev9hujU0b7SIhEafBe8rQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUtUvRkzfe5Q5SypWTzBSgGLIvFs2sqO8cvib1mgsqDfS0BVT1g9pmHqjQ/0?wx_fmt=jpeg']
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