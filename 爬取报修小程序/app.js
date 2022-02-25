App({
    onLaunch: function() {
        var o = this;
        if (wx.canIUse("getUpdateManager")) {
            var e = wx.getUpdateManager();
            e.onCheckForUpdate(function(o) {
                console.log("onCheckForUpdate====", o), o.hasUpdate && (console.log("res.hasUpdate===="), 
                e.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(o) {
                            console.log("success====", o), o.confirm && e.applyUpdate();
                        }
                    });
                }), e.onUpdateFailed(function() {
                    wx.showModal({
                        title: "已经有新版本了哟~",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    });
                }));
            });
        }
        wx.cloud ? (wx.cloud.init({
            traceUser: !0
        }), wx.cloud.callFunction({
            name: "login",
            data: {}
        }).then(function(e) {
            if (console.log(e), null != e.result) {
                var n = e.result.openid;
                console.log("openid", n), o.globalData.openid = n, wx.cloud.database().collection("user").where({
                    _openid: n
                }).get().then(function(e) {
                    console.log("全局变量", e), 0 != e.data.length && (o.globalData.user = e.data[0]);
                });
            }
        })
        // .catch(function(o) {
        //     console.log(o), wx.showLoading({
        //         title: "请删除程序重试"
        //     });
        // })
        ) : console.error("请使用 2.2.3 或以上的基础库以使用云能力"), this.globalData = {};
    }
});