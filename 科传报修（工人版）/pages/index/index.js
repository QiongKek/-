// pages/index/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        
    },

    /**
     * 组件的初始数据
     */
    data: {
    
    
    wait:[{
        num:20211000001,
        name:"张琼珂",
        tel:"18236031775",
        place:"5A521",
        type:"水管类",
        fault:"水管不出水",
        time:"2022-01-20 12:20",
        photo:"http://wsfile.dahe.cn/image/jpeg/20211019/1634614705426437.jpg"
    },
    {
        num:20211000002,
        name:"张琼珂",
        tel:"18236031775",
        place:"5A520",
        type:"下水道类",
        fault:"下水道堵塞",
        time:"2022-01-10 21：30",
        photo:"http://wsfile.dahe.cn/image/jpeg/20211019/1634614705426437.jpg"
    },{
        num:20211000001,
        name:"张琼珂",
        tel:"18236031775",
        place:"5A521",
        type:"水管类",
        fault:"水管不出水",
        time:"2022-01-20 12:20",
        photo:"http://wsfile.dahe.cn/image/jpeg/20211019/1634614705426437.jpg"
    },],
    ing:[{
        num:20211000002,
        name:"张琼珂",
        tel:"18236031775",
        place:"2B411",
        type:"下水道类",
        fault:"水管不出水",
        bxtime:"2022-01-20 12:20",
        jdtime:"2022-01-21 7:20",
        photo:"http://wsfile.dahe.cn/image/jpeg/20211019/1634612705252905.jpg"
    },
    ],
    finish:[{
        num:20211000026,
        name:"张琼珂",
        tel:"18236031775",
        place:"8321",
        type:"下水道类",
        fault:"马桶不出水",
        photo:"http://wsfile.dahe.cn/Fn4dsiAKvCoq3fXVsP6Cr4kfQHxr",
        time:"2021-06-26 13:40"
    }]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onShow() {
            this.getTabBar().init();
        },   
        tapName: function(event) {
            wx.navigateTo({
                url: '/pages/detail/detail'
              })
        },
        

    }
})
