Page({
  data:{
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUmJykev6AdK1j0RD2Qg7aG4ibKjHboPgejEL4N0QVchJKSfjItGyNmhuxI0G1QKbgkKVxpuBMkMHw/0?wx_fmt=jpeg']
  },

  onTapSignUp(){
    // wx.previewImage({
    //   urls: this.data.img,
    // })
    wx.navigateToMiniProgram({
      appId: 'wxfaa08012777a431e',
      path: '/pages/detail/detail?eid=5d68815b0eb18ea240a411b8',
      // extraData: {
      //   foo: 'bar'
      // },
      // envVersion: 'develop',
      // success(res) {
      //   // 打开成功
      // }
    })
  }
})
