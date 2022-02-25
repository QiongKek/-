// pages/news/news.js
Page({


  data: {
    title:'',
    text:'',
    id:'',
  },

  
  onLoad: function (options) {

    // console.log(options);
    this.setData({
      title:options.title,
      id:options.myid
    })

    wx.request({ 
      url: 'http://101.43.17.76/springMVC-G2/notice/'+[this.data.id], 
      success:(res)=>{
        // console.log(res);
        this.setData({
          text:res.data.text
        })
      //  console.log(this.data.gg);
      //   console.log(res.data);
      }
    })
    
    wx.setNavigationBarTitle({
      title: this.data.title
  })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})