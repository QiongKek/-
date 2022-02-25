
Page({

  
    data: {
      activeName: '1',
      list:[
        {
        num:202105656,
        time:"2021-12-20",
        state:"已完成"
        },
        {
          num:202105655,
          time:"2021-12-19",
          state:"处理中"
        },{
          num:202105656,
          time:"2021-12-20",
          state:"已完成"
          },
          {
            num:202105655,
            time:"2021-12-19",
            state:"处理中"
          },{
            num:202105656,
            time:"2021-12-20",
            state:"已完成"
            },
            {
              num:202105655,
              time:"2021-12-19",
              state:"处理中"
            },{
              num:202105656,
              time:"2021-12-20",
              state:"已完成"
              },
              {
                num:202105655,
                time:"2021-12-19",
                state:"处理中"
              },{
                num:202105656,
                time:"2021-12-20",
                state:"已完成"
                },
                {
                  num:202105655,
                  time:"2021-12-19",
                  state:"处理中"
                }
      ]
    },
    onShow() {
		this.getTabBar().init();
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
})
