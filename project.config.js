// PROJECT CONFIG
module.exports = {
    HOST: 'http://localhost:3000/', // Example host which is required for search engine optimization (SEO) ---> http://www.example-host.pl/
    APP_NAME: "app",
    LANGUAGES: [ // Required to create templates in different languages. Remember to create directories with the same name (src/template/views/pl - en) and to configure Data File
        'pl', // First element is default variable
        'en'
    ],
    BASE_URL: 'http://localhost:3000/', // Adds tag <base href="BASE_URL"> inside <head> only when a variable is not empty
    CONFIG_FILE: 'project.config.js',
    DATA_FILE: 'project.data.json', // Data object which are passing to pug (Dynamic templates)
    DIRECTORY: {
        WORK_DIR: 'src',
        DIST_DIR: 'dist',
        TEST_DIR: 'test'
    },
    FTP_CONFIG: { // All variables required to upload files to FTP Server
        HOST: '',
        USER: '',
        PASSWORD: '',
        DESTINATION: '/public_html/'
    },
    API_KEYS: {
        TINIFY: ''
    },
    GOOGLE_ANALYTICS: {
        TRACKING_ID: '' // Adds tracking script only when a variable is not empty
    },
    FACEBOOK_APPS: {
        APP_ID: '' // Adds tag <meta property="fb:app_id" content="FACEBOOK_APPS.APP_ID"> inside <head> only when a variable is not empty
    }
};