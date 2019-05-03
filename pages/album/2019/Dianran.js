const txvContext = requirePlugin("tencentvideo");
Page({

  /**
   * 页面的初始数据
   */

  // 请在data img里面放照片链接
  data: {
    img: ['https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaWI82sfvvErfibR8dM8AMmUvuUypcm5FzAnrQia5QNqgiaHMSD42eJOS4A/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVajFibFTswMVGnld5R0ia1RaAF7HXnym4qwn60YoORb5frCcpVDE9ylPhw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaPnDw3augxeI3koVeNTj95TdTeyGDiasib266ANBNMiaVicaCuFrwicNy42g/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVal9W8U8nXibibFAYOIFlKGLndRsSr25G406XZdZ2Wu6wjdyoVXXvLtBJA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaCVEXyCuI1TTWv4m1stG0H2ZIMUCuBtfK9ibarJV8TbAiaG7algwloCQA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVahd5vXdMLVwQwX7c7ObZG8F7WEOPIUEIvM1khEs0rNscaKHn5e38wAQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVarNickEfY08rhNamUekFcHibq33lSzVQn4bapsQ6qwC8AGDYUOcPzoLhQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaDkfQmPgKUeNNQr8U63kE6VLftLKm4ngtOW1Ls38t8hbJ7w9jljkzZA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaPNHhGhOib03XddaRnL3wkcEpzZZrHGia9DaofUia1ib5ASeCwoeTAsLqDw/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVarSdRNWBfdk8EC5sh0jzwXIxPJDnibKX8SVJLc1ZsscPSttxDqSKdunA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaVaRoXricWyQVN0C4dceKkOF2WMdVVNVbEdQKkia0rlRhvmMyOoVB8iczQ/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaEwibwqqFZpcuBITyFeGRgMkgGJCUJGucSSn1V5ZRlJU2RHBM8kcBfeA/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaFvvjJLASpibtNEz1pbp54nkSINQrBTW3NIp8X2sleZ1wej7JRdRgn8g/0?wx_fmt=jpeg', 'https://mmbiz.qpic.cn/mmbiz_jpg/8qu48ghsbUXLeqc2VqkpRPIugm7QowVaxzdcRJVNJwpriaZ8P88uPvicsAsdG8XaDG0FZvFBMhvv7hCAs3UjWlPA/0?wx_fmt=jpeg'],
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