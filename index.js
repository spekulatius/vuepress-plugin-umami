const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {} } = context
    const trackerUrl = options.trackerUrl || siteConfig.trackerUrl
    const siteId = options.siteId || siteConfig.siteId
    const TRACKER_URL = trackerUrl || false
    const SITE_ID = siteId || false
    const DO_NOT_TRACK =  options.doNotTrack != null ? options.doNotTrack : true // Option to respect user Do Not Track requests, default to true

    return { TRACKER_URL, SITE_ID, DO_NOT_TRACK }
  },

  enhanceAppFiles: [
    path.resolve(__dirname, 'inject.js')
  ]
})
