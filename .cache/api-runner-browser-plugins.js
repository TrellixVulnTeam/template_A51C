module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#FFEB35","theme_color":"#FFEB35","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-react-i18next/gatsby-browser.js'),
      options: {"plugins":[],"localeJsonSourceName":"locale","languages":["ua","ru","en"],"defaultLanguage":"ua","siteUrl":"https://example.com/","i18nextOptions":{"interpolation":{"escapeValue":false},"keySeparator":false,"nsSeparator":false},"pages":[{"matchPath":"/:lang?/blog/:uid","getLanguageFromPath":true,"excludeLanguages":["ua"]},{"matchPath":"/preview","languages":["ua"]}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
