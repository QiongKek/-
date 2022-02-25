// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  modalName: null,
  // textareaBValue: '',
  multiArray: [
    ["宿舍区域","公共区域"],
    ["1号宿舍楼","2号宿舍楼","3号宿舍楼","4号宿舍楼","5号宿舍楼"],
    ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114','115', '116',
    '201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', 
    '301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', 
    '401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', 
    '501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', 
    '601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', ]
  ],
  multiIndex:[0,0,0],
  imgList: [],
  },
  // // 故障描述
  // textareaBInput(e) { 
  //     this.setData({
  //       textareaBValue: e.detail.value
  //     })
  //     // console.log(this.data.textareaBValue);
  //   },
    // 选择器
    MultiChange(e) {
      this.setData({
        multiIndex: e.detail.value
      })
    },
    MultiColumnChange(e) {
      let data = {
        multiArray: this.data.multiArray, 
        multiIndex: this.data.multiIndex
      };
  
      data.multiIndex[e.detail.column] = e.detail.value;
  
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ["1号宿舍楼","2号宿舍楼","3号宿舍楼","4号宿舍楼","5号宿舍楼"];
              data.multiArray[2] = [
              '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114','115', '116',
              '201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', 
              '301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', 
              '401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', 
              '501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', 
              '601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616'];
              break;
            case 1:
              data.multiArray[1] = ["1号教学楼","2号教学楼","3号教学楼","4号教学楼",];
              data.multiArray[2] = ["1011"];
              break;
          }
          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          break;
      }
      this.setData(data);
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
      if(e.detail.value.name.length==0||e.detail.value.s_id.length==0||e.detail.value.tel.length==0||e.detail.value.type.length==0||e.detail.value.miaoshu.length==0){
        wx.showModal({
          title: "温馨提示", // 提示的标题
          content: "您未填写完整的信息!!", // 提示的内容
          showCancel: false, // 是否显示取消按钮，默认true
          // cancelText: "取消", // 取消按钮的文字，最多4个字符
          // cancelColor: "#000000", // 取消按钮的文字颜色，必须是16进制格式的颜色字符串
          confirmText: "确定", // 确认按钮的文字，最多4个字符
          confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
        })
      }else if(e.detail.value.tel.length!=11){
        wx.showModal({
          title: "温馨提示", // 提示的标题
          content: "手机号输入不正确!", // 提示的内容
          showCancel: false, // 是否显示取消按钮，默认true
          confirmText: "确定", // 确认按钮的文字，最多4个字符
          confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
        })
      }else if(e.detail.value.s_id.length!=10){
        wx.showModal({
          title: "温馨提示", // 提示的标题
          content: "学号输入不正确!", // 提示的内容
          showCancel: false, // 是否显示取消按钮，默认true
          confirmText: "确定", // 确认按钮的文字，最多4个字符
          confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
        })
      }else{
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        console.log("具体地址是:"+this.data.multiIndex)
        console.log(this.data);
      }
      
    },


})