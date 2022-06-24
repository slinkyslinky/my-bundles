import del from 'del' // Очистка dist



export default function clear() {
    return del($.path.buildFolder)
}

