// pages/album/xunguang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUULeFdjooyzgjjscGbBVpXWNBlL0icTofbSoAWjqicS3P0qp3NeO4TLzbSsG5lES2rtY8icla62ibib3Ww/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUULeFdjooyzgjjscGbBVpXWeYlKzBqWF6rbG7N1s0Q8mBzsodPwdia5213KicLdNdx9F5ajMPicUlLtw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUULeFdjooyzgjjscGbBVpXWJG24ke0ia8tGLXS9pmiarp6NeVH52lJURtOjSuwBzoKuhO4dhFU3wJVA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUULeFdjooyzgjjscGbBVpXWndHj8x3FiakdQU6ovBVibW6bmdfjmTf0N7HGCPVk5SmG0jLhsyU6tp5A/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUULeFdjooyzgjjscGbBVpXWq6UDcVwLpv63tshsLlCfTKQnueFhFDPeYZhETYBFhSA2DnH6a1TDkg/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUULeFdjooyzgjjscGbBVpXW39ptedy0VaMYicUxZLykwYnuibAFw6YxDuh7YzPbYTnAwEJvuufgNvFw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUULeFdjooyzgjjscGbBVpXWQYjpct38Y4ejLpwDOJ4tHrnU0F9qbw06Y3ibLJLiaWbWLEUW1VYmOatQ/0?wx_fmt=jpeg']
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