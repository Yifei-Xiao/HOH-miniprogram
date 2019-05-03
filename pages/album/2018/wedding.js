const txvContext = requirePlugin("tencentvideo");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IrbNF7AZ40Rl6ZKtNIW8nSyC2uc7jfMKEjum1k4qC7cibicvhGXa0Kqag/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3I9uNmiaBQdf0T9uOiaDML3UUsvALklo0Ld30ribS5ibvXbIibbD9HhGM5X6w/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IBy7scx7CBtIseKiccvnHOp1EAUzVSasyqpyNhMpBiaVfibD6XTZ4d1p0w/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IiaEQkuzB5nicabFRDQ9M6sAKYlBSjA7WTtmCPJ9qdcoKTDAdQJUPGEsA/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3IXzfNAluzVF5STibZb7UwnO9aUsOWGDjyPriaElJz5onXiaj3qoiaalgOIw/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3I6GlrNto78BE1Rg0KMdTib8RLYE8uayrucSAx9F0PRBxA73LCGSeerkg/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3Iab4DewCmSialfNIoocY4zMrHN241uBVhicyzONicbSvjBMbFv9b1T8Qtw/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3Il2k3FfTPNCynAXib3qaHu3jOE9pkoZo9xrg03c8ckNdmPyia6sLrw3GA/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3Iy63giczvMaqew5x3snHQTHXwoKBib9XG3sBxbT6LXGaKJpqPBS4pbK1A/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/8qu48ghsbUXOqjFJ6nApRP1K8W61HD3I57ibx42dL3abrjIePbm1RKMEkAXzQqlKMbSxe8MBorakHXONatOVoVw/0?wx_fmt=png'],
    tvphide: false
  },

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.img // 需要预览的图片http链接列表
    })
  },

  onLoad: function (query) {
    console.log('single onload=====================');
    this.txvContext = txvContext.getTxvContext('txv1');
  },
  onUnload() {
  },
  createVideo: function (vid) {
  },

  hide: function () {
    this.setData({
      'tvphide': true
    })
  },
  show: function () {
    this.setData({
      'tvphide': false
    })
  },
  play: function () {
    this.txvContext.play();
  },
  pause: function () {
    this.txvContext.pause();
  },
  requestFullScreen: function () {
    this.txvContext.requestFullScreen();
  },
  exitFullScreen: function () {
    this.txvContext.exitFullScreen();
  },
  playrate: function (e) {
    this.txvContext.playbackRate(+e.currentTarget.dataset.rate);
  }

})