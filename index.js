const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {} } = context
    const trackerUrl = options.trackerUrl || siteConfig.trackerUrl
    const siteId = options.siteId || siteConfig.siteId
    const TRACKER_URL = trackerUrl || false
    const SITE_ID = siteId || false

    return { TRACKER_URL, SITE_ID }
  },

  enhanceAppFiles: [
    path.resolve(__dirname, 'inject.js')
  ]
})
