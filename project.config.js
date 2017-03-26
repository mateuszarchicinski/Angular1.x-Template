// PROJECT CONFIG
module.exports = {
    APP_NAME: "app", // Value of directive (ng-app) to auto-bootstrap an AngularJS application.
    LANGUAGES: [ // Required to create templates in different languages. Remember to create directories with the same name (src/template/views/pl - en) and to configure Data File.
        'pl', // First element is default value of language
        'en'
    ],
    BASE_URL: '/', // Adds tag <base href="BASE_URL"> inside <head> only when a variable is not empty.
    HOST: '', // Production host of your domain which is required for tags <meta property="og:url content="HOST"> and <meta property="og:image" content="HOST + tile-1200x630px.png">.
    CONFIG_FILE: 'project.config.js',
    DATA_FILE: 'project.data.json',
    DIRECTORY: {
        WORK_DIR: 'src', // Workflow directory
        DIST_DIR: 'dist', // Distribution directory
        TEST_DIR: 'test' // Test directory
    },
    BROWSER_SYNC: { // Custom configuration of module BROWSER SYNC
        TARGET: 'http://at-workflow',
        PORT: 3000,
        LOG_PREFIX: 'AT',
        LOG_CONNECTIONS: true
    },
    FTP_CONFIG: { // All variables required to upload files into FTP Server
        HOST: '',
        USER: '',
        PASSWORD: '',
        DESTINATION: '/public_html/'
    },
    API_KEYS: {
        TINIFY: '' // To use the API you must provide your API key. You can get an API key here ---> https://tinypng.com/developers
    },
    GOOGLE_ANALYTICS: {
        TRACKING_ID: '' // Adds tracking script only when a variable is not empty.
    },
    FACEBOOK_APPS: {
        APP_ID: '' // Adds tag <meta property="fb:app_id" content="FACEBOOK_APPS.APP_ID"> inside <head> only when a variable is not empty.
    }
};