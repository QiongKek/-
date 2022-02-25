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
        wx.cloud.database().collection("repairorder").orderBy("createdtime", "desc").get().then(function(a) {
            console.log(a.data);
            if (0 != a.data.length) {
                for (var e = new Array(), n = new Array(), o = 0; o < a.data.length; o++) {
                    var s = a.data[o];
                    1 == s.finish ? n.push(s) : e.push(s);
                }
                var r;
                t.setData({
                    startlist: e,
                    endlist: n
                }), 0 == t.data.currentTab ? r = e : 1 == t.data.currentTab && (r = n), 20 == a.data.length && t.setData({
                    showbtn: !0,
                    list: r
                }), t.setData({
                    list: r,
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
        wx.cloud.database().collection("repairorder").skip(20 * a).orderBy("createdtime", "desc").get().then(function(e) {
            console.log(e.data), 0 != e.data.length ? t.setData({
                myskip: a,
                list: t.data.list.concat(e.data)
            }) : wx.showLoading({
                title: "暂无更多",
                duration: 1500
            });
        });
    },
    gotouser: function(t) {
        var a = t.currentTarget.dataset.phone;
        wx.navigateTo({
            url: "/pages/admin/usermanager/usermanager?phone=" + a
        });
    },
    gotodeal: function(a) {
        var e = a.currentTarget.dataset.item, n = getApp().globalData.user;
        console.log("cease", n);
        var o = t.formatDateTime(new Date());
        console.log("时间", o), wx.showModal({
            title: "处理提醒",
            content: "确定已经处理好相关问题？",
            success: function(a) {
                a.confirm && wx.cloud.callFunction({
                    name: "updatestatus",
                    data: {
                        name: n.username,
                        phone: n.phonenumber,
                        adminid: n._id,
                        id: e._id,
                        ordernumber: new Date().getTime(),
                        userid: e.user._openid,
                        detail: o
                    }
                }).then(function(a) {
                    console.log(a), t.querylist(), wx.showToast({
                        title: "处理成功"
                    });
                }).catch(function(t) {});
            }
        }), console.log(e);
    },
    testte: function() {
        wx.requestSubscribeMessage({
            tmplIds: [ "LUTLhTRxIBt_KUrVL54CHenzjJN_17IT2wW2H5pdwY0" ],
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {
                console.log("失败", t);
            }
        });
    },
    formatDateTime: function(t) {
        var a = t.getHours(), e = t.getMinutes(), n = t.getSeconds(), o = t.getFullYear(), s = t.getMonth(), r = t.getDate();
        return a < 10 && (a = "0" + a), e < 10 && (e = "0" + e), n < 10 && (n = "0" + n), 
        (s += 1) < 10 && (s = "0" + s), r < 10 && (r = "0" + r), o + "-" + s + "-" + r + " " + a + ":" + e + ":" + n;
    },
    makephone: function(t) {
        var a = t.currentTarget.dataset.phone;
        wx.showModal({
            title: "拨打提示",
            content: "确定给" + a + "拨打电话",
            success: function(t) {
                t.confirm && wx.makePhoneCall({
                    phoneNumber: a
                });
            }
        });
    }
});