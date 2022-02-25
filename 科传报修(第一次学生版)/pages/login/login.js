// pages/denglu/denglu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  tx:"",
  name:""
  },
  login(){
    console.log("sda");
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log('授权成功',res);
        this.setData({
          tx:res.userInfo.avatarUrl,
          name:res.userInfo.nickName
        })
      },
      fail:(res)=>{
      console.log('授权失败',res);  
      }
    })  
  },
  onload(){

  }
})