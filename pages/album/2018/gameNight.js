// pages/album/xunguang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOlfYE0VjtHicL1V5xa2kxWuvnhD08AhmK4mgds5tI363xRtVWeDQlhzCNqEQHugL6uXbkibyyAMPg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOlfYE0VjtHicL1V5xa2kxWFIjdM78gWG33HhUSSpIPyGlqJRcwFLDqcrjMmR93RKCXrDWuwaA7Jw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOlfYE0VjtHicL1V5xa2kxWKbnSh9aSEMWtQq1OhS7icviaZ7QJOpYo7iawrzjQZlJrx2e7DfEuPfpqw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOlfYE0VjtHicL1V5xa2kxWNDzG4flEJGO1NKGib8h9lNEF8n0D869OXbclZal16H4UbR52GNZ9gCg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOlfYE0VjtHicL1V5xa2kxWmXwScYGicIicOmxhFcClGkJQbQfTRdDbyg0MPiaukOxVicEqkfgCMJKrNQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOlfYE0VjtHicL1V5xa2kxWjWCLiaic8kM0fq05ybSNB8G2YGiabyb8XqrIF5V4Peib70uWibagWoz94TQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOlfYE0VjtHicL1V5xa2kxWs0MZnObJhd8UPxjpWrN9jpZKqJFEPmtcOSHENQ8HAaJxrLzjYrLo8A/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOlfYE0VjtHicL1V5xa2kxWLTPkcKgCwU2ibp8xicuNAwaS25oRicnbADOAEDydJZwXlnT1ibR8HVGN1A/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXOlfYE0VjtHicL1V5xa2kxWT2GvSy64LruicGgdoic6PSduJAkBLHibGhbDa0OdMqREK2soneqXciaBEA/0?wx_fmt=jpeg']
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