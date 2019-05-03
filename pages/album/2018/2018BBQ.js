// pages/album/xunguang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhn5LyUOEFvkmavoCBBS8oPVm458hSbE8IibQWN5r2NicbiaVK9nicHcEWFQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhSQZJ88rfQvibsaaicmOnmUicfqFNx50PDW5cTPBZ9BIUNmpib8ibJTYWy4Q/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhuDkO6dzIlPkWFwolbcOb5xbXv5Zx7Rq72MWnW2aN6Y4GebUukjKiacw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhO7qnGsCryRW7I8xPY8k2QDtk8Njb41dtHnVTSJsP2MJ8VJCfDs1MjA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhO1BgHkrPqiac2SvmJS0Dic1AetbVZClF4cgEZakgPddMvn0hcM1lk2HA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhJvgrZsAIF3IibD2pD4W6pkzY355w7qtkKAa6BVAN7fpicHqmGCicA0ekg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lh7TVFhVwB1ibvwRSGibs4BAH4KKXJiaZ9Pw50qbFGRk9R6X3TosWqPuIicA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhMl0D78TLD4xOdH1VuqeqPK4c2qq4Wpkic6kAbeib3qDVJCCmXV9WAhFg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lha1lKREEOhzpa4cIXMqX5EJ8764hHTEKyfsYbSprfwKXzvsHTsSsia5Q/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhc42Zfpbo97JsbELvcCu9qficJpGavicwOjdKebhga7E1icA39VfiaHXMWg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lh7381XlT94OcibYxejelKyEd6qPMsNfnqqHjI4WOTyziceWxI7RpAdF3w/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhpiaFDKOHvaTAP958REIE5iaibmZiaq9Ygpb8AJzbodeQgkondGKMnDjrgw/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhqG8pRkvNcrg7KjdtZpRuBMiaNC4ns5cibkAolWzwZIjia4lUeX8coIgJg/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhu8Xw5wztYCB2rVvKmmplSwkYuZgEEj6xichrVuWzsYkiad4ZFsuurHqQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhM6QlibT0lGkfKtZlOW7avvxnQG8pxWiaWzZH6fUPVU8bAaPeH8TXwNug/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWOhnXNJdQiciacwUHpfNs9lhNNkQPiaFlTsroWicK4OaPhK0vLkmx5nrW6VbZNJlyyJqeaezPpqQ9Dibw/0?wx_fmt=jpeg']
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