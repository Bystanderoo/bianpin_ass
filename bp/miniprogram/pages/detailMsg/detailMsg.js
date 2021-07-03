// miniprogram/pages/detailMeg/detailMsg.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //that.readData();
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

  readData: function(){
    var that = this;
    db.collection('bianpin').get({
      success: res=>{
        that.setData({
          items:res
        })
        console.log("items",this.data.items);
      }
    })
  }

})