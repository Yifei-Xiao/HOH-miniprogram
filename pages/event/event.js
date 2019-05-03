Page({
  data:{
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUmJykev6AdK1j0RD2Qg7aG4ibKjHboPgejEL4N0QVchJKSfjItGyNmhuxI0G1QKbgkKVxpuBMkMHw/0?wx_fmt=jpeg']
  },

  onTapbaoming(){
    wx.previewImage({
      urls: this.data.img,
    })
  }
})
