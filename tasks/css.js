import gulp from 'gulp';    // 
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';    //文件修改后浏览器自动刷新
import args from './util/args';

// gulp所有的操作都要再打开一个文件后进行
gulp.task('css',()=>{
    // 获取app下所有嵌套目录下所有的css文件
    return gulp.src('app/**/*.css')
    // 把文件拷贝进指定文件夹下
        .pipe(gulp.dest('server/public'))
        //.pipe(gulpif(args.watch,livereload()))
})
