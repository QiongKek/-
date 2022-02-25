// pages/ajax/ajax.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'这是我新添加的公告',
    text:'管理员实现添加公告'
  },
  handleGet(){
    wx.request({
      url: 'http://localhost:5001/user',
      success:(res)=>{
        console.log(res.data);
      }
    })
  },
  handlePost(){
    wx.request({
      url: 'http://localhost:3000/swiper',
      method:"POST",
      data:{
      title:this.data.title,
      text:this.data.text
      },
      success:(res)=>{
        console.log(res)
      }
    })
  },
  handlePut(){
    wx.request({
      url: 'http://localhost:5001/user/5',
      method:"Put",
      data:{
        username:"黄四七",
        sex:"女",
        age:"28"
      },
      success:(res)=>{
        console.log(res.data);
      }
    })
  },
  handleDelete(){
    wx.request({
      url: 'http://localhost:5001/user/5',
      method:"DELETE",
    })
  },
})