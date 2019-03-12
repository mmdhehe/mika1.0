//加载gulp
const gulp = require('gulp');
//读取用于编译Sass的插件
const sass = require('gulp-sass');
//定义gulp 任务
gulp.task('mika',function () {
	gulp.src('src/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist'))
})

gulp.task('default',()=>{
	gulp.watch(['src/*.scss'],['mika']);
})
