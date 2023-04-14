const md5 = require('./md5.min.js')

const APPID = "20230407001632650"
const key = "RLToHRSmiiu3bA84L3RF"
export function TranslateFun(q: string, to: string, from: string = "auto"): Promise<string> {
  return new Promise((reslove, reject) => {
    //随机数
    const salt = Date.now()
    //md5加密数据
    const sign = md5(`${APPID}${q}${salt}${key}`)
    //请求百度翻译
    wx.request({
      url: "https://fanyi-api.baidu.com/api/trans/vip/translate",
      data: {
        q,
        from,
        to,
        appid: APPID,
        salt,
        sign
      },
      //成功回调
      success(res: any) {
        if (res.data && res.data.trans_result) {
          reslove(res.data.trans_result[0].dst)
        }
      },
      //失败回调
      fail() {
        wx.showToast({
          title: "网络错误",
          icon:"error"
        })
        reject({
          status:"error",
          msg:"翻译失败"
        })
      }
    })
  })
}

