//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser:true,
        env: 'cloud1-0gwx9yyme21696e7'
      });
    }

    
  },
  globalData:{
    items:{},
    myitem:{}
  },

  onShow:function(options){
    var that = this;
    wx.cloud.callFunction({
      name:"readData",
      success:function(res){
        // console.log(res);
        that.globalData.items=res.result.data;
        //console.log("app.globalData.items",that.globalData.items)
      }
    })
  }
})
