Page({
  data: {
  
    
    
    // 卡片()
    gg:[],
    list:[{
      title:'第一个',
      con:'这里是第一个卡片的内容',
      s:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      a:"河南科技传媒学院",
      b:"张琼珂",
      id:0,
    },
    {
      title:'第二个',
      con:'这里是第二个卡片的内容',
      s:'https://s.cn.bing.net/th?id=OIP.m8E1irutOI1P4wUk0uge-AAAAA&w=110&h=110&c=7&rs=1&qlt=80&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=18.2',
      a:"科传公告",
      b:"报修",
      id:1,
    },{
      title:'第三个',
      con:'这里是第三个卡片的内容',
      s:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      a:"民生",
      b:"加油",
      id:2,
    },{
      title:'第四个',
      con:'这里是第四个卡片的内容',
      s:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      a:"小标题",
      b:"小标题",
      id:3,
    }
  ],
  
  // 轮播图
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://wsfile.dahe.cn/image/jpeg/20211019/1634614705426437.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'http://wsfile.dahe.cn/FnwhjWnz39NT54J8CGKm8WDhfR59',
    }, {
      id: 2,
      type: 'image',
      url: 'http://wsfile.dahe.cn/Fn4dsiAKvCoq3fXVsP6Cr4kfQHxr'
    }, {
      id: 3,
      type: 'image',
      url: 'http://wsfile.dahe.cn/image/jpeg/20210426/1619406039587968.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'http://wsfile.dahe.cn/FnwhjWnz39NT54J8CGKm8WDhfR59'
    }],
  },

  onLoad:function() {
    this.towerSwiper('swiperList');
    
    // 初始化towerSwiper 传已有的数组名即可
      wx.request({ 
        url: 'http://101.43.17.76/springMVC-G2/notice/', 
        success:(res)=>{
          this.setData({
            gg:res.data
          })
        //  console.log(this.data.gg);
        //   console.log(res.data);
        }
      })
    
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  // 卡片的数据
  
  targetnews(e){
    var id=e.currentTarget.dataset.id;
    var title=e.currentTarget.dataset.title;
      wx.navigateTo({
        url: `/pages/news/news?myid=${id}&title=${title}`,
        
      })
    }


})