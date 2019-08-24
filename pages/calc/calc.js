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
var stage_equi = require('../../data/stage_calc.js')

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

// 计算卡面每级成长值用的array
var rarity_growth = [
  [0, 0], [24, 16], [30, 20], [35, 23], [39, 26], [45, 30]
]

/**
 * calcCard: 用于计算当前卡面数值
 */

function calcCard(card, level) {
//  var card_values = [];
  var empathy_value = 0;
  var passion_value = 0;
  var stamina_value = 0;
  var wisdom_value = 0;

  console.log(rarity_growth[card.rarity]);

  switch(card.property) {
    case 1:
      empathy_value = card.empathy + (level - 1) * rarity_growth[card.rarity][0];
      passion_value = card.passion + (level - 1) * rarity_growth[card.rarity][1];
      stamina_value = card.stamina + (level - 1) * rarity_growth[card.rarity][1];
      wisdom_value = card.wisdom + (level - 1) * rarity_growth[card.rarity][1];
      break;
    case 2:
      empathy_value = card.empathy + (level - 1) * rarity_growth[card.rarity][1];
      passion_value = card.passion + (level - 1) * rarity_growth[card.rarity][0];
      stamina_value = card.stamina + (level - 1) * rarity_growth[card.rarity][1];
      wisdom_value = card.wisdom + (level - 1)* rarity_growth[card.rarity][1];
      break;
    case 3:
      empathy_value = card.empathy + (level - 1) * rarity_growth[card.rarity][1];
      passion_value = card.passion + (level - 1) * rarity_growth[card.rarity][1];
      stamina_value = card.stamina + (level - 1) * rarity_growth[card.rarity][0];
      wisdom_value = card.wisdom + (level - 1) * rarity_growth[card.rarity][1];
      break;
    case 4:
      empathy_value = card.empathy + (level - 1) * rarity_growth[card.rarity][1];
      passion_value = card.passion + (level - 1) * rarity_growth[card.rarity][1];
      stamina_value = card.stamina + (level - 1) * rarity_growth[card.rarity][1];
      wisdom_value = card.wisdom + (level - 1) * rarity_growth[card.rarity][0];
      break;
  }
  return [empathy_value, passion_value, stamina_value, wisdom_value];
}

/**
 * calcCompany: 计算公司的数值
 */

function calcCompany(e_level, p_level, s_level, w_level) {
  var empathy_value = 100 + (e_level - 1) * 13;
  var passion_value = 100 + (p_level - 1) * 13;
  var stamina_value = 100 + (s_level - 1) * 13;
  var wisdom_value = 100 + (w_level - 1) * 13;

  return [empathy_value, passion_value, stamina_value, wisdom_value];
}

/**
 * transValue: 将属性名称转化为indices
 */

function transValue(card_property) {
  if (card_property == "empathy") {
    return 1;
  }
  else if (card_property == "passion") {
    return 2;
  }
  else if (card_property == "stamina") {
    return 3;
  }
  else {
    return 4;
  }
}

/**
 * rarity_sort: 将列里的outcome按照稀有度排序
 * 用于排序的辅助函数
 */

function rarity_sort(x, y) {
  return x.rarity - y.rarity
}

/**
 * find_card_by_name: 通过card_name提取卡面信息
 */

function find_card_by_name(cards_name, info) {
  let k = 0;
  for (let i = 0; i < info.length; i++) {
    if (info[i].name == cards_name) {
      k = i;
      break;
    }
  }
  if (k != info.length) {
    return info[k];
  }
  else {
    return null;
  }
}

/**
 * find_info_by_stage: 根据stage数获得关卡要求
 * 找到的话输出该项目
 * 否则的话输出null
 */

function find_info_by_stage(chapter_num, stage_num, info) {
  let k = 0;
  for (let i = 0; i < info.length; i++) {
    if (info[i].chapter_num == chapter_num && info[i].name == stage_num) {
      k = i;
      break;
    }
  }
  if (k != info.length) {
    return info[k];
  }
  else {
    return null;
  }
}

/**
 * find_equi_by_index: 根据index获得公式
 */
function find_equi_by_index(equi_id, info) {
  let k = 0;
  for (let i = 0; i < info.length; i++) {
    if (info[i].id == equi_id) {
      k = i;
      break;
    }
  }
  if (k != info.length) {
    return info[k];
  }
  else {
    return null;
  }
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

    // 加载公式信息
    equation: JSON.parse(JSON.stringify(stage_equi.stage_percent))

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

    data.stage_show[1] = arr[1].filter(item => item.chapter_num == data.stage_show[0][data.stage_index[0]].id);

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
   * companyPicker: 用来选择公司属性的滑轮
   * 1 - 感性 empathy
   * 2 - 热情 passion
   * 3 - 体力 stamina
   * 4 - 智慧 wisdom
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
   * calculateCard: 单击之后显示卡面计算结果
   */
  calculateCard: function() {
//    console.log(this.data.multi_array_1[1][this.data.index_1[1]]);
    let data = {
      multi_array_1: this.data.multi_array_1,
      multi_array_2: this.data.multi_array_2,
      multi_array_3: this.data.multi_array_3,
      multi_array_4: this.data.multi_array_4,

      index_1: this.data.index_1,
      index_2: this.data.index_2,
      index_3: this.data.index_3,
      index_4: this.data.index_4,

      level_1: this.data.level_1,
      level_2: this.data.level_2,
      level_3: this.data.level_3,
      level_4: this.data.level_4,

      level_index_1: this.data.level_index_1,
      level_index_2: this.data.level_index_2,
      level_index_3: this.data.level_index_3,
      level_index_4: this.data.level_index_4,

      stage_array: this.data.stage_array,
      stage_index: this.data.stage_index,

      empathy_level: this.data.empathy_level,
      empathy_index: this.data.empathy_index,
      passion_level: this.data.passion_level,
      passion_index: this.data.passion_index,
      stamina_level: this.data.stamina_level,
      stamina_index: this.data.stamina_index,
      wisdom_level: this.data.wisdom_level,
      wisdom_index: this.data.wisdom_index,
    }

    var card_name_array = [];
    var card_level_array = [];

    var card_name_1 = data.multi_array_1[1][data.index_1[1]];
    var card_name_2 = data.multi_array_2[1][data.index_2[1]];
    var card_name_3 = data.multi_array_3[1][data.index_3[1]];
    var card_name_4 = data.multi_array_4[1][data.index_4[1]];

    var card_level_1 = data.level_1[data.level_index_1];
    var card_level_2 = data.level_2[data.level_index_2];
    var card_level_3 = data.level_3[data.level_index_3];
    var card_level_4 = data.level_4[data.level_index_4];

    if (card_name_1 != null) {
      card_name_array.push(card_name_1);
      card_level_array.push(card_level_1);
    }
    if (card_name_2 != null) {
      card_name_array.push(card_name_2);
      card_level_array.push(card_level_2);
    }
    if (card_name_3 != null) {
      card_name_array.push(card_name_3);
      card_level_array.push(card_level_3);
    }
    if (card_name_4 != null) {
      card_name_array.push(card_name_4);
      card_level_array.push(card_level_4);
    }

    // 此处需要解决问题：未输入完整关卡名的时候需要报错
    // 可以的话做个弹窗
    var chapter_num = data.stage_index[0] + 1;
    var stage_num = data.stage_array[1][data.stage_index[1]];
    var using_stage_info = find_info_by_stage(chapter_num, stage_num, stage_info.stage_info);
    var using_stage_equi = find_equi_by_index(using_stage_info.equi_id, stage_equi.stage_percent);

    // 将属性权重顺序记录在calc_id中
    // index代表权重，value表示属性位置
    var calc_ids = [];
    calc_ids.push(transValue(using_stage_info.property_1) - 1);
    calc_ids.push(transValue(using_stage_info.property_2) - 1);
    calc_ids.push(transValue(using_stage_info.property_3) - 1);
    calc_ids.push(transValue(using_stage_info.property_4) - 1);

    console.log(calc_ids);

    // 此处或需要解决问题：当输入卡数小于所需卡数的时候需要跳出提示
    // 森你会做弹窗吗呜呜呜
    if (card_name_array.length >= using_stage_equi.card_num) {
      // 成功的话进入此block
      // 提取卡片信息
      var using_card_info = [];
      for (let i = 0; i < card_name_array.length; i++) {
        var temp = find_card_by_name(card_name_array[i], cards_info.cards_info);
        using_card_info.push(temp);
      }
//      console.log(using_card_info);

      // 丢人，再循环一次，用来算卡数值
      var recent_values = [];
      for (let i = 0; i < using_card_info.length; i++) {
//        console.log(card_level_array[i]);
        var res = calcCard(using_card_info[i], card_level_array[i]);
        recent_values.push(res);
      }

      console.log('当前卡值为: ', recent_values);

      // 再循环一次，计算卡面得分
      var total_score = 0;
      // 导入算式权重
      var prop_1 = using_stage_equi.property_1;
      var prop_2 = using_stage_equi.property_2;
      var prop_3 = using_stage_equi.property_3;
      var prop_4 = using_stage_equi.property_4;

      for (let i = 0; i < recent_values.length; i++) {
        // 导入当前卡牌值
        var temp = recent_values[i];
        var card_score =
          temp[calc_ids[0]] * prop_1 
          + temp[calc_ids[1]] * prop_2
          + temp[calc_ids[2]] * prop_3
          + temp[calc_ids[3]] * prop_4;
        console.log('当前卡在此关卡的分数为：', card_score);

        total_score = total_score + card_score;
      }

      console.log('卡牌合计总分为：', total_score);

      // 计算公司数值
      var company_value = calcCompany(
        data.empathy_level[data.empathy_index],
        data.passion_level[data.passion_index],
        data.stamina_level[data.stamina_index],
        data.wisdom_level[data.wisdom_index],
      );

      console.log('公司数值为：', company_value);

      var company_score = company_value[calc_ids[0]] * prop_1
        + company_value[calc_ids[1]] * prop_2
        + company_value[calc_ids[2]] * prop_3
        + company_value[calc_ids[3]] * prop_4;

      console.log('公司得分为：', company_score);

      total_score = total_score + company_score;
      console.log('您的总分为：', total_score);

      if (total_score >= using_stage_info.minimum_passing_score) {
        console.log('恭喜您过关！');
      }
      else {
        console.log('很遗憾没能过关，请提升卡牌等级或者公司等级。');
      }

    }
    else {
      // 失败之后进入此block
      // 最好有弹窗提示
      console.log('输入卡数不够，请继续输入');
    }


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