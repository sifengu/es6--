import yargs from 'yargs';

const args = yargs

    .option('production',{  // 命令行里的选项部分
        boolean: true,   // 区分项目是否为线上
        default: false,
        describe: 'min all scripts'
    })

    .option('watch',{   // 是否自动编译
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    .option('verbose',{ //是否详细输出日志
        boolean: true,
        deafult: false,
        describe: 'log'
    })

    .option('sourcemaps',{
        describe: 'force the creation of sourcemaps'
    })

    .option('port',{    //启动服务器
        string: true,
        deafult: 8080,
        describe: 'server port'
    })

    .argv   //输入的命令行以字符串类型进行解析

export default args;
