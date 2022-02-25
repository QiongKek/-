Component({
    data: {
    active: 0,
    list: [
			{
				icon: 'flag-o',
				text: '工单',
				url: '/pages/index/index'
			},
			{
				icon: 'completed',
				text: '统计',
				url: '/pages/statistics/statistics'
      },
      {
				icon: 'friends-o',
				text: '我的',
				url: '/pages/my/my'
			}
		]
    },
    methods: {
      onChange(event) {
              
        wx.switchTab({
          url: this.data.list[event.detail].url
        });
        this.setData({ active: event.detail });
      },
      init() {
        const page = getCurrentPages().pop();
        this.setData({
          active: this.data.list.findIndex(item => item.url === `/${page.route}`)
        });
      }
      }
})
