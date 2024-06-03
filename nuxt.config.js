let baseUrl = process.env.NODE_ENV === "production" ? "https://api.esgi.or.kr" : "http://localhost:80";

export default {
    target: "client",
    server: {
        port: 3018
    },
    ssr: false,
    head: {
        title: 'ESG',
        htmlAttrs: {
            lang: 'ko'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=0'},
            {hid: 'description', name: 'description', content: ''},
            {property: 'og:description', content: ''},
            {name: 'format-detection', content: 'telephone=no'},

            {name: 'naver-site-verification', content: ''},
            {name: 'google-site-verification', content: ''},

            {property: 'og:image', content: '/asset/images/thumbnail.png'},
            /*{property: 'og:url', content: 'https://wooriview.co.kr'},
            {property: 'keywords', content: 'wooriview, 우리뷰, 리뷰, 캠페인'},
            {property: 'og:site_name', content: '우리뷰 | 우리가 만드는 모든 리뷰 우리뷰'},
            {property: 'description', content: '우리가 만드는 모든 리뷰 우리뷰'},
            {property: 'og:type', content: 'wooriview'},
            {property: 'og:title', content: 'wooriview'},
             */
        ],
        script: [
            {src: "/asset/js/jspdf.js"},
            {src: "//dapi.kakao.com/v2/maps/sdk.js?appkey=5e85237532da8edfc3cc9905f1abdd8c&libraries=services&autoload=false"},
            {src: "//code.jquery.com/jquery-1.12.4.min.js"},
            {src: "/asset/js/swiper.min.js"},
            {src: "/asset/js/common.js"},
            {src: "/asset/js/user.js"},
            {src: "//cdn.iamport.kr/v1/iamport.js"},
            {src: "//unpkg.com/aos@2.3.1/dist/aos.js"},
            {src: "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"},

            {src: "//cdn.jsdelivr.net/npm/chart.js"},
            {src: "//cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/1.4.0/chartjs-plugin-annotation.min.js"},
            {src: "//cdn.quilljs.com/1.3.6/quill.min.js"},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/asset/images/favicon.ico'},
            {rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css'},
            {rel: 'stylesheet', type: 'text/css', href: '//unpkg.com/aos@2.3.1/dist/aos.css'},
            {rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css'},
            {rel: 'stylesheet', type: 'text/css', href: '//cdn.quilljs.com/1.3.4/quill.snow.css'},
            {rel: 'stylesheet', type: 'text/css', href: '/asset/css/swiper.min.css'},
            {rel: 'stylesheet', type: 'text/css', href: '/asset/css/base.css'},
            {rel: 'stylesheet', type: 'text/css', href: '/asset/css/grid.css'},
            {rel: 'stylesheet', type: 'text/css', href: '/asset/css/developer.css'},

            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
            },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: "~plugins/axios.js",
        },
    ],

    middlewares: [""],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/auth-next",
    ],

    axios: {
        baseUrl: baseUrl,
        credentials: true,
        /* proxy: true, */
    },
    /* proxy: {
        '/laravel': {
            target: baseUrl,
            pathRewrite: { '^/laravel': '/' }
        }
    }, */
    auth: {
        redirect: false,
        /*redirect: {
            login: "/login",
            callback: '/login',
            home: '/'
        },*/
        strategies: {
            laravelSanctum: {
                provider: 'laravel/sanctum',
                url: baseUrl,
                endpoints: {
                    login: {
                        url: '/api/login',
                        method: 'post'
                    },
                    logout: {
                        url: "/api/logout",
                        method: "post"
                    },
                }
            },
        },

        axios:true,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [
            'defu',
        ]
    },

    router: {

        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            } else {
                return { x: 0, y: 0 };
            }
        }
    },


}
