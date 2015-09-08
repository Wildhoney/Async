(function(gulp) {

    "use strict";

    var karma      = require('gulp-karma'),
        uglify     = require('gulp-uglify'),
        eslint     = require('gulp-eslint'),
        rename     = require('gulp-rename'),
        fs         = require('fs'),
        browserify = require('browserify'),
        babelify   = require('babelify');

    var compile = function(destPath, entryFile) {

        return browserify({ debug: true })
            .transform(babelify, { stage: 0 })
            .require(entryFile, { entry: true })
            .bundle()
            .on('error', function (model) { console.error(['Error:', model.message].join(' ')); })
            .pipe(fs.createWriteStream(destPath));

    };

    gulp.task('karma', function() {

        return gulp.src(['tests/*.test.js', 'src/async.js'])
            .pipe(karma({
                configFile: 'karma.conf.js',
                action: 'run'
            }))
            .on('error', function(error) {
                throw error;
            });

    });

    gulp.task('lint', function() {

        return gulp.src('src/async.js')
                   .pipe(eslint())
                   .pipe(eslint.format())
                   .pipe(eslint.failOnError());

    });

    gulp.task('compile', function() {
        return compile('dist/async.js', 'src/async.js');
    });

    gulp.task('minify', ['compile'], function() {

        return gulp.src('dist/async.js')
                   .pipe(uglify())
                   .pipe(rename('async.min.js'))
                   .pipe(gulp.dest('dist'));

    });

    gulp.task('test', ['karma', 'lint']);
    gulp.task('build', ['compile', 'minify']);
    gulp.task('default', ['test', 'build']);

})(require('gulp'));