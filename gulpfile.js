const gulp         = require('gulp')
const fileinclude  = require('gulp-file-include')
const browserSync  = require('browser-sync')
const sass         = require('gulp-sass')(require('sass'))
const rename       = require("gulp-rename")
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS     = require('gulp-clean-css')
const htmlmin      = require('gulp-htmlmin')
const imagemin     = require('gulp-imagemin')

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        notify: false
    })

    gulp.watch("src/*.html").on('change', browserSync.reload)
})

gulp.task('styles', function () {
    return gulp.src("src/scss/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleanCSS({
            compatibility: 'ie8', level: {
                2: {}
            }
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream())
})

gulp.task('watch', function () {
    gulp.watch("src/**/*.+(scss|sass)", gulp.parallel("styles"))
    gulp.watch(['src/**/*.html', 'src/**/*.json', 'src/js/**/*.js']).on('change', gulp.parallel(['html', 'scripts']))
    gulp.watch("src/fonts/**/*").on('all', gulp.parallel('fonts'))
    gulp.watch("src/icons/**/*").on('all', gulp.parallel('icons'))
    gulp.watch("src/img/**/*").on('all', gulp.parallel('images'))
})

gulp.task('html', function () {
    return gulp.src(['src/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream())
})

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream())
})

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream())
})

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream())
})

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream())
})

gulp.task('default', gulp.parallel(
    'watch',
    'server',
    'styles',
    'scripts',
    'fonts',
    'icons',
    'html',
    'images'
))

