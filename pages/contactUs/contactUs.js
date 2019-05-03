Page({
  data: {
    imgalist: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUWnpESar9QCQmCDRfIHGSBza62sR0NHic2QnLYAZYkeqIOSILCMCiacdicpb22RIk4uNRhpFIgUOyZRQ/0?wx_fmt=jpeg',
    ]
  },
	/** 
	 * 预览图片
	 */
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      urls: this.data.imgalist // 需要预览的图片http链接列表
    })
  }
})