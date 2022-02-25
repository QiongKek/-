
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    avatarurl:null,
    name:"授权登录",
    condition:false

  },
  
wxlogin(){
    if(this.data.avatarurl==null){
    wx.getUserProfile({
        desc: 'desc',
        success: (res) => {
          this.setData({  
            name:res.userInfo.nickName,
            avatarurl:res.userInfo.avatarUrl,
            condition:true
          })

        }
      })
    }else{

    }
},
onShow() {
  this.getTabBar().init();
}, 

//反馈
fback(){
  this.setData({
    show:true
  })
  console.log(this.data.show);
},
onClose() {
  this.setData({ show: false });
},

})