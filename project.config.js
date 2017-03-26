// PROJECT CONFIG
module.exports = {
    APP_NAME: "app", // 
    LANGUAGES: [ // Required to create templates in different languages. Remember to create directories with the same name (src/template/views/pl - en) and to configure Data File
        'pl', // First element is default value of language
        'en'
    ],
    BASE_URL: '/', // Adds tag <base href="BASE_URL"> inside <head> only when a variable is not empty
    HOST: '', // Example host which is required for search engine optimization (SEO) ---> https://www.example-host.pl/
    CONFIG_FILE: 'project.config.js',
    DATA_FILE: 'project.data.json',
    DIRECTORY: {
        WORK_DIR: 'src', // 
        DIST_DIR: 'dist', // 
        TEST_DIR: 'test' // 
    },
    BROWSER_SYNC: {
        TARGET: 'http://at-workflow', // 
        PORT: 3000, // 
        LOG_PREFIX: 'AT', // 
        LOG_CONNECTIONS: true // 
    },
    FTP_CONFIG: { // All variables required to upload files into FTP Server
        HOST: '',
        USER: '',
        PASSWORD: '',
        DESTINATION: '/public_html/'
    },
    API_KEYS: {
        TINIFY: '' // 
    },
    GOOGLE_ANALYTICS: {
        TRACKING_ID: '' // Adds tracking script only when a variable is not empty
    },
    FACEBOOK_APPS: {
        APP_ID: '' // Adds tag <meta property="fb:app_id" content="FACEBOOK_APPS.APP_ID"> inside <head> only when a variable is not empty
    }
};