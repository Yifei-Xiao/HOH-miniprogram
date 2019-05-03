Page({
  data: {
    mode: "scaleToFill",
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUUmJykev6AdK1j0RD2Qg7aG4ibKjHboPgejEL4N0QVchJKSfjItGyNmhuxI0G1QKbgkKVxpuBMkMHw/0?wx_fmt=jpeg']
  },

  onTapBanner(event){
    let Url = event.target.dataset.postId;
    wx.navigateTo({
      url: '/pages/' + Url + '/' + Url,
    })
  },

  onTapShopping(){
    wx.navigateTo({
      url: '/pages/shopping/shopping',
    })
  },
  onTapLocation(){
    wx.navigateTo({
      url: '/pages/location/location',
    })
  },
  onTapAboutUs(){
    wx.navigateTo({
      url: '/pages/aboutUs/aboutUs',
    })
  },
  onTapContact(){
    wx.navigateTo({
      url: '/pages/contactUs/contactUs',
    })
  },
  onTapEvent(){
    wx.navigateTo({
      url: '/pages/event/event',
    })
  },
  onTapReview(){
    wx.navigateTo({
      url: '/pages/review/review',
    })
  },
  onTapImage(){
    wx.previewImage({
      urls: this.data.img
    })
  },
  onTapAlbum(event){
    let Url = event.target.dataset.postId;
    wx.navigateTo({
      url: '/pages/album/' + Url,
    })
  }
})