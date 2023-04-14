// pages/change/change.ts
const appchange = getApp<IAppOption>()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lanList: appchange.globalData.lanList,
    curLanindex: appchange.globalData.curLan.index,
  },

  selectHanle(option: any) {
    const index = option.currentTarget.dataset.id;
    for (let i = 0; i < appchange.globalData.lanList.length; i++) {
      if (appchange.globalData.lanList[i].index === index) {
        appchange.globalData.curLan = appchange.globalData.lanList[i];
        this.setData({
          curLanindex: appchange.globalData.curLan.index,
        })
      }
    }
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})