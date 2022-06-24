import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const srcFolder = './src'
const buildFolder = './dist'

export const path = {
    build: {
        html: `${buildFolder}/`,
        styles: `${buildFolder}/`,
        scripts: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/images/`,

    },
    src: {
        html: `${srcFolder}/html/*.html`,
        styles: `${srcFolder}/styles/*.scss`,
        scripts: `${srcFolder}/scripts/*.js`,
        fonts: `${srcFolder}/fonts/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}`,
        images: `${srcFolder}/images/*.{png,jpg,jpeg,gif,svg}`,
    },
    watch: {
        html: `${srcFolder}/html/**/*.html`,
        styles: `${srcFolder}/styles/**/*.scss`,
        scripts: `${srcFolder}/scripts/**/*.js`,
        fonts: `${srcFolder}/fonts/**/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}`,
        images: `${srcFolder}/images/**/*.{png,jpg,jpeg,gif,svg}`,
    },
    clear: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',
}