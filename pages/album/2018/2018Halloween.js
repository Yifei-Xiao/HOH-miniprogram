// pages/album/xunguang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26bnjk4RK7HqcfJVUaibticy5SMwa4RiauFVtfDKcxOhp52gpBWI2NktZicA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26hAxhsJ0KvxookI8f4WRKmY6VlkLMkuPGGkrEIiao4uSBPDLkzz93VbQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26f7CRKB7XGuv9icmKYdvuuvZicFa0xmlITLOdIWhr5sLDXhHL4R1PW5rw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26RbQ6OWvFMSY91dic3WjAaxmuRslLDkLo0icghtibo1icKAhvHiaFiaygSaLg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26KqCgF3RgJ9oYeqcFFJXw2kq7ubLOxAIz5w3fRLicjwvVbdEibdOE2j3w/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26ibOxjfU5emBdlx0dVvGgZd7UOpTzkhPHpdp9wbJSLRuXScwy1ZbXjvg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26K3GYknPakM0AYibZ7Nkvxho80GDawnZRuhceFMLszc8qC8AiaVPLgP4g/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26d22pXpg4KxIGURR7iaGd8UDOsYCB4sAlic8htqRjWhxyDgOUj9pTHdww/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26ndGpagPROQjBss0wqn0cZiaxHvQqve6yia4gTeyKsODbpLTbX0Uagu7Q/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26CU6D7d8qMPpweichlNjGcNxpAe7ktibprc3TNRoENec6TeaqcK233GKQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26yx5V1WDZ4jjLnJ9icJfsEm6MDjicN1OOWSJ7va2kGkEueibzWm1ryOydg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S26FkO7LRibnC2OKDyC8ibicK6odMref6VLAuTib4AyasicFxxEbiceO52ia4avg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S260wm6VlibpP0xiaiaKoib9eNr3JHUC3Xec2daO2PEiageFUvAPO8micoMqdLg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUVeoSzgP1LRuYKLa57A3S269MjoXMKdllUZB5knIoVibMGwxlOdhVkXIpmPMSo2S9a4fyZIyU81T6w/0?wx_fmt=jpeg']
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