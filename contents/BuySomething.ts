/*

使用方法：
首先确保你的地图中玩家钱数的私有变量为money
你需要配置的参数有：
1.和玩家对话的实体，类型为Box3Entity
2.所出售的东西的名称的数组，类型string
3.所出售的东西的价钱的数组，类型number，元素数量要与上面的数组保持一致
4.购买后执行的函数的数组，元素数量要与上面的数组保持一致
5.钱在你的地图里的名称，类型string

*/

function makeoptions(array1,array2,money_name){
  if(array1.length != array2.length){
    return console.error('两个数组长度不一致')
  }
  let return_array = [];
  for(let i = 0;i<=array1.length-1){
    return_array.push(`${array1[i]}（${array2[i]}${money_name}）`)
  }
  return return_array;
}

async function buysomething(entity_npc: Box3Entity, things?: string[], money?: number[], run_function?: void[] , money_name2?: string) {
  return await entity_npc.onInteract(async ({ entity }) => { //当玩家对这个npc按E触发交互, npc问你想买哪些商品
    const selection = await entity.player.dialog({
      type: Box3DialogType.SELECT, //对话框类型为选择框
      content: `你有${entity.player.money_name}${money_name2}, 想买点什么呢?`,
      title: entity_npc.id, //对话框左上角显示NPC名字
      options: makeoptions(things,money,money_name2), //选项
    })
    if (selection) { //如果玩家没有点击'x'关闭对话框
      const price = money[selection.index] //被选中货物的价格
      if (entity.player.money_name >= price) { //如果玩家的钱足够
        entity.player.money_name -= price //扣钱
        run_function[selection.index](); //执行购买某一物品后所对应的函数
      }
    }
  })
}