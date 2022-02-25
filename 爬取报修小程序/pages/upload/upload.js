var e;


Page({
    data: {
        imgList:[]
    },
    onLoad: function(t) {
        (e = this).setData({
            cate: t.cate
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    gettemplate: function() {
        wx.requestSubscribeMessage({
            tmplIds: [ "LUTLhTRxIBt_KUrVL54CHenzjJN_17IT2wW2H5pdwY0" ],
            success: function(e) {
                console.log(e);
            },
            fail: function(e) {
                console.log("失败", e);
            }
        });
    },

    //上传图片
    doUpload:function(){
        var that=this//选择图片
        wx.chooseImage({
          count: 1,
          sizeType:['compressed'],
          sourceType:['album','camera'],
          success:function(res){
              wx.showLoading({
                title: '上传中',
              })
              const filePath=res.tempFilePaths[0]
              //上传图片<br> // 定义图片名，为了避免重复用的是上传图片的时间戳
              var timestamp=Data.parse(new Data());
              const cloudPath=timestamp+filePath.match(/\.[^.]+?$/)[0]
              wx.cloud.uploadFile({
                  cloudPath,
                  filePath,
                  success:resa=>{
                      console.log('[上传文件]成功：',resa)
                      that.setData({
                          imgList:that.data.imgList.concat(resa.fileID)
                      })
                      that.is_all_ok()
                  },
                  fail:e=>{
                      console.error('[上传文件]失败：',e)
                      wx.showToast({
                        title: '上传失败',
                      })
                  },
                  complete:()=>{
                      wx.hideLoading()
                  }
              })
          },
          fail:e=>{
              console.erroe(e)
          }
        })
    },


    formSubmit: function(t) {
        console.log("form发生了submit事件，携带数据为：", t.detail.value);
        var o = t.detail.value;
        getApp().globalData.user ? (o.user = getApp().globalData.user, o.createdtime = new Date(), 
        o.cate = e.data.cate, o.createdtimenum = new Date().getTime(), wx.cloud.database().collection("repairorder").add({
            data: o
        }).then(function(t) {
            console.log(t), wx.showToast({
                title: "提交成功",
                complete: function(e) {
                    wx.switchTab({
                        url: "/pages/repair/repair"
                    });
                }
            }), e.setData({
                btndisabel: !0
            });
        }).catch(console.error)) : wx.showModal({
            title: "未登录",
            content: "确定立即去登录",
            success: function(e) {
                e.confirm && wx.navigateTo({
                    url: "/pages/user/user"
                });
            }
        });
    }
});