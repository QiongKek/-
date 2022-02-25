var t, e = getApp();

Page({
    data: {
        StatusBar: e.globalData.StatusBar,
        CustomBar: e.globalData.CustomBar,
        Custom: e.globalData.Custom,
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        TabCur: 1,
        myskip: 0,
        scrollLeft: 0
    },
    onLoad: function(e) {
        if (t = this, e.phone) {
            var a = wx.cloud.database();
            a.collection("user").where({
                phonenumber: a.RegExp({
                    regexp: e.phone,
                    options: "i"
                })
            }).get().then(function(e) {
                console.log(e.data), 0 == e.data.length ? wx.showLoading({
                    title: "暂无数据",
                    duration: 1500
                }) : t.setData({
                    userlist: e.data
                });
            });
        } else t.queryuser();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        t.queryuser();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getUserInfo: function(t) {
        console.log(t), e.globalData.userInfo = t.detail.userInfo, this.setData({
            userInfo: t.detail.userInfo,
            hasUserInfo: !0
        });
    },
    showModal: function(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        }), console.log(e), t.setData({
            userdetail: e.currentTarget.dataset.item
        });
    },
    hideModal: function(t) {
        this.setData({
            modalName: null
        });
    },
    tabSelect: function(t) {
        console.log(t), this.setData({
            TabCur: t.currentTarget.dataset.id,
            scrollLeft: 60 * (t.currentTarget.dataset.id - 1)
        });
    },
    queryuser: function() {
        wx.cloud.database().collection("user").orderBy("createdtime", "desc").get().then(function(e) {
            console.log(e.data);
            var a = !1;
            20 == e.data.length && (a = !0), t.setData({
                userlist: e.data,
                btnmore: a
            });
        });
    },
    preview: function(t) {
        var e = t.currentTarget.dataset.img, a = new Array();
        a.push(e), wx.previewImage({
            current: e,
            urls: a
        });
    },
    changeuser: function(e) {
        console.log(e);
        var a, o, n = e.currentTarget.dataset.item, s = e.currentTarget.dataset.index;
        n.isAdmin ? (a = !1, o = "确定取消管理员？") : (a = !0, o = "确定把ta设为管理员？"), wx.showModal({
            title: "提示",
            content: o,
            success: function(e) {
                console.log(e), e.confirm && wx.cloud.callFunction({
                    name: "updatedata",
                    data: {
                        table: "user",
                        query: {
                            _id: n._id
                        },
                        detail: {
                            isAdmin: a,
                            changeid: getApp().globalData.user._openid,
                            updatetime: new Date(),
                            updatetimenumber: new Date().getTime()
                        }
                    }
                }).then(function(e) {
                    var o = t.data.userlist;
                    o[s].isAdmin = a, t.setData({
                        userlist: o
                    }), wx.showToast({
                        title: "设置成功"
                    });
                }).catch(function(t) {
                    wx.showLoading({
                        title: "设置失败 ",
                        duration: 1500
                    });
                });
            }
        });
    },
    formSubmit: function(e) {
        console.log("form发生了submit事件，携带数据为：", e.detail.value.phone);
        var a = wx.cloud.database();
        a.collection("user").where({
            phonenumber: a.RegExp({
                regexp: e.detail.value.phone,
                options: "i"
            })
        }).get().then(function(e) {
            console.log(e.data), 0 == e.data.length ? wx.showLoading({
                title: "暂无数据",
                duration: 1500
            }) : t.setData({
                userlist: e.data,
                myskip: 0
            });
        });
    },
    loadmore: function() {
        var e = t.data.myskip + 1;
        wx.cloud.database().collection("user").skip(20 * e).orderBy("createdtime", "desc").get().then(function(a) {
            console.log(a.data), 0 != a.data.length ? t.setData({
                userlist: t.data.userlist.concat(a.data),
                myskip: e
            }) : wx.showLoading({
                title: "暂无更多",
                duration: 1500
            });
        });
    },
    down: function(t) {
        function e() {
            return t.apply(this, arguments);
        }
        return e.toString = function() {
            return t.toString();
        }, e;
    }(function() {
        var e = [ "id", "_openid", "添加他的管理id", "创建时间", "创建时间戳", "年级", "兴趣", "是否管理员", "爱好", "专业", "电话", "学院", "性别", "学生证", "学号", "更新时间", "更新时间戳", "微信昵称", "用户名" ];
        wx.showModal({
            title: "导出提示",
            content: "确认导出当前信息",
            success: function(a) {
                a.confirm && down.exportFile(e, t.data.userlist, "uploadexportfile");
            }
        });
    })
});