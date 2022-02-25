// pages/cr/cr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始的属性
    multiArray: [
      ["宿舍区域","公共区域"],
      ["1号宿舍楼","2号宿舍楼","3号宿舍楼","4号宿舍楼","5号宿舍楼"],
      ['101', '102', '103', '104', '105',]
    ],
    // 第一次显示的属性
    multiIndex:[0,0,0],

    objectMultiArray: [
      [{
          id: 0,
          name: '宿舍区域'
        },
        {
          id: 1,
          name: '公告区域'
        }
      ],
      [{
          id: 0,
          name: "1号宿舍楼"
        },
        {
          id: 1,
          name: "2号宿舍楼"
        },
        {
          id: 2,
          name: "3号宿舍楼"
        },
        {
          id: 3,
          name: "4号宿舍楼"
        },
        {
          id: 4,
          name: "5号宿舍楼"
        }
      ],
      [{
          id: 0,
          name: '101'
        },
        {
          id: 1,
          name: '102'
        },
        {
          id: 2,
          name: '103'
        },
        {
          id: 3,
          name: '104'
        },
        {
          id: 4,
          name: '105'
        }
      ]
    ],


  },
  
   // 将选择的属性索引(e.detail.value)赋值给 multiIndex
   MultiChange(e) {
    // console.log(e.detail.value);
    this.setData({
      multiIndex: e.detail.value
    })
  },
  // 列改变时触发
  MultiColumnChange(e) {
    console.log(this.data.multiArray);
    console.log(this.data.multiIndex)
    // 当
    let data = {
      
      multiArray: this.data.multiArray, 
      multiIndex: this.data.multiIndex
    };
    // console.log(e)
    console.log(e.detail.column);
    // 变动的第几列的索引

    console.log(e.detail.value); 
    // 变动这一列的第几个属性的索引

    // 修改这个函数中变量data中数组 multiIndex[0,0,0]的第几个值
    // 
    data.multiIndex[e.detail.column] = e.detail.value;

    // data.multiIndex[0] 第1列的第几个属性的索引
    // 变动的是第几列
    switch (e.detail.column) {
      // 变了第一列
      case 0:
        // 如果数组data.multiIndex[0]的值为多少
        // 也就是看目前是第一列的第几个属性
        switch (data.multiIndex[0]) {
          
          case 0:
            data.multiArray[1] = ["1号宿舍楼","2号宿舍楼","3号宿舍楼","4号宿舍楼","5号宿舍楼"];
            data.multiArray[2] = ['101', '102', '103', '104', '105',];
            break;
          case 1:
            data.multiArray[1] = ["1号教学楼","2号教学楼","3号教学楼","4号教学楼",];
            data.multiArray[2] = ["1011"];
            break;
        }
        // 变换列后，其他的列为索引为0的属性
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      //   // 变了第二列
      // case 1:
      //   // 看第一列的属性是多少
      //   switch (data.multiIndex[0]) {
      //     // 第一列的属性是第一个
      //     case 0:
      //       // 看第二列的属性是第几个去变第三列的属性
      //       switch (data.multiIndex[1]) {
      //         // 第二列是0，第三列赋值【】
      //         case 0:
      //           data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
      //           break;
      //           // 第二列是1，第三列赋值【】
      //         case 1:
      //           data.multiArray[2] = ['蛔虫'];
      //           break;
      //         case 2:
      //           data.multiArray[2] = ['蚂蚁', '蚂蟥'];
      //           break;
      //         case 3:
      //           data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
      //           break;
      //         case 4:
      //           data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
      //           break;
      //       }
      //       break;
      //     // 第一列的属性是二个
      //     case 1:
      //       switch (data.multiIndex[1]) {
      //         case 0:
      //           data.multiArray[2] = ['鲫鱼', '带鱼'];
      //           break;
      //         case 1:
      //           data.multiArray[2] = ['青蛙', '娃娃鱼'];
      //           break;
      //         case 2:
      //           data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
      //           break;
      //       }
      //       break;
      //   }
      //   // 做完判断第三列设置为0
      //   data.multiIndex[2] = 0;
      //   break;
    }
    
    this.setData(data);
    // 设置data的值
  },


})