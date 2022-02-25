Page({
  data: {
  modalName: null,
  imgList: [],
  },
    ChooseImage() {
      wx.chooseImage({
        count: 4, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album','camera'], //从相册选择
        success: (res) => {
          if (this.data.imgList.length != 0) {
            this.setData({
              imgList: this.data.imgList.concat(res.tempFilePaths)
            })
          } else {
            // console.log("s");
            this.setData({
              imgList: res.tempFilePaths
            })
          }
        },
      });
    },
    ViewImage(e) {
      wx.previewImage({
        urls: this.data.imgList,
        current: e.currentTarget.dataset.url
      });
    },
    DelImg(e) {
      wx.showModal({
        title: '提示',
        content: '确定要删除这段回忆吗？',
        cancelText: '取消',
        confirmText: '删除',
        success: res => {
          if (res.confirm) {
            this.data.imgList.splice(e.currentTarget.dataset.index, 1);
            this.setData({
              imgList: this.data.imgList
            })
          }
        }
      })
    },
    formSubmit: function (e) {
      console.log(console.log(this.data.imgList))
      for(var i=0;i<this.data.imgList.length;i++){
              wx.uploadFile({
                url: '',
                filePath: this.data.imgList[i],
                name: 'file',
                success:(res)=>{
                  console.log(res)
                }
              })
      }    
    },
})

