var t;

Page({
    data: {
        myskip: 0,
        statusList: [ {
            statusName: "已报修",
            id: "0"
        }, {
            statusName: "已处理",
            id: "1"
        } ],
        currentTab: 0
    },
    onLoad: function(a) {
        t = this, getApp().globalData.user ? t.querylist() : t.setData({
            list: []
        });
    },
    querylist: function() {
        wx.cloud.database().collection("repairorder").where({
            _openid: getApp().globalData.user._openid
        }).orderBy("createdtime", "desc").get().then(function(a) {
            console.log(a.data);
            if (0 != a.data.length) {
                for (var e = new Array(), n = new Array(), s = 0; s < a.data.length; s++) {
                    var o = a.data[s];
                    1 == o.finish ? n.push(o) : e.push(o);
                }
                var i;
                t.setData({
                    startlist: e,
                    endlist: n
                }), 0 == t.data.currentTab ? i = e : 1 == t.data.currentTab && (i = n), 20 == a.data.length && t.setData({
                    showbtn: !0,
                    list: i
                }), t.setData({
                    list: i,
                    showbtn: !1
                });
            }
        });
    },
    onReady: function() {},
    choiceStatus: function(t) {
        var a, e = parseInt(t.currentTarget.id);
        this.setData({
            currentTab: e,
            myskip: 0
        }), 0 == e ? a = this.data.startlist : 1 == e && (a = this.data.endlist), this.setData({
            list: a
        });
    },
    GetCurrentTab: function(t) {
        console.log(t.detail.current);
        this.setData({
            currentTab: t.detail.current
        });
    },
    swithNav: function(t) {
        this.setData({
            currentTab: t.target.dataset.current
        });
    },
    onShow: function() {
        getApp().globalData.user ? this.querylist() : this.setData({
            list: []
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    gotoadd: function() {
        wx.navigateTo({
            url: "../taskupload/taskupload?isadd=" + !0
        });
    },
    gotoupdate: function(a) {
        var e = a.currentTarget.dataset.item;
        console.log(e), getApp().globalData.admintasklist = e, wx.navigateTo({
            url: "../taskupload/taskupload?isadd=false&unload=" + t.data.currentTab
        });
    },
    loadmore: function() {
        var a = t.data.myskip + 1;
        wx.cloud.database().collection("repairorder").where({
            _openid: getApp().globalData.user._openid
        }).skip(20 * a).orderBy("createdtime", "desc").get().then(function(e) {
            console.log(e.data), 0 != e.data.length ? t.setData({
                myskip: a,
                list: t.data.list.concat(e.data)
            }) : wx.showLoading({
                title: "暂无更多",
                duration: 1500
            });
        });
    }
});