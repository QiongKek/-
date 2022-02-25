var e;

Page({
    data: {
        warnFlag: !1,
        warnMsg: "",
        returnFlag: !1,
        userInfo: null,
        phoneWarnMsg: "",
        usernameWarnMsg: "",
        validateCodeBtnName: "获取验证码",
        validateCodeBtnDisabled: !1,
        validateCodeInputFlag: !0,
        userModalHidden: !1,
        userProtocol: !0,
        submitLoading: !1,
        submitDisabled: !1,
        submitBtnText: "",
        cardHideFlag: !0,
        idCardHideFlag: !0,
        depositHideFlag: !0,
        getDeposit: !1,
        pk_lib: [],
        autoPhone: !0,
        scrollHeight: 0
    },
    onLoad: function(t) {
        e = this, null != getApp().globalData.user && e.setData({
            islogin: !0,
            submitDisabled: !0,
            user: getApp().globalData.user,
            submitBtnText: "修改"
        });
    },
    onShow: function() {},
    cardNum: function(e) {
        var t = this.data.userInfo;
        t.membership_card_number = e.detail.value, this.setData({
            userInfo: t
        });
    },
    idCardInput: function(e) {
        var t = this.data.userInfo;
        t.id_card_num = e.detail.value, this.setData({
            userInfo: t
        });
    },
    userNameInput: function(e) {
        var t = this.data.userInfo;
        null != t && (t.username = e.detail.value, this.setData({
            userInfo: t
        }));
    },
    phoneInput: function(e) {
        this.data.userInfo, e.detail.value;
    },
    validateCodeInput: function(e) {
        this.setData({
            valiCode: e.detail.value
        });
    },
    validatemobile: function(e) {
        if (0 == e.length) return wx.showToast({
            title: "请输入手机号！",
            icon: "success",
            duration: 1500
        }), !1;
        if (11 != e.length) return wx.showToast({
            title: "手机号长度有误！",
            icon: "success",
            duration: 1500
        }), !1;
        return !!/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/.test(e) || (wx.showToast({
            title: "手机号有误！",
            icon: "loading",
            duration: 1500
        }), !1);
    },
    formSubmit: function(t) {
        console.log(t);
        var a = t.detail.value;
        if (a.studentimg = e.data.studentimg, a.userInfo = getApp().globalData.userInfo, 
        "" != a.username && null != a.username) {
            if (e.validatemobile(a.phonenumber)) if ("" != a.grade && null != a.grade) if ("" != a.sex && null != a.sex) if (wx.showLoading({
                title: "上传中..."
            }), e.data.islogin) {
                var n = a;
                n.updatetimenumber = new Date().getTime(), n.updatetime = new Date(), e.updateinfo(n);
            } else {
                var o = a;
                o.createdtime = new Date(), o.createdtimenum = new Date().getTime(), e.addinfo(o);
            } else wx.showLoading({
                title: "请选择性别",
                duration: 1500
            }); else wx.showLoading({
                title: "请输入年级",
                duration: 1500
            });
        } else wx.showLoading({
            title: "请输入姓名",
            duration: 1500
        });
    },
    queryinfo: function() {
        wx.cloud.database().collection("user").where({
            _openid: getApp().globalData.openid
        }).get().then(function(e) {
            console.log(e.data), getApp().globalData.user = e.data[0];
        });
    },
    updateinfo: function(t) {
        wx.cloud.database().collection("user").doc(e.data.user._id).update({
            data: t
        }).then(function(t) {
            console.log(t), wx.hideLoading(), e.setData({
                hasupload: !0,
                submitBtnText: "已修改"
            }), e.queryinfo(), wx.showToast({
                title: "修改成功",
                success: function() {
                    wx.navigateBack({});
                }
            });
        }).catch(console.error);
    },
    addinfo: function(t) {
        wx.cloud.database().collection("user").add({
            data: t
        }).then(function(t) {
            wx.hideLoading(), e.queryinfo(), wx.showToast({
                title: "上传成功",
                success: function() {
                    wx.switchTab({
                        url: "/pages/index/index"
                    });
                }
            }), e.setData({
                hasupload: !0,
                submitBtnText: "已提交"
            }), console.log(t);
        }).catch(console.error);
    },
    formateday: function() {
        var e = new Date(), t = e.getFullYear(), a = e.getMonth() + 1, n = e.getDate();
        a >= 1 && a <= 9 && (a = "0" + a), n >= 0 && n <= 9 && (n = "0" + n);
        var o = t + a + n;
        return console.log(o), o;
    },
    clearInput: function() {
        this.setData({
            inputVal: ""
        });
    },
    onGotUserInfo: function(t) {
        console.log(t.detail.errMsg), getApp().globalData.userInfo = t.detail.userInfo, 
        e.setData({
            islogin: !0,
            userInfo: t.detail.userInfo
        }), console.log(t.detail.userInfo), console.log(t.detail.rawData);
    },
    chooseimg: function() {
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var a = t.tempFilePaths[0];
                e.setData({
                    studentimg: a
                });
            }
        });
    }
});