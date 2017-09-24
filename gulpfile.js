
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('dist', [
	'copy-html',
	'styles-dist',
	'scripts-dist'
]);

gulp.task('copy-html', function() {
	gulp.src('public/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('public/views/**/*.htm')
		.pipe(gulp.dest('dist/views'));
	gulp.src('public/scripts/**/*.htm')
		.pipe(gulp.dest('dist/views'));
});

gulp.task('styles-dist', function() {
	gulp.src('public/styles/**/*.css')
		//.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('scripts-dist', function() {	
	return gulp.src([
		'public/**/*.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(ngAnnotate())
		/*.pipe(babel({
            presets: ['es2015']
        }))*/
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/scripts'));

});