var cards = [
  {
    id: 0,
    card_name: ''
  },
  {
    id: 1,
    //  卡名，记得用中文名称写
    //  排序方式：按照图鉴（也就是年龄）顺序，先五星录完所有人后再录四星
    //  这次先每人每星级录一张，共35张。
    card_name: "原来是美男",
    //  不好意思第一张卡的名字我就在爆笑dbq
    //  成员名字记得统一大写
    member_name:"JIN",
    //  属性
    property:"empathy",
    //  稀有度
    rarity:5,
    //  初始属性
    //  感性
    empathy: 1980,
    //  热情
    passion: 1048,
    //  体力
    stamina: 360,
    //  智慧
    wisdom: 335,
  },
  {
    id: 2,
    card_name: "键盘上的闵喵喵",
    member_name: "SUGA",
    property: "empathy",
    rarity: 5,
    empathy: 1800,
    passion: 1080,
    stamina: 360,
    wisdom: 360,
  },
  {
    id: 3,
    card_name: "微笑天使",
    member_name: "J-HOPE",
    property: "empathy",
    rarity: 5,
    empathy: 1746,
    passion: 1188,
    stamina: 335,
    wisdom: 360,
  },
  {
    id: 4,
    card_name: "名侦探",
    member_name: "RM",
    property: "empathy",
    rarity: 5,
    empathy: 1980,
    passion: 1048,
    stamina: 360,
    wisdom: 335,
  },
  {
    id: 5,
    card_name: "我独自在练习室",
    member_name: "JIMIN",
    property: "empathy",
    rarity: 5,
    empathy: 1746,
    passion: 1188,
    stamina: 335,
    wisdom: 360,
  },
  {
    id: 6,
    card_name: "眨眼",
    member_name: "V",
    property: "empathy",
    rarity: 5,
    empathy: 1800,
    passion: 1188,
    stamina: 349,
    wisdom: 335,
  },
  {
    id: 7,
    card_name: "国家代表",
    member_name: "JUNGKOOK",
    property: "empathy",
    rarity: 5,
    empathy: 1674,
    passion: 1080,
    stamina: 349,
    wisdom: 396,
  },
  // 接下来是四星
  {
    id: 8,
    card_name: "颜值爆表",  //草
    member_name: "JIN",
    property: "empathy",
    rarity: 4,
    empathy: 1056,
    passion: 893,
    stamina: 640,
    wisdom: 621,
  },
  {
    id: 9,
    card_name: "节拍器",
    member_name: "SUGA",
    property: "empathy",
    rarity: 4,
    empathy: 893,
    passion: 640,
    stamina: 931,
    wisdom: 704,
  },
  {
    id: 10,
    card_name: "漂亮漂亮",
    member_name: "J-HOPE",
    property: "empathy",
    rarity: 4,
    empathy: 1242,
    passion: 352,
    stamina: 595,
    wisdom: 960,
  },
  {
    id: 11,
    card_name: "夏洛克Namjun",
    member_name: "RM",
    property: "wisdom",
    rarity: 4,
    empathy: 1242,
    passion: 320,
    stamina: 298,
    wisdom: 1408,
  },
  {
    id: 12,
    card_name: "歌单",
    member_name: "JIMIN",
    property: "empathy",
    rarity: 4,
    empathy: 1280,
    passion: 320,
    stamina: 640,
    wisdom: 960,
  },
  {
    id: 13,
    card_name: "视觉冲击",
    member_name: "V",
    property: "empathy",
    rarity: 4,
    empathy: 1280,
    passion: 352,
    stamina: 595,
    wisdom: 931,
  },
  {
    id: 14,
    card_name: "跆拳少年",
    member_name: "JUNGKOOK",
    property: "empathy",
    rarity: 4,
    empathy: 1600,
    passion: 352,
    stamina: 931,
    wisdom: 298,
  },
  //  三星
  {
    id: 15,
    card_name: "想你",  //所以说金硕珍卡牌的名字为什么都这么诡异
    member_name: "JIN",
    property: "passion",
    rarity: 3,
    empathy: 815,
    passion: 1540,
    stamina: 260,
    wisdom: 280,
  },
  {
    id: 16,
    card_name: "红帽子",
    member_name: "SUGA",
    property: "wisdom",
    rarity: 3,
    empathy: 140,
    passion: 924,
    stamina: 136,
    wisdom: 1562,
  },
  {
    id: 17,
    card_name: "干得漂亮",
    member_name: "J-HOPE",
    property: "empathy",
    rarity: 3,
    empathy: 770,
    passion: 651,
    stamina: 700,
    wisdom: 679,          //这张卡数值有点惨
  },
  {
    id: 18,
    card_name: "其他想法",
    member_name: "RM",
    property: "empathy",
    rarity: 3,
    empathy: 1232,
    passion: 272,
    stamina: 1120,
    wisdom: 260,
  },
  {
    id: 19,
    card_name: "哼",      //唔啾啾我的宝贝wuwuwuuuwuuw
    member_name: "JIMIN",
    property: "wisdom",
    rarity: 3,
    empathy: 140,
    passion: 140,
    stamina: 840,
    wisdom: 1680,
  },
  {
    id: 20,
    card_name: "倾情演唱",
    member_name: "V",
    property: "wisdom",
    rarity: 3,
    empathy: 272,
    passion: 280,
    stamina: 781,
    wisdom: 1540,
  },
  {
    id: 21,
    card_name: "那边的你",
    member_name: "JUNGKOOK",
    property: "stamina",
    rarity: 3,
    empathy: 840,
    passion: 521,
    stamina: 924,
    wisdom: 543,
  },
  //  二星
  {
    id: 22,
    card_name: "夸奖我",  //这张卡真的好可爱i cant
    member_name: "JIN",
    property: "wisdom",
    rarity: 2,
    empathy: 558,
    passion: 600,
    stamina: 582,
    wisdom: 660,
  },
  {
    id: 23,
    card_name: "警告你",  // 请问是在跟上一张卡对话吗
    member_name: "SUGA",
    property: "wisdom",
    rarity: 2,
    empathy: 670,
    passion: 480,
    stamina: 466,
    wisdom: 792,
  },
  {
    id: 24,
    card_name: "晕晕乎乎",  //  大型七人男子连续剧
    member_name: "J-HOPE",
    property: "wisdom",   //  聪明小芙
    rarity: 2,
    empathy: 466,
    passion: 720,
    stamina: 446,
    wisdom: 792,
  },
  {
    id: 25,
    card_name: "酒窝",
    member_name: "RM",
    property: "stamina",
    rarity: 2,
    empathy: 720,
    passion: 446,
    stamina: 792,
    wisdom: 466,
  },
  {
    id: 26,
    card_name: "好久不见",
    member_name: "JIMIN",
    property: "wisdom",
    rarity: 2,
    empathy: 698,
    passion: 480,
    stamina: 446,
    wisdom: 792,
  },
  {
    id: 27,
    card_name: "淘气鬼",
    member_name: "V",
    property: "passion",
    rarity: 2,
    empathy: 480,
    passion: 720,
    stamina: 720,
    wisdom: 480,
  },
  {
    id: 28,
    card_name: "2年级",
    member_name: "JUNGKOOK",
    property: "empathy",
    rarity: 2,
    empathy: 792,
    passion: 670,
    stamina: 480,
    wisdom: 466,
  },
  // 一星
  {
    id: 29,
    card_name: "我反对",
    member_name: "JIN",
    property: "empathy",
    rarity: 1,
    empathy: 550,
    passion: 485,
    stamina: 500,
    wisdom: 465,
  },
  {
    id: 30,
    card_name: "嗨",
    member_name: "SUGA",
    property: "wisdom",
    rarity: 1,
    empathy: 448,
    passion: 420,
    stamina: 630,
    wisdom: 732,
  },
  {
    id: 31,
    card_name: "有信心",
    member_name: "J-HOPE",
    property: "stamina",
    rarity: 1,
    empathy: 400,
    passion: 600,
    stamina: 600,
    wisdom: 400,
  },
  {
    id: 32,
    card_name: "很合我意",
    member_name: "RM",
    property: "passion",
    rarity: 1,
    empathy: 372,
    passion: 660,
    stamina: 581,
    wisdom: 400,
  },
  {
    id: 33,
    card_name: "无法取代",
    member_name: "JIMIN",
    property: "passion",
    rarity: 1,
    empathy: 400,
    passion: 660,
    stamina: 372,
    wisdom: 582,
  },
  {
    id: 34,
    card_name: "歪头",
    member_name: "V",
    property: "stamina",
    rarity: 1,
    empathy: 400,
    passion: 558,
    stamina: 660,
    wisdom: 388,
  },
  {
    id: 35,
    card_name: "砰砰乱跳",
    member_name: "JUNGKOOK",
    property: "empathy",
    rarity: 1,
    empathy: 660,
    passion: 582,
    stamina: 400,
    wisdom: 372,
  },
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