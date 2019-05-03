// pages/shopping/shopping.js
Page({

  /**
   * Page initial data
   */
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXzJqicvicmeXacllIPiadPu5r74ibicGNyNpskDLGzMgBG0Cv4YIIGNzXhh4atrPpmypLmYsLUsgGMMSw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXzJqicvicmeXacllIPiadPu5rZTaMb3E1mVc07yzibOHVYU2yibxsQgaGCPiccAyl5MDGJkd4mpruULhBg/0?wx_fmt=jpeg'],
    img2:['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXzJqicvicmeXacllIPiadPu5rcCjzwnFgWyV1ozLpoibt3aRzjwmfUib6KzMxJuC76OZWhWE01ribMwmAg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXzJqicvicmeXacllIPiadPu5rDy6a2gpegF7a5M5G7iaHiaowQYT1f8INTKObBIjhUZjXVRIvZHeng6LA/0?wx_fmt=jpeg'],
    img3:
      ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUJnFCW0CtX20ibFicoEcnVUtFpVPlVmkHbiaicWfLiaUASwLOsKcQG7Q5Cibacqdd4ibrBe8ppVozoUVuoA/0?wx_fmt=jpeg']
  },

previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.img // 需要预览的图片http链接列表
    })
  },

previewImage2: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.img2 // 需要预览的图片http链接列表
    })
  },

onTapShopping: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.img3 // 需要预览的图片http链接列表
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})