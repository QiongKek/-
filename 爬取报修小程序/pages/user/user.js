var o;

Page({
    data: {},
    onLoad: function(e) {
        o = this;
        var a = getApp().globalData.user;
        a ? (console.log("发文"), o.setData({
            user: a,
            islogin: !0
        })) : o.setData({
            islogin: !1
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().globalData.user && wx.cloud.database().collection("user").where({
            _openid: getApp().globalData.user._openid
        }).get().then(function(e) {
            0 != e.data.length && (getApp().globalData.user = e.data[0], o.setData({
                islogin: !0,
                user: e.data[0]
            }));
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    onGotUserInfo: function(o) {
        console.log(o.detail.errMsg), console.log(o.detail.userInfo), console.log(o.detail.rawData), 
        "getUserInfo:ok" == o.detail.errMsg && (getApp().globalData.userInfo = o.detail.userInfo, 
        wx.navigateTo({
            url: "/pages/userinfo/userinfo"
        }));
    },
    gotochange: function() {
        wx.navigateTo({
            url: "/pages/userinfo/userinfo"
        });
    },
    gotoupload: function() {
        wx.navigateTo({
            url: "/pages/upload/upload"
        });
    },
    viewimg: function(o) {
        var e = o.currentTarget.dataset.src;
        console.log(e);
        var a = new Array();
        a.push(e), wx.previewImage({
            current: e,
            urls: a
        });
    }
});