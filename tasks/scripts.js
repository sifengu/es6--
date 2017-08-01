import gulp from 'gulp';    // 
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';   //处理文件流
import named from 'vinyl-named';    //文件重命名
import livereload from 'gulp-livereload';    //文件修改后浏览器自动刷新
import plumber from 'gulp-plumber';    //处理文件信息流（管道拼接）
import rename from 'gulp-rename';    //文件重命名
import uglify from 'gulp-uglify';    //压缩js,css文件
import {log,colors} from 'gulp-util';   // 命令行输出信息
import args from './util/args';     //命令行参数编写

//  创建脚本编译的任务
gulp.task('scripts',()=>{
    //打开文件
    return gulp.src(['app/js/index.js'])
    //处理常规的错误逻辑
        .pipe(plumber({
            errorHandle: function(){
                //默认错误处理
            }
        }))
        .pipe(named())
        //编译js
        .pipe(gulpWebpack({
            module:{
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel'    //遇到js就用babel参数处理
                }]
            }
        }),null,(err,stats)=>{  //第三个参数处理错误
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks: false
            }))
        })
        // 编译一个路径
        .pipe(gulp.dest('server/public/js'))
        // 处理编译压缩++++
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        // 重新保存压缩后的文件
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
        .pipe(gulp.dest('server/public/js'))
        // 监听文件变化后自动刷新（watch参数）
        .pipe(gulpif(args.watch,livereload()))
})
