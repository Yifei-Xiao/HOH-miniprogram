Page({

  /**
   * 页面的初始数据
   */

  // 请在data img里面放照片链接
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSVRaMDPvwnoiaDM54zzfnXYovUnFYOYtzMibicEqNibibhKhEeicJ2xREuFQg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSXvUwXWAL9M5ZhBLIdnec83s12iaINXvzsMqvd7Oux5e4EKucR4V1W6Q/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSn6y9dEEeU9UtjbrxROjnee96alm5HoVycqcgfrpD6A6cvT4LuABoQA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSoicAibcDibYdP1yQXgIfdAlmF7cYMH3XTjL2EFTriagGNkiaOFv8G3TFhNg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNS6WX37uKRY8AGibabug1DaZXDLhQ66AgHGvYEWkvsribUGOfgr1BS1EPg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSle0PxaKqsNtrrFHh6oxaiaU1GyZ0tYWnwDUy1FNZEeEMExxxJavEgIg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSibhId7aRGFia2viblwZXv6fYZxRB0JuyMeptfPUxo7duiaB0ictYeEibE73g/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSbaK9cAT1icm0b3sVevcULgdBSJBzMZrYKlMd5DibmWmHjKOKNJe9mNsA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSUB9iaJ9xqIZRs0mhbSQYENlB2OWEce0vQWePwGzwMwYeYojkIt7fc6A/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSl718hLiakFsaicaroaBfALZjtQzLWicvI0QHAXzo2HG7mftY7dNzdCJAQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSf9NL9Ghc0n27sOicicNLoCKibQnz48iaqN4JVIQ2RFPcN3oVPK1YzTcrnQ/0?wx_fmt=jpeg','https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXuA4UXkaICvff8HJPxMDNSklnpic0vqIkWPKNd30paW8hWUpvVQqA8hELlPf707Fjt2hsb8IYC97w/0?wx_fmt=jpeg']
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