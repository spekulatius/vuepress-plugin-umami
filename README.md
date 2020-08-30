# Umami Analytics Plugin for VuePress

This project helps to integrate [Umami Analytics](https://umami.is/) in your [VuePress](https://vuepress.vuejs.org/) site. Umami is a self-hosted, privacy-friendly alternative to Google Analytics.


## Why?

Online tracking has become an epidemic eroding our privacy. A very large number of websites collect data using a small number of tools and platforms. This leads to the ability to follow online users and build up detailed profiles. This is a highly undesirable development.

Private and self-hosted solutions such as Umami can help to address the issue. These provide analytics without collecting personalized data and the data stays 100% under your in control.

VuePress is more and more used for developer-related content such as documentation websites. I hope to make a small contribution by allowing and promoting a simple alternative to Google Analytics for this platform.


## Install

For installation instructions on how to get Umami up and running check [this](https://umami.is/docs/install).

To install the VuePress plugin run one of the following commands:

```sh
npm install vuepress-plugin-umami

# or

yarn add vuepress-plugin-umami
```


## Configuration

Add the vuepress plugin in your site or theme config file. Configuration is done as part of the plugin-configuration.

Usually in `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    ['umami', {trackerUrl: 'http://link-to-your-umami-instance.project.com', siteId: 'YYY'}]

    // other plugins
  ]
}
```

See [official docs](https://vuepress.vuejs.org/plugin/using-a-plugin.html) for more details on how to work with VuePress plugins.

## License

This package is release under the MIT license by [Peter Thaleikis](https://peterthaleikis.com).
