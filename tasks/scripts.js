import babel from 'gulp-babel'

import webpack from 'webpack-stream'


export default function scripts() {
    return $.gulp.src($.path.src.scripts, { sourcemaps: $.app.isDev })
        .pipe(babel())
        .pipe(webpack($.app.webpack))

        .pipe($.gulp.dest($.path.build.scripts, { sourcemaps: $.app.isDev }))
}

