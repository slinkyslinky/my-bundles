import dartSass from 'sass'
import gulpSass from 'gulp-sass' // Обработка SCSS
import csso from 'gulp-csso'  // CSS минификация
import concat from 'gulp-concat' // Соединение CSS
import autoprefixer from 'gulp-autoprefixer' //Префиксы для CSS
import shorthand from 'gulp-shorthand' // Минификация свойств CSS
import groupMediaQueries from 'gulp-group-css-media-queries'
import webpCss from 'gulp-webp-css'


const sass = gulpSass(dartSass)

export default function styles() {
    return $.gulp.src($.path.src.styles, { sourcemaps: $.app.isDev })

        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(webpCss())
        .pipe(concat('index.css'))
        .pipe(groupMediaQueries())
        .pipe($.gulpIf($.app.isProd, csso()))
        .pipe($.gulp.dest($.path.build.styles, { sourcemaps: $.app.isDev }))
}

