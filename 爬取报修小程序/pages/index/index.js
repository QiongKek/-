Page({
    data: {
        iconList: [ {
            icon: "barcode",
            color: "blue",
            badge: 120,
            name: "空调"
        }, {
            icon: "punch",
            color: "orange",
            badge: 1,
            name: "桌椅"
        }, {
            icon: "square",
            color: "yellow",
            badge: 0,
            name: "门窗"
        }, {
            icon: "paint",
            color: "olive",
            badge: 22,
            name: "公共设施"
        }, {
            icon: "flashlightopen",
            color: "cyan",
            badge: 0,
            name: "供水"
        }, {
            icon: "lightfill",
            color: "blue",
            badge: 0,
            name: "供电"
        }, {
            icon: "recordfill",
            color: "grey",
            badge: 0,
            name: "教学设备"
        }, {
            icon: "stop",
            color: "pink",
            badge: 0,
            name: "床铺"
        }, {
            icon: "circlefill",
            color: "cyan",
            badge: 0,
            name: "其他"
        } ],
        gridCol: 3,
        swiperList: [ {
            id: 0,
            type: "image",
            url: "http://wsfile.dahe.cn/image/jpeg/20211019/1634614705426437.jpg"
        }, {
            id: 1,
            type: "image",
            url: "http://wsfile.dahe.cn/FnwhjWnz39NT54J8CGKm8WDhfR59"
        }, {
            id: 2,
            type: "image",
            url: "http://wsfile.dahe.cn/Fn4dsiAKvCoq3fXVsP6Cr4kfQHxr"
        } ]
    },
    onLoad: function(o) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    gotoupload: function(o) {
        var e = o.currentTarget.dataset.item;
        console.log(e), wx.navigateTo({
            url: "/pages/upload/upload?cate=" + e
        });
    }
});