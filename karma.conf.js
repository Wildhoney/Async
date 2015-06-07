module.exports = function(config) {

    config.set({
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
            'tests/*.test.js',
            'src/efflux.js'
        ],
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: false,
        preprocessors: {
            'src/efflux.js': ['browserify'],
            'tests/*.test.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: ['babelify']
        }
    });
};
