const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    // REQUIRED CONFIG
    const { siteConfig = {} } = context
    const trackerUrl = options.trackerUrl || siteConfig.trackerUrl
    const siteId = options.siteId || siteConfig.siteId
    const TRACKER_URL = trackerUrl || false
    const SITE_ID = siteId || false

    // OPTIONAL CONFIG
    const DATA_HOST_URL = options.dataHostURL != null ? options.dataHostURL : "" // Allow sending tracking data to URL separate from host umami.js URL
    const DATA_AUTO_TRACK = options.dataAutoTrack != null ? options.dataAutoTrack : true // Configure umami's default auto tracking
    const DO_NOT_TRACK = options.doNotTrack != null ? options.doNotTrack : false // Option to respect user Do Not Track requests, default to false to preserve existing functionality
    const DATA_CACHE = options.dataCache != null ? options.dataCache : false // Allow data caching, using localhost storage
    const DATA_DOMAINS = options.dataDomains != null ? options.dataDomains : "" // Limit tracking to occur on specific domains

    return { TRACKER_URL, SITE_ID, DATA_HOST_URL, DATA_AUTO_TRACK, DO_NOT_TRACK, DATA_CACHE, DATA_DOMAINS }
  },

  enhanceAppFiles: [
    path.resolve(__dirname, 'inject.js')
  ]
})
