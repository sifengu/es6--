ES6的学习与实践
==
______


构建工具：webpack（模块化，项目依赖），bable（es6编译成es5），gulp（任务自动化），npm编译成浏览器可识别   
___
 
babel-polyfill      es6兼容性 
 
 目录结构
 ------
 
>/app                            放置前端原生代码    
>>/css   
>>/views   
>>>error.ejs   
>>>index.ejs  

>>/js    
>>>index.js                入口文件   
>>>/class                  放置类文件（es6语法部分）    
>>>>解构赋值.js          es6中解构赋值    
>>>>let-const.js        es6语法中的let-const   
>>>>RegExp.js           es6正则表达式    shiy,u,.   
>>>>num-var.js          数值常量语法   
>>>>string.js           字符串方法（字符串模板，标签模板，api）   
>>>>array.js            数组方法   
>>>>function.js         函数扩展   
>>>>symbol.js    
>>>>set-map.js    
>>>>proxy-reflect.js    
>>>>class.js    
>>>>promise.js    
>>>>Iterator-for...of.js    
>>>>generator.js    
>>>>decorator.js   
   
>>>/lottery                项目目录   
>>>>timer.js            定时器模块   
>>>>calculate.js        计算模块   
>>>>interface.js        接口模块   
>>>>base.js             基本模块   
>>>>index.js                入口文件   
>>>>lottery.js              项目整合模块   
          
>>index.js                    入口文件   

   
>/server                         放置服务器代码     express -e .   
>>/public                     放置app中前端代码的编译结果（es5,es3语法文件）   
   
>/task                           放置构建工具   
>>/util                       放置常见脚本   
>>>args.js                 处理命令行参数   

>>srcipts.js                  处理脚本文件   
>>css.js                      处理css文件   
>>server.js                   处理服务器相关   
>>browser.js                  浏览器监听   
>>pages.js                    处理ejs文件   
>>clean.js                    app中前端代码修改时清空server下public下的文件   
>>build.js                    串联这些工具脚本   
>>default.js                  当命令行gulp 不带参数时默认调用   
   
package.json                    项目依赖    npm init   
.babelrc                        设置Babel配置文件   
gulpfile.babel.js               gulp配置文件    gulp启动时调用这个文件（入口文件）  

启动命令
----
gulp --watch

http://localhost:3000/
