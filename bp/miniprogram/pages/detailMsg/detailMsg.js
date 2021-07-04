// miniprogram/pages/detailMeg/detailMsg.js
const db = wx.cloud.database()
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      item:app.globalData.myitem
    })
    //console.log("that.data.item",that.data.item);
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


})