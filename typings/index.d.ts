/// <reference path="./types/index.d.ts" />
interface lang {
  chs: string,
  lang: string,
  index: number
}

interface IAppOption {
  globalData: {
    lanList: lang[],
    curLan:lang
    history: {
      inputTxt: string,
      resultTxt: string
    }[]
    // userInfo?: WechatMiniprogram.UserInfo,
  }
  // userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}