



const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync  = require('browser-sync').create(),
    reload       = browserSync.reload,
    imagemin     = require('gulp-imagemin'),
    cleanCss     = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');

const src = {
    scss: '*.scss',
    js: '*.js',
    html: '*.html',
    css: './css',
    img: './images/*',
    distCSS: './dist/css',
    distIMG: './dist/images'
};

gulp.task('sass', () => {
    return gulp
        .src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(src.css))
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest(src.distCSS))
        .pipe(reload({stream: true}));
});

gulp.task('serve', gulp.series(['sass'], () => {
    browserSync.init({
        server: './'
    });

    gulp.watch(src.scss, gulp.parallel(['sass']));
    gulp.watch(src.js).on('change', reload);
    gulp.watch(src.html).on('change', reload);
}));

gulp.task('imagemin', () => {
    return gulp
        .src(src.img)
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest(src.distIMG))
});

gulp.task('watch', gulp.parallel(['serve']));