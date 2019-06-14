import arch from './arch'
import browserInfo from './browser-info'

let clientInfo = {
  // env = browser, wx, alipay
  env: null,
  browser: null,

  /**
   * Get environment, whether in browser or weixin or alipay
   */
  getEnv: function() {
    if (clientInfo.env)
      return clientInfo.env

    let userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.match(/MicroMessenger/i) && userAgent.match(/MicroMessenger/i)[0] === 'micromessenger') {
      clientInfo.env = 'weixin'
    } else if (userAgent.match(/Alipay/i) && userAgent.match(/Alipay/i)[0] === "alipay") {
      clientInfo.env = 'alipay'
    } else {
      clientInfo.env = 'browser'
    }

    return clientInfo.env
  },

  /**
   * Get browser information, {arch:'x86', os:'Linux', name:'Chrome', version:'42', fullVersion:'42.1246.0.12'}
   */
  getBrowser: function() {
    if (clientInfo.browser)
      return clientInfo.browser

    clientInfo.browser = {arch: arch()}
    return Object.assign(clientInfo.browser, browserInfo(navigator.userAgent))
  },
}

export default clientInfo
