// cards数据里面有的地方被我改了
// member_name改成member_id，对应前一组数组
// 2019/08/22 16:40更新：改了，改成属性了
// 1 - 感性
// 2 - 热情
// 3 - 体力
// 4 - 智慧
// 我觉得可能改成属性会好点？森森拜托了OTL

var cards_info = require('../../data/cards_info.js')
var stage_info = require('../../data/stage_info.js')

var cards = [[
  {
    id: 1,
    name: "empathy"
  }, 
  {
    id: 2,
    name: "passion"
  }, 
  {
    id: 3,
    name: "stamina"
  }, 
  {
    id: 4,
    name: "wisdom"
  }], cards_info.cards_info]

var stage_bar = [[
  {
    id: 1,
    name: "一"
  },
  {
    id: 2,
    name: "二"
  },
  {
    id: 3,
    name: "三"
  },
  {
    id: 4,
    name: "四"
  },
  {
    id: 5,
    name: "五"
  },
  {
    id: 6,
    name: "六"
  }
], stage_info.stage_info]

var level = []

for (var i = 1; i < 51; i++) {
  level.push(i);
}

/**
 * rarity_sort: 将列里的outcome按照稀有度排序
 */

function rarity_sort(x, y) {
  return x.rarity - y.rarity
}

Page({

  /**
   * 页面的初始数据
   */

  data: {
    // 用于收集第一张卡的信息
    multi_show_1: [],
    cards_1: [],
    multi_array_1: [],
    index_1: [],
    level_1: JSON.parse(JSON.stringify(level)),
    level_index_1: 0,

    // 用于收集第二张卡的信息
    multi_show_2: [],
    cards_2: [],
    multi_array_2: [],
    index_2: [],
    level_2: JSON.parse(JSON.stringify(level)),
    level_index_2: 0,

    // 用于收集第三张卡的信息
    multi_show_3: [],
    cards_3: [],
    multi_array_3: [],
    index_3: [],
    level_3: JSON.parse(JSON.stringify(level)),
    level_index_3: 0,

    // 用于收集第四张卡的信息
    multi_show_4: [],
    cards_4: [],
    multi_array_4: [],
    index_4: [],
    level_4: JSON.parse(JSON.stringify(level)),
    level_index_4: 0,

    // stage_index: 0,
    // cur_stages: JSON.parse(JSON.stringify(stages))

    // 用于加载关卡信息
    stage_show: [],
    stages: [],
    stage_array: [],
    stage_index: [],

    // 加载公司等级信息
    empathy_level: JSON.parse(JSON.stringify(level)),
    empathy_index: 0,
    passion_level: JSON.parse(JSON.stringify(level)),
    passion_index: 0,
    stamina_level: JSON.parse(JSON.stringify(level)),
    stamina_index: 0,
    wisdom_level: JSON.parse(JSON.stringify(level)),
    wisdom_index: 0,

  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    let data = {
      multi_show_1: this.data.multi_show_1,
      cards_1: this.data.cards_1,
      multi_array_1: this.data.multi_array_1,
      index_1: this.data.index_1,

      multi_show_2: this.data.multi_show_2,
      cards_2: this.data.cards_2,
      multi_array_2: this.data.multi_array_2,
      index_2: this.data.index_2,

      multi_show_3: this.data.multi_show_3,
      cards_3: this.data.cards_3,
      multi_array_3: this.data.multi_array_3,
      index_3: this.data.index_3,

      multi_show_4: this.data.multi_show_4,
      cards_4: this.data.cards_4,
      multi_array_4: this.data.multi_array_4,
      index_4: this.data.index_4,

      stage_show: this.data.stage_show,
      stages: this.data.stages,
      stage_array: this.data.stage_array,
      stage_index: this.data.stage_index
    }

    data.cards_1 = JSON.parse(JSON.stringify(cards))
    data.cards_2 = JSON.parse(JSON.stringify(cards))
    data.cards_3 = JSON.parse(JSON.stringify(cards))
    data.cards_4 = JSON.parse(JSON.stringify(cards))

    data.stages = JSON.parse(JSON.stringify(stage_bar))

    data.multi_show_1 = data.cards_1.map((item, index) => {
      // 现在可以根据属性选卡片
      if (index > 0) {
        item = item.filter(i => i.property === data.cards_1[index - 1][0].id)
      }
      return item
    })

    data.multi_show_2 = data.cards_2.map((item, index) => {
      // 现在可以根据属性选卡片
      if (index > 0) {
        item = item.filter(i => i.property === data.cards_2[index - 1][0].id)
      }
      return item
    })

    data.multi_show_3 = data.cards_3.map((item, index) => {
      // 现在可以根据属性选卡片
      if (index > 0) {
        item = item.filter(i => i.property === data.cards_3[index - 1][0].id)
      }
      return item
    })

    data.multi_show_4 = data.cards_4.map((item, index) => {
      // 现在可以根据属性选卡片
      if (index > 0) {
        item = item.filter(i => i.property === data.cards_4[index - 1][0].id)
      }
      return item
    })

    // 根据章节选择关卡
    data.stage_show = data.stages.map((item, index)=> {
      if (index > 0) {
        item = item.filter(i=>i.chapter_name === data.stages[index - 1][0].chapter_id)
      }
      return item
    })

    data.multi_array_1 = data.multi_show_1.map(item => {
      item = item.map(i => i.name)
      return item
    })

    data.multi_array_2 = data.multi_show_2.map(item => {
      item = item.map(i => i.name)
      return item
    })

    data.multi_array_3 = data.multi_show_3.map(item => {
      item = item.map(i => i.name)
      return item
    })

    data.multi_array_4 = data.multi_show_4.map(item => {
      item = item.map(i => i.name)
      return item
    })

    data.stage_array = data.stage_show.map(item => {
//      console.log(item)
      item = item.map(i => i.name)
      return item
    })

    this.setData(data)
  },

  /**
 * stagePicker: 选择你正在面对的关卡
 */
  stagePicker: function (e) {
    console.log('选择的关卡是：', e.detail.value)
    this.setData({
      stage_index: e.detail.value
    })
  },

  stageColumnChange: function(e) {
    console.log('1. 修改的列：', e.detail.column, '值为：', e.detail.value);
    let data = {
      stage_show: this.data.stage_show,
      stage_array: this.data.stage_array,
      stage_index: this.data.stage_index
    }

    data.stage_index[e.detail.column] = e.detail.value

    for (let i = e.detail.column; i < data.stage_index.length - 1; i++) {
      data.stage_index[i + 1] = 0;
    }

    let arr = this.data.stages;
//    arr.sort(rarity_sort);

//    console.log(data.stage_show[0]);

    data.stage_show[1] = arr[1].filter(item => item.chapter_num == data.stage_show[0][data.stage_index[0]].id);
//    console.log(data.stage_array[1]);
    data.stage_array[1] = data.stage_show[1].map(item => item.name);

    this.setData(data)    
  },

  /**
   * levelPicker: 选择你的卡面等级
   */
  levelPicker1: function (e) {
    console.log('第一张卡的等级是： ', this.data.level_1[e.detail.value])
    this.setData({
      level_index_1: e.detail.value
    })
  },

  levelPicker2: function (e) {
    console.log('第二张卡的等级是： ', this.data.level_2[e.detail.value])
    this.setData({
      level_index_2: e.detail.value
    })
  },

  levelPicker3: function (e) {
    console.log('第三张卡的等级是： ', this.data.level_3[e.detail.value])
    this.setData({
      level_index_3: e.detail.value
    })
  },

  levelPicker4: function (e) {
    console.log('第四张卡的等级是： ', this.data.level_4[e.detail.value])
    this.setData({
      level_index_4: e.detail.value
    })
  },

  /**
   * companyPicker: 选择公司等级
   */

  companyPicker1: function(e) {
    console.log('公司感性等级：', this.data.empathy_level[e.detail.value])
    this.setData({
      empathy_index: e.detail.value
    })
  },

  companyPicker2: function (e) {
    console.log('公司热情等级：', this.data.passion_level[e.detail.value])
    this.setData({
      passion_index: e.detail.value
    })
  },

  companyPicker3: function (e) {
    console.log('公司体力等级：', this.data.stamina_level[e.detail.value])
    this.setData({
      stamina_index: e.detail.value
    })
  },

  companyPicker4: function (e) {
    console.log('公司智慧等级：', this.data.wisdom_level[e.detail.value])
    this.setData({
      wisdom_index: e.detail.value
    })
  },

  /**
   * bindPicker: 选择一张你想要用来计算的卡
   */

  bindPicker1: function (e) {
    console.log('picker 1 数值改变为：', e.detail.value)

    this.setData({
      index_1: e.detail.value
    })
  },

  bindColumnChange1: function (e) {
    console.log('1. 修改的列：', e.detail.column, '值为：', e.detail.value);
    let data = {
      multi_show_1: this.data.multi_show_1,
      multi_array_1: this.data.multi_array_1,
      index_1: this.data.index_1
    }
    data.index_1[e.detail.column] = e.detail.value;
    //  改变前一列之后后面会重置到第0项
    for (let i = e.detail.column; i < data.index_1.length - 1; i++) {
      data.index_1[i + 1] = 0;
    }

    // 更新第二列卡名
    // 先按照稀有度排序
    let arr = this.data.cards_1;
    arr.sort(rarity_sort);

    data.multi_show_1[1] = arr[1].filter(item => item.property == data.multi_show_1[0][data.index_1[0]].id);

    data.multi_array_1[1] = data.multi_show_1[1].map(item => item.name);

    this.setData(data)
  },

  /**
   * 是第三个picker
   * 我捋错了谁来救救我
   */

  bindPicker3: function (e) {
    console.log('picker 3 数值改变为：', e.detail.value)

    this.setData({
      index_3: e.detail.value
    })
  },

  bindColumnChange3: function (e) {
    console.log('3. 修改的列：', e.detail.column, '值为：', e.detail.value);
    let data = {
      multi_show_3: this.data.multi_show_3,
      multi_array_3: this.data.multi_array_3,
      index_3: this.data.index_3
    }
    data.index_3[e.detail.column] = e.detail.value;
    //  改变前一列之后后面会重置到第0项
    for (let i = e.detail.column; i < data.index_3.length - 1; i++) {
      data.index_3[i + 1] = 0;
    }

    // 更新第二列卡名
    // 先按照稀有度排序
    let arr = this.data.cards_3;
    arr.sort(rarity_sort);

    data.multi_show_3[1] = arr[1].filter(item => item.property == data.multi_show_3[0][data.index_3[0]].id);
    data.multi_array_3[1] = data.multi_show_3[1].map(item => item.name);

    this.setData(data)
  },

  /**
   * 这才是第二个picker
   */

  bindPicker2: function (e) {
    console.log('picker 2 数值改变为：', e.detail.value)

    this.setData({
      index_2: e.detail.value
    })
  },

  bindColumnChange2: function (e) {
    console.log('2. 修改的列：', e.detail.column, '值为：', e.detail.value);
    let data = {
      multi_show_2: this.data.multi_show_2,
      multi_array_2: this.data.multi_array_2,
      index_2: this.data.index_2
    }
    data.index_2[e.detail.column] = e.detail.value;
    //  改变前一列之后后面会重置到第0项
    for (let i = e.detail.column; i < data.index_2.length - 1; i++) {
      data.index_2[i + 1] = 0;
    }

    // 更新第二列卡名
    // 先按照稀有度排序
    let arr = this.data.cards_2;
    arr.sort(rarity_sort);

    data.multi_show_2[1] = arr[1].filter(item => item.property == data.multi_show_2[0][data.index_2[0]].id);
    data.multi_array_2[1] = data.multi_show_2[1].map(item => item.name);

    this.setData(data)
  },

  /**
   * 这是第四个picker
   */

  bindPicker4: function (e) {
    console.log('picker 4 数值改变为：', e.detail.value)

    this.setData({
      index_4: e.detail.value
    })
  },

  bindColumnChange4: function (e) {
    console.log('4. 修改的列：', e.detail.column, '值为：', e.detail.value);
    let data = {
      multi_show_4: this.data.multi_show_4,
      multi_array_4: this.data.multi_array_4,
      index_4: this.data.index_4
    }
    data.index_4[e.detail.column] = e.detail.value;
    //  改变前一列之后后面会重置到第0项
    for (let i = e.detail.column; i < data.index_4.length - 1; i++) {
      data.index_4[i + 1] = 0;
    }

    // 更新第二列卡名
    // 先按照稀有度排序
    let arr = this.data.cards_4;
    arr.sort(rarity_sort);

    data.multi_show_4[1] = arr[1].filter(item => item.property == data.multi_show_4[0][data.index_4[0]].id);
    data.multi_array_4[1] = data.multi_show_4[1].map(item => item.name);

    this.setData(data)
  },

  /**
   * companyPicker: 用来选择公司属性的滑轮
   * 1 - 感性 empathy
   * 2 - 热情 passion
   * 3 - 体力 stamina
   * 4 - 智慧 wisdom
   */

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