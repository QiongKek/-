
Page({
  data: {
    list:[{
      title:'河南',
      con:'hahhahahhahhaah',
      s:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      a:"大哥",
      b:"二哥",
      id:2,
    },
    {
      title:'河南',
      con:'hahhahahhahhaah',
      s:'https://s.cn.bing.net/th?id=OIP.m8E1irutOI1P4wUk0uge-AAAAA&w=110&h=110&c=7&rs=1&qlt=80&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=18.2',
      a:"大哥",
      b:"二哥"
    },{
      title:'河南',
      con:'hahhahahhahhaah',
      s:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      a:"大哥",
      b:"二哥"
    },{
      title:'河南',
      con:'hahhahahhahhaah',
      s:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      a:"大哥",
      b:"二哥"
    }
  ]
  },
  tz(e){
  var id=e.currentTarget.dataset.id;
  var title=e.currentTarget.dataset.title;
  console.log(e);
    wx.navigateTo({
      url: `/pages/niu/niu?myid=${id}&title=${title}`,
     
    })
  }
 
});