// pages/timechuo/timechuo.js
const time =require('../../utils/util.js')

Page({

  data: {
    s:'2018-09-03 15:46:13',
    sjc : 1639664409000,
    now:'',
  },
  hh(){
    console.log("时间戳转时间：-----------");
    console.log(time.formatTimeTwo(this.data.sjc,'Y/M/D h:m:s'));
    console.log(time.formatTimeTwo(this.data.sjc, 'h:m'));
    console.log(time.formatTimeTwo(this.data.sjc,'Y'));
    console.log(time.formatTimeTwo(this.data.sjc,'Y-M-D h:m:s'));

    console.log("时间转时间戳：-----------");
    console.log(new Date(this.data.now).getTime());
    console.log(new Date(this.data.s).getTime()),
    console.log(new Date('2018/09/03 15:46:13').getTime()),
    console.log(new Date('2018-09-03 15:46:13'.replace(/-/g,"/")).getTime())

    // 获取当前系统时间
    console.log('获取当前系统时间:-----------');
    console.log(this.data.now);
  },


// 获取当前系统时间
onLoad: function () {
  // 调用函数时，传入new Date()参数，返回值是日期和时间
  // var t 变量
  // time 导入的包
  var t = time.formatTime(new Date());
  // 再通过setData更改Page()里面的data，动态更新页面的数据
  this.setData({
    now: t
  });
  console.log(this.data.now);
}

})