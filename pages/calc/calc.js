Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    cards: [
      {
        id: 0,
        card_name: "Fake Love SUGA",
      },
      {
        id: 1,
        card_name: 'Fake Love J-Hope',
      },
      {
        id: 2,
        card_name: 'Fake Love RM',
      },
      {
        id: 3,
        card_name: 'Fake Love Jung Kook',
      }
    ]
  },

  /**
   * bindPicker1: 选择你想要的第一张卡
   */

  bindPicker1: function(e) {
    console.log('picker选择名称变为', e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },

  bindPicker2: function (e) {
    console.log('picker选择名称变为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindPicker3: function (e) {
    console.log('picker选择名称变为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindPicker4: function (e) {
    console.log('picker选择名称变为', e.detail.value)
    this.setData({
      index: e.detail.value
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