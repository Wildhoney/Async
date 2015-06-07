(function(gulp) {

    "use strict";

    var karma = require('gulp-karma');

    gulp.task('karma', function() {

        return gulp.src(['tests/*.test.js', 'src/efflux.js'])
            .pipe(karma({
                configFile: 'karma.conf.js',
                action: 'run'
            }))
            .on('error', function(error) {
                throw error;
            });

    });

    gulp.task('default', ['karma']);

})(require('gulp'));