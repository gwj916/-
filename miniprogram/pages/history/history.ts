// pages/history/history.ts
const appHistory = getApp<IAppOption>()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList: appHistory.globalData.history
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      historyList: appHistory.globalData.history
    })
  },
  /**
   * 清楚历史记录函数
   */
  clearHistory() {
    this.setData({
      historyList: []
    }),
      appHistory.globalData.history = []
    wx.removeStorage({
      key: "history",
      success(){
        console.log("本地缓存已清除");
      }
    })
  }
})