
const isProd = process.argv.includes('--production')
const isDev = !isProd

export const app = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespaces: isProd
    },
    webpack: {
        mode: isProd ? "production" : "development"
    },
    imagemin: {
        verbose: isProd
    }
}