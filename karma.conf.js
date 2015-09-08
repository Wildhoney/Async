module.exports = function(config) {

    config.set({
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
            'tests/*.test.js',
            'src/async.js'
        ],
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Firefox'],
        singleRun: false,
        preprocessors: {
            'src/async.js': ['browserify'],
            'tests/*.test.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [['babelify', { stage: 0 }]]
        }
    });
};
