// cards数据里面有的地方被我改了
// member_name改成member_id，对应前一组数组
// 2019/08/22 16:40更新：改了，改成属性了
// 1 - 感性
// 2 - 热情
// 3 - 体力
// 4 - 智慧
// 我觉得可能改成属性会好点？森森拜托了OTL
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
  }], [
  {
    id: 0,
    name: " ",
    rarity: 0,
    member_id: 0
  },
  {
    id: 1,
    //  卡名，记得用中文名称写
    //  排序方式：按照图鉴（也就是年龄）顺序，先五星录完所有人后再录四星
    //  这次先每人每星级录一张，共35张。
    name: "原来是美男",
    //  不好意思第一张卡的名字我就在爆笑dbq
    //  成员名字记得统一大写
    //  悲伤尝试，我都改成标号做对应了
    member_id:1,
    //  属性
    property:1,
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
    name: "键盘上的闵喵喵",
    member_id: 2,
    property: 1,
    rarity: 5,
    empathy: 1800,
    passion: 1080,
    stamina: 360,
    wisdom: 360,
  },
  {
    id: 3,
    name: "微笑天使",
    member_id: 3,
    property: 1,
    rarity: 5,
    empathy: 1746,
    passion: 1188,
    stamina: 335,
    wisdom: 360,
  },
  {
    id: 4,
    name: "名侦探",
    member_id: 4,
    property: 1,
    rarity: 5,
    empathy: 1980,
    passion: 1048,
    stamina: 360,
    wisdom: 335,
  },
  {
    id: 5,
    name: "我独自在练习室",
    member_id: 5,
    property: 1,
    rarity: 5,
    empathy: 1746,
    passion: 1188,
    stamina: 335,
    wisdom: 360,
  },
  {
    id: 6,
    name: "眨眼",
    member_id: 6,
    property: 1,
    rarity: 5,
    empathy: 1800,
    passion: 1188,
    stamina: 349,
    wisdom: 335,
  },
  {
    id: 7,
    name: "国家代表",
    member_id: 7,
    property: 1,
    rarity: 5,
    empathy: 1674,
    passion: 1080,
    stamina: 349,
    wisdom: 396,
  },
  // 接下来是四星
  {
    id: 8,
    name: "颜值爆表",  //草
    member_id: 1,
    property: 1,
    rarity: 4,
    empathy: 1056,
    passion: 893,
    stamina: 640,
    wisdom: 621,
  },
  {
    id: 9,
    name: "节拍器",
    member_id: 2,
    property: 1,
    rarity: 4,
    empathy: 893,
    passion: 640,
    stamina: 931,
    wisdom: 704,
  },
  {
    id: 10,
    name: "漂亮漂亮",
    member_id: 3,
    property: 1,
    rarity: 4,
    empathy: 1242,
    passion: 352,
    stamina: 595,
    wisdom: 960,
  },
  {
    id: 11,
    name: "夏洛克Namjun",
    member_id: 4,
    property: 4,
    rarity: 4,
    empathy: 1242,
    passion: 320,
    stamina: 298,
    wisdom: 1408,
  },
  {
    id: 12,
    name: "歌单",
    member_id: 5,
    property: 1,
    rarity: 4,
    empathy: 1280,
    passion: 320,
    stamina: 640,
    wisdom: 960,
  },
  {
    id: 13,
    name: "视觉冲击",
    member_id: 6,
    property: 1,
    rarity: 4,
    empathy: 1280,
    passion: 352,
    stamina: 595,
    wisdom: 931,
  },
  {
    id: 14,
    name: "跆拳少年",
    member_id: 7,
    property: 1,
    rarity: 4,
    empathy: 1600,
    passion: 352,
    stamina: 931,
    wisdom: 298,
  },
  //  三星
  {
    id: 15,
    name: "想你",  //所以说金硕珍卡牌的名字为什么都这么诡异
    member_id: 1,
    property: 2,
    rarity: 3,
    empathy: 815,
    passion: 1540,
    stamina: 260,
    wisdom: 280,
  },
  {
    id: 16,
    name: "红帽子",
    member_id: 2,
    property: 4,
    rarity: 3,
    empathy: 140,
    passion: 924,
    stamina: 136,
    wisdom: 1562,
  },
  {
    id: 17,
    name: "干得漂亮",
    member_id: 3,
    property: 1,
    rarity: 3,
    empathy: 770,
    passion: 651,
    stamina: 700,
    wisdom: 679,          //这张卡数值有点惨（瑛：我前几天还喂了这张好像？）
  },
  {
    id: 18,
    name: "其他想法",
    member_id: 4,
    property: 1,
    rarity: 3,
    empathy: 1232,
    passion: 272,
    stamina: 1120,
    wisdom: 260,
  },
  {
    id: 19,
    name: "哼",      //唔啾啾我的宝贝wuwuwuuuwuuw
    member_id: 5,
    property: 4,
    rarity: 3,
    empathy: 140,
    passion: 140,
    stamina: 840,
    wisdom: 1680,
  },
  {
    id: 20,
    name: "倾情演唱",
    member_id: 6,
    property: 4,
    rarity: 3,
    empathy: 272,
    passion: 280,
    stamina: 781,
    wisdom: 1540,
  },
  {
    id: 21,
    name: "那边的你", // 草为什么我读这个标题的时候脑子里出来日语
    member_id: 7,
    property: 3,
    rarity: 3,
    empathy: 840,
    passion: 521,
    stamina: 924,
    wisdom: 543,
  },
  //  二星
  {
    id: 22,
    name: "夸奖我",  //这张卡真的好可爱i cant
    member_id: 1,
    property: 4,
    rarity: 2,
    empathy: 558,
    passion: 600,
    stamina: 582,
    wisdom: 660,
  },
  {
    id: 23,
    name: "警告你",  // 请问是在跟上一张卡对话吗
    member_id: 2,
    property: 4, //  属性还一样，突然觉sin真的太草
    rarity: 2,
    empathy: 670,
    passion: 480,
    stamina: 466,
    wisdom: 792,
  },
  {
    id: 24,
    name: "晕晕乎乎",  //  大型七人男子连续剧
    member_id: 3,
    property: 4,   //  聪明小芙（瑛：改到这里我差点笑死）
    rarity: 2,
    empathy: 466,
    passion: 720,
    stamina: 446,
    wisdom: 792,
  },
  {
    id: 25,
    name: "酒窝",
    member_id: 4,
    property: 3,
    rarity: 2,
    empathy: 720,
    passion: 446,
    stamina: 792,
    wisdom: 466,
  },
  {
    id: 26,
    name: "好久不见",
    member_id: 5,
    property: 4,
    rarity: 2,
    empathy: 698,
    passion: 480,
    stamina: 446,
    wisdom: 792,
  },
  {
    id: 27,
    name: "淘气鬼",
    member_id: 6,
    property: 2,
    rarity: 2,
    empathy: 480,
    passion: 720,
    stamina: 720,
    wisdom: 480,
  },
  {
    id: 28,
    name: "2年级",
    member_id: 7,
    property: 1,
    rarity: 2,
    empathy: 792,
    passion: 670,
    stamina: 480,
    wisdom: 466,
  },
  // 一星
  {
    id: 29,
    name: "我反对",
    member_id: 1,
    property: 1,
    rarity: 1,
    empathy: 550,
    passion: 485,
    stamina: 500,
    wisdom: 465,
  },
  {
    id: 30,
    name: "嗨", //  每次卡bug都能看见的卡名
    member_id: 2, 
    property: 4,
    rarity: 1,
    empathy: 448,
    passion: 420,
    stamina: 630,
    wisdom: 732,
  },
  {
    id: 31,
    name: "有信心",
    member_id: 3,
    property: 3,
    rarity: 1,
    empathy: 400,
    passion: 600,
    stamina: 600,
    wisdom: 400,
  },
  {
    id: 32,
    name: "很合我意",
    member_id: 4,
    property: 2,
    rarity: 1,
    empathy: 372,
    passion: 660,
    stamina: 581,
    wisdom: 400,
  },
  {
    id: 33,
    name: "无法取代",
    member_id: 5,
    property: 2,
    rarity: 1,
    empathy: 400,
    passion: 660,
    stamina: 372,
    wisdom: 582,
  },
  {
    id: 34,
    name: "歪头",
    member_id: 6,
    property: 3,
    rarity: 1,
    empathy: 400,
    passion: 558,
    stamina: 660,
    wisdom: 388,
  },
  {
    id: 35,
    name: "砰砰乱跳",
    member_id: 7,
    property: 1,
    rarity: 1,
    empathy: 660,
    passion: 582,
    stamina: 400,
    wisdom: 372,
  },
]]

var stages = [
  '', '6-1', '6-2', '6-4', '6-5', '6-7', '6-8', '6-9', '6-11', '6-12', '6-14', '6-15', '6-17', '6-18', '6-19'
]

var level = []

for (var i = 0; i < 51; i++) {
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

    multi_show_1: [],
    cards_1: [],
    multi_array_1: [],
    index_1: [],

    stage_index: 0,
    cur_stages: JSON.parse(JSON.stringify(stages))
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    let data = {
      multi_show_1: this.data.multi_show_1,
      cards_1: this.data.cards_1,
      multi_array_1: this.data.multi_array_1,
      index_1: this.data.index_1
    }

    data.cards_1 = JSON.parse(JSON.stringify(cards))

    data.multi_show_1 = data.cards_1.map((item, index) => {
      // console.log(index)
      // 现在可以根据属性选卡片
      if (index > 0) {
        item = item.filter(i => i.property === data.cards_1[index - 1][0].id)
      }
      return item
    })

    data.multi_array_1 = data.multi_show_1.map(item => {
      item = item.map(i => i.name)
      return item
    })

    this.setData(data)
  },

  /**
 * stagePicker: 选择你正在面对的关卡
 */
  stagePicker: function (e) {
    console.log('选择的关卡是：', this.data.cur_stages[e.detail.value])
    this.setData({
      stage_index: e.detail.value
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
    console.log('修改的列：', e.detail.column, '值为：', e.detail.value);
    let data = {
      multi_show_1: this.data.multi_show_1,
//      cards_1: this.data.cards_1,
      multi_array_1: this.data.multi_array_1,
      index_1: this.data.index_1
    }
    data.index_1[e.detail.column] = e.detail.value;
    //  改变前一列之后后面会重置到第0项
    for (let i = e.detail.column; i < data.index_1.length - 1; i++) {
      data.index_1[i + 1] = 0;
    }

    // 更新第二列卡名
    let arr = this.data.cards_1;
    arr.sort(rarity_sort);
    for (let i = e.detail.column; i < data.index_1.length - 1; i++) {
      data.multi_show_1[i+1] = arr[i+1].filter(item => item.property == data.multi_show_1[i][data.index_1[i]].id);
//      data.multi_show_1[i+1].sort(rarity_sort);
      data.multi_array_1[i+1] = data.multi_show_1[i+1].map(i => i.name);
    }

    this.setData(data)
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