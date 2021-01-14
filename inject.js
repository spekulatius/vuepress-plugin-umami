/* global TRACKER_URL, SITE_ID */
export default ({ router }) => {
  if (
    // only in production
    process.env.NODE_ENV === 'production' &&

    // only if we got an ID and tracker url
    SITE_ID && TRACKER_URL &&

    // and we are ready
    typeof window !== 'undefined'
  ) {
    (function() {
      var d=document,
      g=d.createElement('script'),
      s=d.getElementsByTagName('script')[0];
      g.setAttribute('data-website-id', SITE_ID);

      // Optional config
      if (DATA_HOST_URL != "") {
        g.setAttribute('data-host-url', DATA_HOST_URL);
      }
      if (DATA_AUTO_TRACK == false) {
        g.setAttribute('data-auto-track', DATA_AUTO_TRACK);
      }
      if (DO_NOT_TRACK == true) {
        g.setAttribute('data-do-not-track', DO_NOT_TRACK);
      }
      if (DATA_CACHE == true) {
        g.setAttribute('data-cache', DATA_CACHE);
      }
      if (DATA_DOMAINS != "") {
        g.setAttribute('data-domains', DATA_DOMAINS);
      }

      g.async=true;
      g.defer=true;
      g.src=TRACKER_URL+'/umami.js';
      s.parentNode.insertBefore(g,s);
    })();
  }
}

