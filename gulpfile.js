(function(gulp) {

    "use strict";

    var jest = require('gulp-jest');

    gulp.task('jest', function() {

        return gulp.src('tests').pipe(jest({
            scriptPreprocessor: '../node_modules/babel-jest',
            testDirectoryName: 'tests',
            testPathIgnorePatterns: ['node_modules'],
            moduleFileExtensions: ['js']
        }));

    });

    gulp.task('default', ['jest']);

})(require('gulp'));