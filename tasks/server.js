import gulp from 'gulp';    // 
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';     //命令行参数编写

// gulp所有的操作都要再打开一个文件后进行
gulp.task('serve',(cb)=>{
    // 不是在监听环境下，调用回调函数
    if(!args.watch) return cb();
    // 在当前目录下执行服务器脚本    
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();
    // 监听server下所有的js,ejs文件
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        // 控制服务器做相应处理
        server.notify.apply(server,[file]);
    })

    // 监听需要重启服务的文件
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)();
    })

})
