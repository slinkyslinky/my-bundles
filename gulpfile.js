import gulp from 'gulp'
import gulpIf from 'gulp-if'
import { path } from './config/path.js'
import { app } from './config/app.js'

global.$ = {
    gulp: gulp,
    path: path,
    app: app,
    gulpIf: gulpIf,

}

import clear from "./tasks/clear.js"
import fonts from "./tasks/fonts.js"
import html from "./tasks/html.js"
import images from "./tasks/images.js"
import scripts from "./tasks/scripts.js"
import styles from "./tasks/styles.js"
import serve from "./tasks/serve.js"

const dev = () => {
    return $.gulp.series(
        clear,
        $.gulp.parallel(html, styles, scripts, images, fonts),
        serve
    )
}

const build = () => {
    return $.gulp.series(
        clear,
        $.gulp.parallel(html, styles, scripts, images, fonts),

    )
}

$.gulp.task('default', app.isDev ? dev() : build())