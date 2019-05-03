// pages/album/xunguang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIG7jJslquWCXAy51ZGS0a0NIIKYgDppyLnB7KYCDraB9biaMrjXhf6bsw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIGX0kMeYyibhz88sgZnjOUKZ8yQLibV5Z6soEIK0HOic1khl8lNryJo6HuQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIGlqg5eAdzrNqNEIgzsVZWI43ypZcML2iaic6QAhzwngbTqzIpjF4qagLA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIGH2DXNI4asibdmPg5LGVur8pRuDMBoq7oJeYrU5qHXoClANBQGSUnsZg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIG6Vicca1enJq7tXiaubqo3O1icWpJDOT42v8bmzGbdmF6iau8gogEcbjnLA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIGiawk1IUMjQdSxVSM9KSrtSw7zTtduagQcEgk9A9ibQ4zm1MUYJDIhkWg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIGLZLkndUwccrj3okqMpIYBdliaYhLwicmZvNtEBiczdza4jH9AuTkDdcjg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIGByhj852X61MqZwicaXuRvlkPCRjnYCrTgQSKAnrTsaO1qWDI2eCJCibg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIGoHsmEkLlfLMDQSPckyh8XASN408IABCIeibD9B51XZ4VjOoCdIKXrvg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIGrEicfXoAfOT5TpaFBJs8bdfaEaB6M2ZspDsBaJnCRiaayX6jzF3nYPvg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWKS3OJFSzRjLuhk2UppzIG36s1bZXjgmo7Bo6r0mCXueAzf6vaP70S777m8eRV6oY7GxItd2PmUA/0?wx_fmt=jpeg']
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