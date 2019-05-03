Page({
  // 2017
  onTapbigEvent() {
    wx.navigateTo({
      url: '/pages/album/2017/bigevent',
    })
  },
  onTapModal() {
    wx.showModal({
      title: '提示',
      content: '都在“2017心家大事件”里面啦！'
    })
  },

  // 2018
  onTapModal2() {
    wx.showModal({
      title: '提示',
      content: '没有照片哦~',
    })
  },
  onTapxunguang(){
    wx.navigateTo({
      url: '/pages/album/2018/xunguang',
    })
  },
  onTapwedding() {
    wx.navigateTo({
      url: '/pages/album/2018/wedding',
    })
  },
  onTapgrad() {
    wx.navigateTo({
      url: '/pages/album/2018/grad',
    })
  },
  onTapgame(){
    wx.navigateTo({
      url: '/pages/album/2018/gameNight',
    })
  },
  onTapBBQ() {
    wx.navigateTo({
      url: '/pages/album/2018/2018BBQ',
    })
  },
  onTapCornMaze(){
    wx.navigateTo({
      url: '/pages/album/2018/2018CornMaze',
    })
  },
  onTapHalloween() {
    wx.navigateTo({
      url: '/pages/album/2018/2018Halloween',
    })
  },
  onTap2018FallGrad() {
    wx.navigateTo({
      url: '/pages/album/2018/2018_Fall_Grad',
    })
  },

  // 2019
  onTap2019Spring_Fest() {
    wx.navigateTo({
      url: '/pages/album/2019/Spring_Fest',
    })
  },
  onTapDianran() {
    wx.navigateTo({
      url: '/pages/album/2019/Dianran',
    })
  },
  onTap2019SpringGrad() {
    wx.navigateTo({
      url: '/pages/album/2019/2019_Spring_Grad',
    })
  },
});
