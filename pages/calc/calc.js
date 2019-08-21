var cards = [
  {
    id: 0,
    card_name: ''
  },
  {
    id: 1,
    card_name: "Fake Love SUGA",
  },
  {
    id: 2,
    card_name: 'Fake Love J-Hope',
  },
  {
    id: 3,
    card_name: 'Fake Love RM',
  },
  {
    id: 4,
    card_name: 'Fake Love Jung Kook',
  },
  {
    id: 5,
    card_name: '决战时刻'
  }
]

var stages = [
  '', '6-1', '6-2', '6-4', '6-5', '6-7', '6-8', '6-9', '6-11', '6-12', '6-14', '6-15', '6-17', '6-18', '6-19'
]

Page({

  /**
   * 页面的初始数据
   */

  data: {
    index_1: 0,
    index_2: 0,
    index_3: 0,
    index_4: 0,
    cards_1: JSON.parse(JSON.stringify(cards)),
    cards_2: JSON.parse(JSON.stringify(cards)),
    cards_3: JSON.parse(JSON.stringify(cards)),
    cards_4: JSON.parse(JSON.stringify(cards)),
    stage_index: 0,
    cur_stages: JSON.parse(JSON.stringify(stages))
  },

  /**
   * stagePicker: 选择你正在面对的关卡
   */
  stagePicker: function(e) {
    console.log('选择的关卡是：', this.data.cur_stages[e.detail.value])
    this.setData({
      stage_index: e.detail.value
    })
  },

  /**
   * bindPicker: 选择你想要用来计算的卡
   */

  bindPicker1: function(e) {
    console.log('picker 1选择名称变为', this.data.cards_1[e.detail.value].card_name)
    this.setData({
      index_1: e.detail.value
    })
  },

  bindPicker2: function (e) {
    console.log('picker 2选择名称变为', this.data.cards_2[e.detail.value].card_name)
    this.setData({
      index_2: e.detail.value
    })
  },

  bindPicker3: function (e) {
    console.log('picker 3选择名称变为', this.data.cards_3[e.detail.value].card_name)
    this.setData({
      index_3: e.detail.value
    })
  },

  bindPicker4: function (e) {
    console.log('picker 4选择名称变为', this.data.cards_4[e.detail.value].card_name)
    this.setData({
      index_4: e.detail.value
    })
  },

  /**
   * 
   */

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