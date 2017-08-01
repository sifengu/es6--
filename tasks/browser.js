import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';  // gulp常用函数包
import args from './util/args';

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();

    // 监听app下js文件，若文件修改会调用scripts文件
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);

});
