Page({

  /**
   * 页面的初始数据
   */

  // 请在data img里面放照片链接
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaIyqwFlMZKukiaSMw4t4nolnGfJglYqGCMVXomTdp4tGGuNAh2VYlF6Q/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaIDZD1Z3KAQCvGZtOUz6kt4KiaegrviaFAX9hT3Z4PqOaPnniblXPJrNibA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaeEPiaheVn4gaOwplMibTialQRHJdBweF0Ks6XXJsS7EGEGQTuiamtic8O1Q/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaiaD66LfKibvMIlh2fQplpricOU6YhDKialZntGTAzicJ5btvfxkN4hmpegA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaetCkuJG1yuHUvNEibn7Heb37UtPFW26wuUYW0cq2YXLXo3MfjDJdhMQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaqwkz7pPeOJfetiaue5AsGMjHrdLghLvDWu7lV9dNaEyrDu42FZnMkMg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVanvOaPtsZ0LWVy86wpRSTdpiaDzXcFdJ8ulUrRzhACRw7WvsPGJzpyVQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVa3xvS0YRldficqZIMHc3po13Eo2qpfHibQ0QvTEicPeKW3HZmjVKqpvyOw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVapD8duavAodyFPsTEMOsY3mnYIWT5GVnJxEOhNcibZrQJAH2anyofcsw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVax4k0kQA01XIeWJ7m6ReBXQmZiaIxw2MvLU0yAbIvV4Vco6QAsY6jSuw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaALPbdCvzfYkiaDe4J8icqEk9yOKGtVkHic4aB3iajRwpKZz9e6RevhtMFA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaalwhWS2xhBpexnVzh9vUBTOWkzbmg44vXZkLWOq5LhAAsmEFztzaZg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaBtxQkicTQHL9vPgjrX1X59fxmkpibfZUiaqRL9A7icvrAy4OPWPyX7pl9w/0?wx_fmt=jpeg','https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaiaSjdicdQ6QC6MfiaL4s75xNB4CGOlSlUtKcwyIDiaicZvY4Nib3GeTJe5bg/0?wx_fmt=jpeg']
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