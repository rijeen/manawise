const API_LIVE = {
    URL: window.location.protocol + '//' + window.location.hostname,
    REQUIRE_AUTH: false
};

const API_LOCAL = {
    URL: 'http://barebone.acc.linkin.se',
    REQUIRE_AUTH: false,
    USERNAME: 'barebone',
    PASSWORD: 'barebone'
};

export const CONFIG = {
    API: process.env.NODE_ENV === 'development' ? API_LOCAL : API_LIVE,
	customPostTypes: null, //Will be populated by wordpress
    titleFormat: '{page_title} - {website}',
    enableSitemap: true,
    polyfill: {
        fills: ['Promise', 'fetch', 'Map'],
        options: [],
        minify: true,
        rum: false
    },
    scrollToTopOnRouteChange: true
};
