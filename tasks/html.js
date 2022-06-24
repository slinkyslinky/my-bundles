
import include from 'gulp-file-include' // Соединение частей html
import htmlmin from 'gulp-htmlmin' //HTML минификация
import webpHtml from 'gulp-webp-html'

// Config

// const app = require("../config/app.js")

export default function html() {
    return $.gulp.src($.path.src.html)
        .pipe(include())
        .pipe(webpHtml())
        .pipe(htmlmin($.app.htmlmin))
        .pipe($.gulp.dest($.path.buildFolder))
}


