// miniprogram/pages/search/search.js
const db = wx.cloud.database();
const app = getApp();
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
    var that = this;
    
    that.setData({
      items:app.globalData.items
    })
    //console.log("that.data.items",that.data.items)
    
  },


  searchdetail:function(event){
    var that = this;
    // console.log(event.currentTarget.dataset.myitem);
    app.globalData.myitem = event.currentTarget.dataset.myitem;
    //console.log("app.globalData.myitem",app.globalData.myitem);
    wx.navigateTo({
      url: '../detailMsg/detailMsg'
    })
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