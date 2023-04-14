import { TranslateFun } from '../../utils/util';
const appIndex = getApp<IAppOption>()
Page({
  data: {
    query: "",
    content: "",
    curLanchs: appIndex.globalData.curLan.chs
  },
  //跳转页面
  goTochange() {
    wx.navigateTo({
      url: '/pages/change/change'
    })
  },
 

//翻译方法事件

translatetxt() {
  TranslateFun(this.data.query, appIndex.globalData.curLan.lang).then(content => {
    //设置翻译文本
    this.setData({
      content
    })
    //存储到全局
    appIndex.globalData.history.unshift({
      inputTxt: this.data.query,
      resultTxt: content
    })
    //存储本地
    wx.setStorage({
      key: 'history',
      data: appIndex.globalData.history
    })
  })
},
onShow() {
  this.setData({
    curLanchs: appIndex.globalData.curLan.chs
  })
},
  default () { },
})

export default {
  Page
}