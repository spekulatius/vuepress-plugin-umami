# VuePress Plugin Umami Analytics

This project adds [Umami Analytics](https://umami.is/) to your [VuePress](https://vuepress.vuejs.org/) site. Umami is a self-hosted, privacy-friendly alternative to Google Analytics.


## Install

For installation instructions on how to get Umami up and running check [this](https://umami.is/docs/install).

To intall the VuePress plugin run one of the following commands:

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
