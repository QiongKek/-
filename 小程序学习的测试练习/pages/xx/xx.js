// pages/xx/xx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      title:'这是我新添加的公告',
      text:'管理员实现添加公告'
    
  },
  handlePost(){
    wx.request({
      url: 'http://101.43.17.76/springMVC-G2/notice/',
      header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
      method:"POST",
      data:{
      title:'这是前端提交的标题',
      text:'这是前端提交的文章',
      },
      success:(res)=>{
        console.log("成功");
        console.log(res)
      },
    })
  },
  handleDelete(){
    wx.request({
      url: 'http://101.43.17.76/springMVC-G2/notice/3',
      method:"DELETE",
      
      success:(res)=>{
        console.log("成功");
        console.log(res)
      },
    })
  },
  handlePut(){
    wx.request({
      url: 'http://101.43.17.76/springMVC-G2/notice/22',
      method:"Put",
      data:{
        title:'这是前端提交的标题',
      text:'这是前端修改的文章',
      },
      success:(res)=>{
        console.log("成功");
        console.log(res.data);
      }
    })
  },
})