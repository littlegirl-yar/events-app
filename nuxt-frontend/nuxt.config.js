export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/plugins/fontawesome-free/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css' },
      { rel: 'stylesheet', href: '/plugins/icheck-bootstrap/icheck-bootstrap.min.css' },
      { rel: 'stylesheet', href: '/plugins/jqvmap/jqvmap.min.css' },
      { rel: 'stylesheet', href: '/dist/css/adminlte.min.css' },
      { rel: 'stylesheet', href: '/plugins/overlayScrollbars/css/OverlayScrollbars.min.css' },
      { rel: 'stylesheet', href: '/plugins/daterangepicker/daterangepicker.css' },
      { rel: 'stylesheet', href: '/plugins/summernote/summernote-bs4.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' }
    ],
    script: [
      { src: '/plugins/jquery/jquery.min.js', body: true },
      { src: '/plugins/jquery-ui/jquery-ui.min.js', body: true },
      { src: '/plugins/bootstrap/js/bootstrap.bundle.min.js', body: true },
      { src: '/plugins/chart.js/Chart.min.js', body: true },
      { src: '/plugins/sparklines/sparkline.js', body: true },
      { src: '/plugins/jqvmap/jquery.vmap.min.js', body: true },
      { src: '/plugins/jqvmap/maps/jquery.vmap.usa.js', body: true },
      { src: '/plugins/jquery-knob/jquery.knob.min.js', body: true },
      { src: '/plugins/moment/moment.min.js', body: true },
      { src: '/plugins/daterangepicker/daterangepicker.js', body: true },
      { src: '/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js', body: true },
      { src: '/plugins/summernote/summernote-bs4.min.js', body: true },
      { src: '/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js', body: true },
      { src: '/dist/js/adminlte.js', body: true }
    ],
    bodyAttrs: {
      class: 'hold-transition sidebar-mini layout-fixed'
    }

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
 
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    ["vue-toastification/nuxt", {
      position: "top-center",
      timeout: 6000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false
    }],

  ],
  
  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },

  auth: {
    strategies: {
      'auth_jwt': {
        provider: 'laravel/jwt',
        url: 'http://127.0.0.1:8000/api',
        endpoints: {
          login: {
            url: '/auth/token',
            method: 'POST'
          },
          user: {
            url: '/me',
            method: 'GET',
            propertyName: 'data'
          },
          logout: false
        },
        token: {
          property: 'access_token'
        }
      },
    }
  },

  build: {
  }
}
