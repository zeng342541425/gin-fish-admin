/**
 * 网站配置文件
 */

const greenText = (text) => `\x1b[32m${text}\x1b[0m`

export const config = {
  appName: 'Gin-Vue-Admin',
  showViteLogo: true,
  keepAliveTabs: false,
  logs: []
}

export const viteLogo = () => {
  if (config.showViteLogo) {
    console.log(
      greenText(

      )
    )
  }
}

export default config
